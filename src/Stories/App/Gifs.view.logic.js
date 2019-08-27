import React, { useState } from 'react'
import Gifs from './Gifs.view.js'

export default function GifsLogic(props) {
    let [ gifs, setGifs ] = useState({})
        
    props.searchGifs((term)=>{
        let random = Math.floor(Math.random() * 2000);
        
        fetch(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&rating=g&offset=${random}&api_key=CzOdYrAU8x5Y8sz8jTcRzpRhDMSaoiBC`)
        .then(res => res.json())
        .then(setGifs)
    });

    return <Gifs {...props} from={ gifs.data ? gifs.data.map(item=> { 
        return { 
            id: item.id, 
            name: item.title, 
            gif: item.images.downsized.url
        } 
    }) : []} />
}