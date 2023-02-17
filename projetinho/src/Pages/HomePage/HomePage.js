import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import  Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import { ContainerCard,Main } from './Style';
import {CardHome} from "../../components/CardHome/CardHome"


export default function HomePage() {

  
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    getPokemonData()
  }, [])

  const getPokemonData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      setPokemonData(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }  




  return (
    <>
      <Header isHomePage={true} />

      <Main>
        <ContainerCard>
          <h1>Todos Pokémons</h1>
          <div>
            {pokemonData && pokemonData.map((item) => {
              return (<div key={item.name}>
                <CardHome name={item.name}/>
              </div>)
            })
            }
          </div>
        </ContainerCard>
      </Main>

      <Footer/>
    </>
  )
}
