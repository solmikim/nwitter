import React, { useState, useEffect } from 'react';
import { dbService } from "../myFirebase";
import { addDoc, collection, getDocs, onSnapshot, query, orderBy } from "firebase/firestore";
import Nweet from '../component/Nweet';

const Home = ({userObject}) => {
    
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    // const getNweets = async ()=>{
    //     const dbNweets = await getDocs(collection(dbService, "nweets"));
    //     dbNweets.forEach(document => {
    //         const nweetObject = {
    //             ...document.data(),
    //             id : document.id
    //         }
    //         setNweets( prev => [nweetObject, ...prev]);
            
    //     })
    // }

    useEffect(()=>{
        // getNweets();
        const q = query(
                    collection(dbService, "nweets"),
                    orderBy("createdAt", "desc")
                    );
        onSnapshot(q, (snapshot)=>{
            const nweetArray = snapshot.docs.map((doc)=> ({
                id : doc.id,
                ...doc.data()
            }));

            setNweets(nweetArray);
        })
    }, []);

    const onSubmit = async(event) => {
        event.preventDefault();

        await addDoc(collection(dbService, "nweets"), {
            text : nweet,
            creatorId : userObject.uid,
            createdAt: Date.now(),
        });
        await setNweet("")
    };
    const onChange = (event) => {
        const {target : {value}} = event;
        setNweet(value);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120}></input>
            <input type="submit" value="Nweet"></input>
        </form>
        <div>
            {nweets.map((nweet)=>(   
                <Nweet key={nweet.id} nweet={nweet} isOwner={nweet.creatorId === userObject.uid}/>
            ))
            }     
        </div>
    </div>
}
export default Home;