import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}
export default function Score({ score }: Props){
    const color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'
    return (
        <Badge colorScheme={color} paddingX={2} borderRadius={4} fontSize='14px'>{score}</Badge>
    )
}