import { getSheetData } from "./googleSheets";

export const getCalendarRowsDetails = async () => {
    const rows = await getSheetData();

    const calendar_rows_details = rows?.map((row: any) => {
        return {
            semana: row[0],
            teorica_fecha: row[1],
            teorica_temas: row[3],
            practica_fecha: row[4],
            practica_temas: row[6],
        };
    });

    return calendar_rows_details;
}