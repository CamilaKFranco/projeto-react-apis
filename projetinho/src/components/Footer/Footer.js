import React from 'react'
import {Container} from "./Style"
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


export default function Footer() {
  return (
    
    <Container>
      <div>
        <p>Designed by LABENU</p>
        <p>|</p>
        <span>
          <p>Built by Camila Franco</p>
            <a href="https://www.linkedin.com/in/camila-franco-91aa29204/" target="_blank">
                <img src={linkedin} alt=""/>
            </a>
            <a href="https://github.com/CamilaKFranco" target="_blank">
                <img src={github} alt=""/>
            </a>
        </span>
      </div>
    </Container>
  )
}
