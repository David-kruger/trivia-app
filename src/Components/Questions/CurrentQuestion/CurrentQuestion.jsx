import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export const CurrentQuestion = ({ setPoints, points, setUser }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const { dificulty } = setUser;

  // Función para obtener preguntas desde la API
  async function getQuestions() {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=5&difficulty=${dificulty}`
      );
      const questions = response.data.results;
      setQuestions(questions);

      // Configurar las opciones para la primera pregunta
      if (questions.length > 0) {
        prepareOptions(questions[0]);
      }
    } catch (e) {
      console.error("Error al obtener preguntas:", e);
    }
  }

  // Función para preparar las opciones de respuesta
  const prepareOptions = (question) => {
    const allOptions = [...question.incorrect_answers, question.correct_answer];
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5); // Mezclar aleatoriamente
    setOptions(
      shuffledOptions.map((option) => ({
        label: option,
        value: option,
      }))
    );
  };

  // Llamar a la API al montar el componente
  useEffect(() => {
    getQuestions();
  }, []);

  // Función para manejar el envío del formulario
  const submit = (event) => {
    event.preventDefault();

    if (!selectedOption) {
      alert("Por favor selecciona una respuesta.");
      return;
    }

    let updatedPoints = points;

    if (questions[currentIndex].correct_answer === selectedOption) {
      updatedPoints += 1;
      setPoints(updatedPoints);
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta.");
    }

    // Ir a la siguiente pregunta si existe
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      prepareOptions(questions[nextIndex]);
      setSelectedOption(null); // Reiniciar la selección
    } else {
      alert("¡Has completado todas las preguntas!");
      updateUserInLocalStorage(updatedPoints);
      navigate("/gameover");
    }
  };

  const updateUserInLocalStorage = (updatedPoints) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const finalScore = { ...setUser, points: updatedPoints };
    users.splice(users.length - 1, 1, finalScore);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <>
      {questions.length > 0 ? (
        <section>
          <h2>{questions[currentIndex].question}</h2>
          <form onSubmit={submit}>
            <div className="card flex justify-content-center">
              <Dropdown
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.value)}
                options={options}
                optionLabel="label"
                placeholder="Selecciona una respuesta"
                className="w-full md:w-14rem"
              />
            </div>
            <br />
            <div className="card flex justify-content-center">
              <Button type="submit" label="Submit" />
            </div>
          </form>
        </section>
      ) : (
        <p>Cargando preguntas...</p>
      )}
    </>
  );
};
