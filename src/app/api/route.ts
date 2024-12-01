
import mongoClientPromise from '@/services/mongodb';


export async function GET(request: Request) {
    console.log('GET request');
    const mongo = await mongoClientPromise;
    const mongoCount = await mongo.db().collection('player').countDocuments();
    var resp = new Response(
        JSON.stringify({
            mongoCount
        })
        ,
        {
            status: 200,
            statusText: 'ok'
        });

    return resp;
}

export async function POST(request: Request) {
    console.log('POST request');

    const mongo = await mongoClientPromise;
    const db = await mongo.db().collection('player').insertOne({
        'firstName': 'Brendan',
        'lastName': 'John'
    });
    var resp = new Response(
        ''
        ,
        {
            status: 200,
            statusText: 'ok'
        });
    return resp;
}
