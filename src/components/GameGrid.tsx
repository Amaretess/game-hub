import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { Spinner, Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        apiClient.get<FetchGamesResponse>('/games')
            .then(({ data: allGames }) => {
                setGames(allGames.results)
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {isLoading && <Spinner size="md" />}
            {error && <Text color="red" >{error}</Text>}
            <ul>
                {games.map((game) => <li key={game.id}>
                    {game.name}
                </li>)}
            </ul>
        </>
    )
}

export default GameGrid
