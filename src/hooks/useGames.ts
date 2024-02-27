import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// first react mounts and unmounts due to strict mode

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Game {
    id: number;
    name: string;
    image: string;
    description: string;
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
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