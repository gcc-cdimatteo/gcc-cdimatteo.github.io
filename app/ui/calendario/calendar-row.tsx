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
        teorica_diapositiva,
        teorica_modalidad,
        teorica_grabacion,
        practica_fecha,
        practica_temas,
        practica_diapositiva,
        practica_modalidad,
        practica_grabacion
    }: {
        semana: string,
        teorica_fecha: string,
        teorica_temas: Array<string>,
        teorica_diapositiva: string,
        teorica_modalidad: ReactElement,
        teorica_grabacion: string,
        practica_fecha: string,
        practica_temas: Array<string>,
        practica_diapositiva: string,
        practica_modalidad: ReactElement,
        practica_grabacion: string
    }) {
    return (
        <>
            <ColSemana semana_nro={semana} />
            {/* <Divider style={{ borderWidth: 1, borderColor: '#607899' }} type="vertical" /> */}
            <ColWhite />
            <ColFecha fecha={teorica_fecha} />
            <ColTeoricaPractica content={teorica_temas} />
            <ColDiapositivaModalidadGrabacion url_diapositiva={teorica_diapositiva} modalidad={teorica_modalidad} url_grabacion={teorica_grabacion} />
            {/* <Divider style={{ borderWidth: 1, borderColor: '#607899' }} type="vertical" /> */}
            <ColWhite />
            <ColWhite />
            <ColFecha fecha={practica_fecha} />
            <ColTeoricaPractica content={practica_temas} />
            <ColDiapositivaModalidadGrabacion url_diapositiva={practica_diapositiva} modalidad={practica_modalidad} url_grabacion={practica_grabacion} />
        </>
    );
}