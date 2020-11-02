const command = require("dsu-wizard").getDummyCommand();

function setGtinSSI(server){
	const dsu_wizard = require("dsu-wizard");
	const commandRegistry = dsu_wizard.getCommandRegistry(server);
	const utils = dsu_wizard.utils;

	commandRegistry.register("/gtin", "post", (req, callback)=>{
		const transactionManager = dsu_wizard.getTransactionManager();

		utils.bodyParser(req, (err)=>{
			if(err){
				return callback(err);
			}

			const gtinData = JSON.parse(req.body);
			const GtinResolver = require("../gtin-resolver");
			const gtinSSI = GtinResolver.createGTIN_SSI(gtinData.dlDomain, gtinData.gtin, gtinData.batch, gtinData.expiration);

			const transaction = transactionManager.getTransaction(req.params.transactionId);
			transaction.context.keySSI = gtinSSI;
			transaction.context.options.useSSIAsIdentifier = true;

			return callback(undefined, command);
		});
	});
}

module.exports = setGtinSSI;