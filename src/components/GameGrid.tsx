import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";




const GameGrid = () => {

    const { games, error, isLoading, setLoading } = useGames();

    return (
        <>
            {isLoading && <Spinner size="md" />}
            {error && <Text color="red" >{error}</Text>}
            <SimpleGrid columns={3} spacing={10}>
                {games.map((game) => <li key={game.id}>
                    <GameCard key={game.id} game={game} image={ } />
                </li>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
