import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import styled from "styled-components";




const GameGrid = () => {

    const { games, error, isLoading } = useGames();

    return (
        <>
            {isLoading && <Spinner size="md" />}
            {error && <Text color="red" >{error}</Text>}
            <SimpleGrid columns={3} spacing={10}>
                {games.map((game) => <Container key={game.id}>
                    <GameCard key={game.id} game={game} />
                </Container>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid

const Container = styled.li`
    list-style: none;
`