import { Fragment } from "react/jsx-runtime";
import { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/react"

interface Props {
    platforms: Platform[]
}

export default function PlatformIconList({ platforms }: Props) {
    return (
        <Fragment>
            {platforms.map ( (platform) => <Text>{platform.name}</Text>)}
        </Fragment>
    )
}
