import React, { useState } from "react";
import Botao from "../botao";
import style from "./form.module.scss";
import ITarefa from "../../interfaces/ITarefas";
import { v4 as uuidv4 } from "uuid";

function Form({
  tarefas,
  setTarefas,
}: {
  tarefas: ITarefa[];
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00",
  });

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas([
      ...tarefas,
      { ...state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicionar um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={(e) => setState({ ...state, tarefa: e.target.value })}
          placeholder="Oque voce quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step={1}
          name="tempo"
          id="tempo"
          value={state.tempo}
          onChange={(e) => setState({ ...state, tempo: e.target.value })}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao>Adicionar</Botao>
    </form>
  );
}

export default Form;
