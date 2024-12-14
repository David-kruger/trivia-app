import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { Button } from 'primereact/button';

export const Player = () => {
  const nameRef = useRef();
  const navigate = useNavigate();

  // Estado para controlar la selección de dificultad
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Opciones del dropdown
  const levels = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  const submit = (event) => {
    event.preventDefault();

    const newName = nameRef.current.value; // Obtener el valor del input
    const level = selectedLevel; // Obtener el nivel seleccionado

    if (!newName) {
      alert("Ingrese un nombre");
      return;
    }

    if (!level) {
      alert("Seleccione un nivel de dificultad");
      return;
    }

    const newUser = {
      name: newName,
      points: 0,
      dificulty: level,
    };

    const users = JSON.parse(localStorage.getItem("users"));

    if (!users) {
      const arrayUser = [newUser];
      localStorage.setItem("users", JSON.stringify(arrayUser));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    }

    navigate("/question", { state: { newUser } });
  };

  return (
    <form onSubmit={submit}>
      {/* Input de nombre */}
      <div className="card flex justify-content-center">
        <FloatLabel>
          <InputText id="username" ref={nameRef} />
          
        </FloatLabel>
      </div>

      {/* Dropdown de dificultad */}
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.value)}
          options={levels}
          optionLabel="label"
          placeholder="Select Difficulty"
          className="w-full md:w-14rem"
        />
      </div>

      <br />

      {/* Botón de inicio */}
      <div className="card flex justify-content-center">
            <Button label="Start" />
      </div>
    </form>
  );
};



        






        
