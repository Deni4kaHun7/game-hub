import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export default function GameCardContainer({ children }: Props) {
    return (
        <Box borderRadius={5} overflow="hidden" width='250px'>
            {children}
        </Box>
    )
}