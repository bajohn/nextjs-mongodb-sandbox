'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  // from other repo
  // const db = client.db("sample_mflix");
  // const movies = await db
  //     .collection("movies")
  //     .find({})
  //     .sort({ metacritic: -1 })
  //     .limit(20)
  // const mongo = await mongoClientPromise;
  // const db = await mongo.db().collection('player').insertOne({
  //   'firstName': 'Brendan',
  //   'lastName': 'John'
  // });
  // console.log(db);

  // console.log('Successfully connected to MongoDB');
  const mainEndpoint = 'http://localhost:3000/api'
  const [mongoCounter, setMongoCounter] = useState(-1)

  const getMongoCount = async () => {
    const resp = await fetch(mainEndpoint)
    const newCount = (await resp.json())['mongoCount'] as number;
    setMongoCounter(newCount);
  };

  const updateMongo = async () => {
    const resp = await fetch(mainEndpoint, { method: 'POST' })
  }

  const clickCb: React.MouseEventHandler = (event) => {
    console.log('click', event)
    updateMongo();
    getMongoCount();
  }


  if (mongoCounter == -1) {
    getMongoCount();
  }

  return (
    <main className={styles.main}>
      Server response
      <div>
        <button className="button"
          onClick={clickCb} >
          Hit API
        </button >
        {mongoCounter}
      </div>
      <div>
        Hello. Your tiny NextJS app is up and running :)
      </div>
    </main>
  );
}
