import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalProps,
  Box,
} from "@chakra-ui/react";

import useSWR from "swr";
import { getCharacters } from "../services/characters";

export default function ModalUI({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  const {
    data: characters,
    isLoading,
    error,
  } = useSWR("/api/characters", () =>
    isOpen ? getCharacters() : null
  );

  if (isLoading) return <Box>Cargando..</Box>;
  if (error) return <Box>Error..</Box>;

  console.log(characters?.data);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
