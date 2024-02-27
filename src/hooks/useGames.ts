import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Game {
    id: number;
    name: string;
}

const useGames = () => {

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

    return { games, error, setError, isLoading, setLoading }
}

export default useGames;