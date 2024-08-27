const { google } = require('googleapis');
const sheets = google.sheets('v4');
const fs = require('fs');

export const getSheetData = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: './credentials.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '1mlXN37dyvSaf9WZcYHv8PJbe93Tie4hVKbFNZtvMWHQ';
    const range = 'IDS - 2024 - 2C!A8:G24';

    const response = await googleSheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const rows = response.data.values;

    if (rows.length) {
        console.log('Data:', rows);
        return rows;
    } else {
        console.log('No data found.');
    }
}