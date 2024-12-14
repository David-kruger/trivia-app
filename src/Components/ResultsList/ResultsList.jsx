import React, { useState, useEffect } from "react";
import { ListBox } from "primereact/listbox";

export const ResultsList = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            // Ordenar los usuarios según los puntos en orden descendente
            setResults(users.sort((a, b) => b.points - a.points));
        }
    }, []);

    const formattedResults = results.map((user, index) => ({
        name: `${index + 1}. ${user.name} - ${user.points} puntos`,
        code: user.name, // Agrega un identificador único
    }));

    return (
        <div className="card flex justify-content-center">
            {results.length === 0 ? (
                <section>No hay jugadores</section>
            ) : (
                <section>
                    <h2 className="text-center mb-3">Resultados</h2>
                    <ListBox 
                        options={formattedResults} 
                        optionLabel="name" 
                        className="w-full md:w-14rem" 
                    />
                </section>
            )}
        </div>
    );
};