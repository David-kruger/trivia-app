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


// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { CurrentQuestion } from "./CurrentQuestion/CurrentQuestion";
// import { Header } from "./Header/Header";

// export const Questions = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Verifica si existe `newUser` en `location.state`
//     const newUser = location.state?.newUser;

//     const [points, setPoints] = useState(0);

//     useEffect(() => {
//         if (!newUser) {
//             // Redirigir al usuario a la pantalla de inicio si no hay datos
//             navigate("/", { replace: true });
//         }
//     }, [newUser, navigate]);

//     if (!newUser) {
//         // Renderiza un estado vacío o un mensaje mientras redirige
//         return null;
//     }

//     const { name } = newUser;

//     return (
//         <>
//             <Header points={points} name={name} />
//             <CurrentQuestion setPoints={setPoints} points={points} setUser={newUser} />
//         </>
//     );
// };