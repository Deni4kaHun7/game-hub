import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
    return (
        <HStack>
            <Image src={logo} boxSize='60px'></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar