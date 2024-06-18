import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card borderRadius={5} overflow="hidden" width='250px'>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>    
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <Score score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}
