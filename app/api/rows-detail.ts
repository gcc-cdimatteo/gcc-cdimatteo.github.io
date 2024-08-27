import { getSheetData } from "./googleSheets";

export const getCalendarRowsDetails = async () => {
    const rows = await getSheetData();

    const calendar_rows_details = rows?.map(row => {
        return {
            semana: row[0],
            teorica_fecha: row[1],
            teorica_temas: row[3],
            teorica_diapositiva: undefined,
            teorica_modalidad: undefined,
            teorica_grabacion: undefined,
            practica_fecha: row[4],
            practica_temas: row[6],
            practica_diapositiva: undefined,
            practica_modalidad: undefined,
            practica_grabacion: undefined,
        };
    });

    return calendar_rows_details;
}