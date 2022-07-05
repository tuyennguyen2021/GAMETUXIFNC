import { createSlice } from "@reduxjs/toolkit";
import { randomcomPlayer } from "../utils/randomComPlayer";
import { checkWin } from "../utils/checkWin";

const initialState = {
  playerChoice: 0,
  comChoice: 0,
  result: {
    win: 0,
    playtime: 0,
    content: "",
  },
};

const gameLogicSlice = createSlice({
  name: "game_logic",
  initialState,
  reducers: {
    makeChoice: (state, action) => {
      state.playerChoice = action.payload;
    },
    startGame: (state) => {
      state.comChoice = randomcomPlayer();
      state.result.win += checkWin(state.playerChoice, state.comChoice);
      console.log("checkwin", checkWin(state.playerChoice, state.comChoice));
      if (checkWin(state.playerChoice, state.comChoice) === 1) {
        state.result.content = "i am ironman, i love you";
      } else {
        state.result.content = "thua sml";
      }
      state.result.playtime += 1;
    },
  },
});

export const { makeChoice, startGame } = gameLogicSlice.actions;
export default gameLogicSlice.reducer;
