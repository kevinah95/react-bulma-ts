import "./App.css";
import { Block } from "./components/Block";
import { Box } from "./components/Box";
import { Button } from "./components/Button";

const App = () => {
  return (
    <>
      <Block>Este es un bloque</Block>
      <Box>Este es un box</Box>
      <Button>Button</Button>
    </>
  );
};

export default App;
