import styled from "styled-components";
// import {goToPokedexPage, goToHomePage} from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import {Container,Main} from "./Style"



export default function ErrorPage (props) {
  const navigate = useNavigate()
  return (
    <>
      <Header isAllPokemons={true}/>
      <Main>
        <Container>
          <h1>ERROR PAGE</h1>
        </Container>
      </Main>
      
    </>
  )
}