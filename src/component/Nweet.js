import React, { useEffect } from "react";

const Nweet = ({nweet, isOwner}) => {

    useEffect(()=>{
    }, []);
    
    return <div>
        <h4>{nweet.text}</h4>
        {isOwner && (
            <>
                <button>Delete button</button>
                <button>Edit Nweet</button>
            </>

        )}

    </div>
}

export default Nweet;