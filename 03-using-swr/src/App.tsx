import { Box, Button, useDisclosure } from "@chakra-ui/react";

import ModalUI from "./components/Modal";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      {isOpen && (
        <ModalUI isOpen={isOpen} onClose={onClose}>
          hello
        </ModalUI>
      )}
    </Box>
  );
}
