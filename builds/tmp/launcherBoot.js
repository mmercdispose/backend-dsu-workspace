if(typeof $$ === "undefined" || !$$.environmentType) {
	const or = require('overwrite-require');
	or.enableForEnvironment(or.constants.NODEJS_ENVIRONMENT_TYPE);
}

require("./launcherBoot_intermediar");