import { Button, useDisclosure } from "@chakra-ui/react";
import ModalUI from "./components/Modal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Fetching data with RQ</Button>

      {isOpen && (
        <ModalUI isOpen={isOpen} onClose={onClose}>
          hello
        </ModalUI>
      )}
    </>
  );
}

export default App;
