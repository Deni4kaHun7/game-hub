import { Fragment } from "react/jsx-runtime";
import { useGenres } from "../hooks/useGenres";
import { Text } from "@chakra-ui/react"

export default function GenreList() {
    const {genres} = useGenres()

    return (
        <Fragment>
            <ul>
                {genres.map( genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </Fragment>
    )
}