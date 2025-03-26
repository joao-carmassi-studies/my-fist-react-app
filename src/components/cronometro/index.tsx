import Botao from "../botao";
import Relogio from "./relogio";
import style from "./cronometro.module.scss";
import ITarefa from "../../interfaces/ITarefas";
import { useEffect, useState } from "react";
import { UDate } from "../../utils/UDate";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(UDate.tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regrassiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regrassiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regrassiva(tempo)}>Começar</Botao>
    </div>
  );
}
