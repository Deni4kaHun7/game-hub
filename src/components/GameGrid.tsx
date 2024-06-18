import { Fragment } from "react";
import { useGames } from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

export default function GameGrid() {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5]

    return (
        <Fragment>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={5}>
                {isLoading && skeletons.map( skeleton => <CardSkeleton />)}
                {games.map( game => <GameCard game={game}/>)}
            </SimpleGrid>
        </Fragment>
    )
}
