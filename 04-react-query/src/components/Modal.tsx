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
import { useQuery } from "@tanstack/react-query";

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
  } = useQuery({
    queryKey: ["/api/characters"],
    queryFn: getCharacters,
    retry: 1,
    retryDelay: 1000,
    cacheTime: 0,
    staleTime: 5000,
  });

  if (isLoading) return <Box>Cargando..</Box>;
  if (error) return <Box>Error..</Box>;

  console.log(characters?.data.results);

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
