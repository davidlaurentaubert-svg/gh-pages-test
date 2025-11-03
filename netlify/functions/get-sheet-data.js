export async function handler(event, context) {
  try {
    const SHEET_URL = "https://docs.google.com/spreadsheets/d/xxxxxxxxxx/gviz/tq?tqx=out:csv";
    const response = await fetch(SHEET_URL);
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv",
        "Access-Control-Allow-Origin": "*"
      },
      body: data
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
