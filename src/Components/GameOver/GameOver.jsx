import React from "react";
import { Button } from "primereact/button";
import { ResultsList } from "../ResultsList/ResultsList";
import { useNavigate } from "react-router-dom";

export const GameOver = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }
    
  return (
    <>
      <ResultsList />
      <div className="card flex justify-content-center">
        <Button label="ReStart" onClick={goToHome}/>
      </div>
    </>
  );
};
