import React from "react";
import style from "./botao.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

function Botao({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
