import React, { useState } from 'react'
import Animal from './Animal.view.js'

export default function AnimalLogic(props) {
    let [isHighlighted, setIsHighlighted] = useState(false)

    return <Animal
        {...props}
        isHighlighted={isHighlighted}
        onMouseEnter={() => setIsHighlighted(true)}
        onMouseLeave={() => setIsHighlighted(false)}
    />
}