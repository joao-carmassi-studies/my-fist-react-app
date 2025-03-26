import style from "./relogio.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  console.log("Tempo segundos: ", tempo);

  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = tempo % 60;

  const [dezenaMinutos, unidadeMinutos] = String(minutos).padStart(2, "0");
  const [dezenaSegundos, unidadeSegundos] = String(segundos).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{dezenaMinutos}</span>
      <span className={style.relogioNumero}>{unidadeMinutos}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dezenaSegundos}</span>
      <span className={style.relogioNumero}>{unidadeSegundos}</span>
    </>
  );
}
