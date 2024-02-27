import { Card, CardHeader, Heading, CardBody, Image, Text, CardFooter, Button } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
// make different variable names from ones being imported

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card key={game.id}>
                <CardHeader>
                    <Heading size='md'>{game.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Image src={game.background_image} />
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default GameCard;
