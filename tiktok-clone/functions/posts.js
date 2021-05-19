const { createClient } = require("@astrajs/collections");

const collection = 'tiktokposts'

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

    try {
        const res = await posts.find();

          return {
            statusCode: 200,
            body: JSON.stringify(Object.keys(res).map((i) => res[i])),
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }


}

