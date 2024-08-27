import CalendarRow from "./calendar-row";

export default function CalendarRowHeader() {
    return (
        <>
            <CalendarRow
                semana="# sem"
                teorica_fecha=""
                teorica_temas={['TEÓRICA']}
                practica_fecha=""
                practica_temas={['PRÁCTICA']}
            />
        </>
    );
}