import { ReactElement } from "react";
import ColDiapositivaModalidadGrabacion from "./col-diapositiva-modalidad-grabacion";
import ColFecha from "./col-fecha";
import ColModalidad from "./col-modalidad";
import ColSemana from "./col-semana";
import ColTeoricaPractica from "./col-teorica-practica";
import ColWhite from "./col-white";
import { Divider } from "antd";

export default function CalendarRow(
    {
        semana,
        teorica_fecha,
        teorica_temas,
        practica_fecha,
        practica_temas,
    }: {
        semana: string,
        teorica_fecha: string,
        teorica_temas: Array<string>,
        practica_fecha: string,
        practica_temas: Array<string>,
    }) {
    return (
        <>
            <ColFecha fecha={teorica_fecha} />
            <ColTeoricaPractica content={teorica_temas} />
            <ColWhite />
            <ColWhite />
            <ColWhite />
            <ColFecha fecha={practica_fecha} />
            <ColTeoricaPractica content={practica_temas} />
        </>
    );
}