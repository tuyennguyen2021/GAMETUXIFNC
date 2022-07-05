import styled from "styled-components";
import Complayer from "./components/Complayer";
import Player from "./components/Player";
import backGroundImg from "./images/bgGame.png";
import Table from "./components/Table";
function App() {
  return (
    <Wrapper>
      <div>
        <h1 className="text-center">GAME KÉO BÚA BAO</h1>
        <div className="container d-flex justify-content-between">
          <Player choice={true} />
          <Table />
          <Complayer />
        </div>
      </div>
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  background: url(${backGroundImg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  h1 {
    color: white;
  }
`;
