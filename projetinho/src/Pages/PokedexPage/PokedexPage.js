import React from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Header  from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import {Container,Main} from "./Style"
import {Card} from "../../components/CardHome/Card"

export default function PokedexPage() {

  
  

  const context = useContext(GlobalContext)
  const { listPokedex, deletePokemon } = context


  return (
    <>
      <Header isAllPokemons={true} />
      <Main>
      <Container>
          <h1>Meus Pokémons</h1>
          <div>
            {listPokedex.map((item) => {
              return (<div key={item.name}>
                <Card
                  pokemon={item}
                  deletePokemon={deletePokemon}
                  isPokedexPage={true}
                />
              </div>)
            })}
        </div>
        </Container>
      </Main>
      <Footer/>
    </>
  )
}
