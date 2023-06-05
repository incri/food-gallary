import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Nav Bar</Text>
      </HStack>
    </div>
  );
}

export default NavBar;
