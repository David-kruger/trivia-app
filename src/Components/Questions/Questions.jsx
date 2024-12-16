import { useState } from "react";
import { CurrentQuestion } from "./CurrentQuestion/CurrentQuestion";
import { Header } from "./Header/Header";
import { useLocation } from "react-router-dom";

export const Questions = () => {
    const location = useLocation();
    const { newUser } = location.state;
    const { name } = newUser;
    const [points, setPoints] = useState(0);

    return(
        <>
            <Header points={points} name={name}/>
            <CurrentQuestion setPoints={setPoints} points={points} setUser={newUser}/>
        </>
    );
}