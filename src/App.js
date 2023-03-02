import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <Sarmal bg="bebe">
      <HeaderText renk="hotpink">Styled Components</HeaderText>
      <HeaderText renk="#734586" bg-Renk="#eee">
        Styled Components
      </HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <FS13Button react>CALIS</FS13Button>
      <FS13Button>DINLEN</FS13Button>
    </Sarmal>
  );
};

export default App;
