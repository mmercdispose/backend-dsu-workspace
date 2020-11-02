import { Component, h, Prop, State, Element, Watch } from '@stencil/core';
import { TableOfContentProperty } from '../../decorators/TableOfContentProperty';
import { MatchResults, RouterHistory } from "@stencil/router";
import { BindModel } from "../../decorators/BindModel";
import CustomTheme from "../../decorators/CustomTheme";
import SSAppInstanceRegistry from "./SSAppInstancesRegistry.js";
import NavigatinTrackerService from "./NavigationTrackerService.js";

@Component({
	tag: 'psk-ssapp',
	shadow: false
})
export class PskSelfSovereignApp {

	@BindModel() modelHandler;

	@CustomTheme()

	@TableOfContentProperty({
		isMandatory: true,
		description: [`This property represents the name of the Self Sovereign Application that you want to run.`],
		propertyType: 'string'
	})
	@Prop() appName: string;

	@TableOfContentProperty({
		isMandatory: false,
		description: `This property keeps should have 2 keys: currentDossierPath and fullPath`,
		propertyType: 'string'
	})
	@Prop({
		attribute: "key-ssi"
	}) seed: string = null;

	@TableOfContentProperty({
		isMandatory: true,
		description: `This property represents the direct path that will be passed to the Iframe as the landing-page property.`,
		propertyType: 'string'
	})
	@Prop() landingPath: string;

	@Prop() history: RouterHistory;
	@Prop() match: MatchResults;

	@State() digestKeySsiHex;
	@Element() element;

	private eventHandler;
	private componentInitialized = false;

	connectedCallback() {
		navigator.serviceWorker.addEventListener('message', this.__getSWOnMessageHandler());
	}

	disconnectedCallback() {
		navigator.serviceWorker.removeEventListener('message', this.__getSWOnMessageHandler());
	}

	componentShouldUpdate(newValue, oldValue, changedState) {
		if (newValue !== oldValue && changedState === "digestKeySsiHex") {
			window.document.removeEventListener(oldValue, this.eventHandler);
			window.document.addEventListener(newValue, this.eventHandler);
			return true;
		}
		return false;
	}

	componentWillLoad(): Promise<any> {
		if (!this.element.isConnected) {
			return;
		}
		return new Promise((resolve) => {
			this.componentInitialized = true;
			this.loadApp(resolve)
		});
	}

	componentDidLoad() {
		let iframe = this.element.querySelector("iframe");
		console.log("#### Trying to register ssapp reference");
		SSAppInstanceRegistry.getInstance().addSSAppReference(this.appName, iframe);

		this.eventHandler = this.__ssappEventHandler.bind(this);
		window.document.addEventListener(this.digestKeySsiHex, this.eventHandler);
		NavigatinTrackerService.getInstance().listenForSSAppHistoryChanges();
	}

	@Watch("seed")
	@Watch("match")
  @Watch("landingPath")
	loadApp(callback?) {
		if (this.__hasRelevantMatchParams()) {
			this.seed = atob(this.match.params.keySSI);
		}

		if (this.componentInitialized) {
			this.digestKeySsiHex = this.__digestMessage(this.seed);
			NavigatinTrackerService.getInstance().setIdentity(this.digestKeySsiHex);
			if (typeof callback === "function") {
				callback();
			}
		}
	};

	render() {

		let basePath;
		let parentWindow = window.parent;
		let currentWindow = window;

		try {
			while (currentWindow !== parentWindow) {
				basePath = parentWindow.location.origin+parentWindow.location.pathname;
				// @ts-ignore
				currentWindow = parentWindow;
				parentWindow = parentWindow.parent;
			}

		}
		catch (e) { }
		finally {
			basePath = currentWindow.location.origin+currentWindow.location.pathname;
			if (basePath[basePath.length - 1] !== '/') {
				basePath += '/';
			}

			const iframeSrc = basePath + "iframe/" + this.digestKeySsiHex;
			return (
				<iframe
					landing-page={this.landingPath}
					frameborder="0"
					style={{
						overflow: "hidden",
						height: "100%",
						width: "100%"
					}}
					src={iframeSrc} />
			)
		}

	}

	__onServiceWorkerMessageHandler: (e) => void;

	__hasRelevantMatchParams() {
		return this.match && this.match.params && this.match.params.keySSI;
	}

	__ssappEventHandler(e) {
		const data = e.detail || {};
		let iframe = this.element.querySelector("iframe");

		if (data.query === 'seed') {
			iframe.contentWindow.document.dispatchEvent(new CustomEvent(this.digestKeySsiHex, {
				detail: {
					seed: this.seed
				}
			}));
			return;
		}

		if (data.status === 'completed') {
			iframe.contentWindow.location.reload();
		}
	}

	__getSWOnMessageHandler() {
		if (this.__onServiceWorkerMessageHandler) {
			return this.__onServiceWorkerMessageHandler;
		}

		/**
		 * Listen for seed requests
		 */
		this.__onServiceWorkerMessageHandler = (e) => {
			if (!e.data || e.data.query !== 'seed') {
				return;
			}

			const swWorkerIdentity = e.data.identity;
			if (swWorkerIdentity === this.digestKeySsiHex) {
				e.source.postMessage({
					seed: this.seed
				});
			}
		};
		return this.__onServiceWorkerMessageHandler;
	}

	__digestMessage(message) {
		// @ts-ignore
		const PskCrypto = require("pskcrypto");
		const hexDigest = PskCrypto.pskHash(message, "hex");
		return hexDigest;
	}
}
