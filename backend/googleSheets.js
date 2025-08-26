const { google } = require('googleapis');

async function getSheetPassword() {
  const creds = JSON.parse(process.env.GOOGLE_PROJECT_CREDENTIALS);
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = process.env.PASSWORD_CELL || 'A2';
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!${range}`,
  });

  return res.data.values?.[0]?.[0] || '';
}

module.exports = { getSheetPassword };
