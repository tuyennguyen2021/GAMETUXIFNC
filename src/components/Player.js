import React, { useState } from "react";
import styled from "styled-components";
import { dataImages } from "../images/images";
import ironMan from "../images/player.png";
import { makeChoice } from "../features/gameLogicSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Player() {
  const { playerChoice } = useSelector((state) => state.gameLogic);
  const dispatch = useDispatch();
  console.log("playChoice", playerChoice);
  const renderItem = () => {
    return dataImages.map((item, index) => {
      return (
        <div key={index} style={{ width: 70, height: 70 }}>
          <button
            onClick={() => {
              dispatch(makeChoice(index));
            }}
            className="seclect"
          >
            <img src={`${dataImages[index]}`} />
          </button>
        </div>
      );
    });
  };
  return (
    <Wrapper>
      <div className=" things">
        <img src={dataImages[playerChoice]} />
      </div>
      <div className=" speech-bubble"></div>
      <img style={{ width: "270px" }} src={`${ironMan}`} />
      <div className="row">{renderItem()}</div>
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
  .items {
    width: 70px;
  }
  .seclect:focus {
    border: 5px solid green;
  }
`;
