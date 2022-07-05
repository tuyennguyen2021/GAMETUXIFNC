import React from "react";
import styled from "styled-components";
import { dataImages } from "../images/images";
import thanos from "../images/playerComputer.png";
import { useSelector } from "react-redux";

export default function Complayer() {
  const { comChoice } = useSelector((state) => state.gameLogic);
  console.log("comChoice", comChoice);
  return (
    <Wrapper>
      <div className=" things">
        <img src={`${dataImages[comChoice]}`} />
      </div>
      <div className=" speech-bubble"></div>
      <img style={{ width: "270px" }} src={`${thanos}`} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .things {
    position: relative;
    left: 38%;
    width: 100px;
    height: 100px;
    background-color: white;
    border: 5px solid #45d994;
  }
  .speech-bubble {
    position: relative;
    background: #45d994;
    border-radius: 0.4em;
  }
  .speech-bubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 35px solid transparent;
    border-top-color: #45d994;
    border-bottom: 0;
    border-left: 0;
    margin-left: -17.5px;
    margin-bottom: -35px;
  }
`;
