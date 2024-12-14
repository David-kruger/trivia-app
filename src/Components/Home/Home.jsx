import { useState } from "react";
import { Player } from "./Player/Player";
import { ResultsList } from "../ResultsList/ResultsList";

export const Home = () => {

    const [user, setUser] = useState('');

    return(
        <>
            <ResultsList />
            <Player />
        </>
    );
}