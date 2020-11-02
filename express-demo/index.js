const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8090;
const dlDomain = 'default';

// Loading OpenDSU Environment
require('../privatesky/psknode/bundles/pskWebServer');
require('../privatesky/psknode/bundles/openDSU');
const openDSU = require('opendsu');

// Enabling GTINSSI resolver
require('../gtin-resolver/build/bundles/gtinResolver');

// Defining a GET with /leaflet endpoint that based on query params is able to load a DSU and retrieve the leaflet file from it
app.get('/leaflet', (req, res) => {
    let {gtin, batch, expirationDate} = req.query;

    if (gtin === undefined || batch === undefined || expirationDate === undefined) {
        return res.status(400).send();
    }

    // Obtaining gtin-resolver instance
    const gtinResolver = require('gtin-resolver');

    // Creating GTINSSI based on query params
    const gtinssi = gtinResolver.createGTIN_SSI(dlDomain, gtin, batch, expirationDate).getIdentifier();

    // Loading DSU resolver
    const resolver = openDSU.loadApi('resolver');

    // Loading DSU using GTINSSI created above
    resolver.loadDSU(gtinssi, (err, dsu) => {
        if (err) {
            return res.status(500).send();
        }

        // Using DSU instance we read leaflet file
        dsu.readFile('/batch/product/leaflet.xml', (err, leaflet) => {
            if (err) {
                return res.status(404).send();
            }

            // Responding with the leaflet file content
            res.status(200).send(leaflet);
        })
    })
})

// Responding with 404 to all the other requests
app.use('*', (req, res) => {
    res.status(404).send();
})

app.listen(PORT, () => {
    console.log(`Express server up and running at ${PORT}`);
});