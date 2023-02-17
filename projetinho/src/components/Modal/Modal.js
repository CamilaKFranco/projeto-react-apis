import React from 'react'
import {BoxModal} from "./Style"


export default function Modal(props) {
  return (
    <BoxModal>
      {props.optionModal === 1? 
      <div>
        <h1>Gotcha!</h1>
        <h5>O Pokémon foi adicionado a sua Pokédex</h5>
      </div>
        : 
      <div>
        <h1>Oh, no!</h1>
        <h5>O Pokémon foi removido da sua Pokédex</h5>
      </div>
      }
    </BoxModal>
  )
}
