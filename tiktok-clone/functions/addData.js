const { createClient } = require("@astrajs/collections");

const collection = 'posts'

exports.handler = async function(event, context, callback) {
    // create an Astra client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const posts = astraClient
    .namespace(process.env.ASTRA_DB_APPLICATION_KEYSPACE)
    .collection(collection)

}

