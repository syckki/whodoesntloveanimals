import App from './App.view.js'
import { Flow } from '../useFlow.js'
import React from 'react'

export default function AppLogic(props) {
  let delegateMethod = ()=>{};
  
  let selectedAnimal = (args)=>{
    delegateMethod(args);
  }

  let searchGifs = (args)=>{
    delegateMethod = args;
  }

  return (
    <Flow>
      <App {...props} selectedAnimal={selectedAnimal} searchGifs={searchGifs} />
    </Flow>
  )
}