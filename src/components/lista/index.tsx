import style from "./lista.module.scss";
import Item from "./item";
import ITarefa from "../../interfaces/ITarefas";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (selecionaTarefa: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item selecionaTarefa={selecionaTarefa} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
