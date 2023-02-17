import styled from "styled-components";



export const Main = styled.main`
display: flex;
justify-content: center;
min-height: calc(100vh - 160px - 120px);
width: 100vw;
position: relative;
background-color: #5D5D5D;
`

export const Container = styled.div`
position: relative;
width: 94%;
margin: 0 auto;
max-width: 1275px;
padding-top: 50px;
display: flex;
flex-direction: column;


>h1{
  color: white;
  font-size: 44px;
  margin-bottom: 50px;
}

>div{
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
}
`
