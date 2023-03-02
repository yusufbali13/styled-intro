import { Button, FS13Button } from "./components/Buton.styled";

const App = () => {
  return (
    <Sarmal>
      <HeaderText renk="hotpink">Styled Components</HeaderText>
      <HeaderText renk="#734586" bg-Renk="">
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
