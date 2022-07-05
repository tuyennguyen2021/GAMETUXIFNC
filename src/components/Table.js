import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { startGame } from "../features/gameLogicSlice";

export default function Table() {
  const { result } = useSelector((state) => state.gameLogic);
  const { win, playtime, content } = result;
  const dispatch = useDispatch();
  return (
    <Wrapper className="container text-center">
      <h1 className="text-warning">{content}</h1>
      <div className="text-success display-4">so ban thang: {win}</div>
      <div className="text-success display-4">so ban choi: {playtime}</div>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(startGame());
        }}
      >
        PLAY GAME
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div {
    color: white;
    font-size: 4em;
  }
`;
