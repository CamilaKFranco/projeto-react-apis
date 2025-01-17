import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px - 120px);
  width: 100vw;
  position: relative;
  background-color: #5d5d5d;
`
export const Container = styled.div`
  width: 94%;
  max-width: 1275px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;

  > h1 {
    color: white;
    font-size: 44px;
    /* margin-bottom: 10px; */
    overflow-y: hidden;
  }

  > div {
    min-height: 580px;
    display: flex;
    align-items: flex-end;
    position: relative;

    > img {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 40px;
      width: 240px;
    }
  }
`
export const Card = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 86%;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  position: relative;
  padding: 20px;

  .ball {
    position: absolute;
    height: 95%;
    z-index: 0;
    right: 0;
  }
`
export const Left = styled.div`
  width: 50%;
  display: flex;
  gap: 20px;

  .images {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      height: 50%;
      img {
        width: 160px;
      }
    }
  }

  .base {
    background-color: white;
    width: 50%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3 {
      color: black;
    }
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  .pokemonData {
    h1 {
      font-size: 44px;
    }
    h2 {
      font-size: 20px;
      font-weight: 200;
    }
    div {
      display: flex;
      gap: 12px;
      img {
        height: 31px;
      }
    }
  }

  .moves {
    display: flex;
    padding: 20px;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: center;
    align-items: center; */
    background-color: white;
    border-radius: 10px;
    height: 65%;
    width: 50%;
    gap: 20px;
    /* position: relative; */

    h3 {
      color: black;
    }

    span {
      color: black;
      font-size: 12px;
      font-weight: 100;
      border: 1px dashed #c2c2c2;
      padding: 4px;
      background-color: #ececec;
      border-radius: 10px;
    }
  }
`;
export const PokemonTypes = styled.div``;
export const Stat = styled.div`
  display: flex;

  gap: 10px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;

    &:first-child {
      align-items: flex-end;
    }
    &:last-child {
      gap: 10px;
    }
  }

  p {
    color: gray;
    font-size: 10px;
    font-weight: 100;
  }
`;
