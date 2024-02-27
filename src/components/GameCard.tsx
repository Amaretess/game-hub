import { Card, Heading, CardBody, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
// make different variable names from ones being imported

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card borderRadius={10} overflow='hidden' key={game.id}>
                <Image src={game.background_image} />
                <CardBody>
                    <Heading fontSize='2xl'>{game.name}</Heading>
                </CardBody>
            </Card>
        </>
    )
}

export default GameCard;
