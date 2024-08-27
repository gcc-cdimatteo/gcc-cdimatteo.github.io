import { getSheetData } from "./googleSheets";

export const getCalendarRowsDetails = async () => {
    const rows = await getSheetData();

    const calendar_rows_details = rows?.map(row => {
        return {
            semana: row[0],
            teorica_fecha: row[1],
            teorica_temas: row[2],
            teorica_diapositiva: row[3],
            teorica_modalidad: row[4],
            teorica_grabacion: row[5],
            practica_fecha: row[6],
            practica_temas: row[7],
            practica_diapositiva: row[8],
            practica_modalidad: row[9],
            practica_grabacion: row[10],
        };
    });

    return calendar_rows_details;
}