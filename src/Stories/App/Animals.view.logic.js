import React, { useCallback, useEffect } from 'react'
import Animals from './Animals.view.js'

export default function AnimalsLogic(props) {
    
    let data = 
    [
        {
            id: 1,
            name: 'Cats',
            avatar: 'https://cdn1.iconfinder.com/data/icons/animals-95/300/cat--animal-pet-wild-domestic-512.png',
        },
        {
            id: 2,
            name: 'Dogs',
            avatar: 'https://cdn2.iconfinder.com/data/icons/veterinary-line-fluffy-pet/512/Dog-512.png',
        },
        {
            id: 3,
            name: 'Elephants',
            avatar: 'https://cdn4.iconfinder.com/data/icons/zoo-line-welcome-to-zootopia/512/elephant-512.png',
        },
        {
            id: 4,
            name: 'Lions',
            avatar: 'https://cdn4.iconfinder.com/data/icons/zoo-line-welcome-to-zootopia/512/lion-512.png',
        },
        {
            id: 5,
            name: 'Monkeys',
            avatar: 'https://cdn1.iconfinder.com/data/icons/animals-95/300/monkey-face-3-animal-pet-wild-domestic-512.png',
        }
    ]; 

    let onClick = useCallback((args) => {
        props.selectedAnimal(args);
    }, [props])

    useEffect(() => {
        onClick(data[0].name);
    }, [onClick, data])

    return <Animals
        {...props}
        onClick={(evt)=> { 
            let elem = evt.target;
            
            elem.getAttribute('data-testid') !== 'Animals.List' && onClick(elem.textContent)
        }}
        from={data}
    />
}