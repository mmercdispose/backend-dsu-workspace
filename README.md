# dossier-explorer-ssapp

dossier-explorer-ssapp is a SSApp that allows the manipulation of DSUs, like importing/downloading files and folders to a DSU, importing/creating  another DSU in the current working DSU and navigation inside a DSU hierarchy.  

### Installation

In order to use the *dossier-explorer-ssapp* we need to install the **ssapp-demo-workspace**, following the steps below.

First, let's clone the workspace

```sh
$ git clone https://github.com/PrivateSky/ssapp-demo-workspace.git
```

After the repository was cloned, you must install all the dependencies.

```sh
$ cd ssapp-demo-workspace
$ npm install
```

If you have trouble installing the ssap-demo-workspace, please try to follow the guide provided on [PrivateSky.xyz](https://privatesky.xyz/?Start/installation)

The last two commands you need to run in the *ssapp-demo-workspace* workspace
```sh
$ npm run server
$ npm run build-all
```

In order to use the *dossier-explorer-ssapp*, after the above commands have been executed successfully, we need to open a new incognito window in a browser and go to
http://localhost:8080/web-wallet/loader
