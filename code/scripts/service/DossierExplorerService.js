class DossierExplorerService {

    constructor() {
        const HostBootScript = require("boot-host").HostBootScript;
        const HostPC = new HostBootScript("dossier-explorer");
    }

    readDir(path, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {
                withFileTypes: false
            };
        }
        $$.interactions
            .startSwarmAs("test/agent/007", "readDir", "readDir", path, options)
            .onReturn(callback);
    }

    readDirDetailed(path, callback) {
        $$.interactions
            .startSwarmAs("test/agent/007", "readDir", "start", path)
            .onReturn(callback);
    }

    createDossier(path, dossierName, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "attachDossier", "newDossier", path, dossierName)
            .onReturn(callback);
    }

    importDossier(path, dossierName, SEED, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "attachDossier", "fromSeed", path, dossierName, SEED)
            .onReturn(callback);
    }

    addFolder(path, folderName, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "add", "folder", path, folderName)
            .onReturn(callback);
    }

    rename(oldPath, newPath, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "rename", "start", oldPath, newPath)
            .onReturn(callback);
    }

    deleteFileFolder(path, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "delete", "fileFolder", path)
            .onReturn(callback);
    }

    deleteDossier(path, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "delete", "dossier", path)
            .onReturn(callback);
    }

    printDossierSeed(path, dossierName, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "listDossiers", "printSeed", path, dossierName)
            .onReturn(callback);
    }
    getMountedDossier(path, callback) {
        $$.interactions.startSwarmAs("test/agent/007", "listDossiers", "getMountedDossier", path)
            .onReturn(callback);
    }
    addMarketplace(marketplaceData, callback) {
        $$.interaction.startSwarmAs("test/agent/007", "applicationsSwarm", "createMarketplaceDossier", marketplaceData)
            .onReturn(callback);
    }
    importMarketplace(marketplaceKeySSI, callback) {
        $$.interaction.startSwarmAs("test/agent/007", "applicationsSwarm", "importMarketplace", marketplaceKeySSI)
            .onReturn(callback);
    }
    listMarketplaces(callback) {
        $$.interaction.startSwarmAs("test/agent/007", "applicationsSwarm", "listMarketplaces")
            .onReturn(callback);
    }
    removeMarketplace(marketplaceData, callback) {
        $$.interaction.startSwarmAs("test/agent/007", "applicationsSwarm", "removeMarketplace", marketplaceData)
            .onReturn(callback);
    }
}

let dossierExplorer = new DossierExplorerService();
let getDossierServiceInstance = function() {
    return dossierExplorer;
};

export {
    getDossierServiceInstance
};