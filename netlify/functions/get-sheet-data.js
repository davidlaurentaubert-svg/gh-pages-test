export async function handler(event, context) {
  try {
    const type = event.queryStringParameters?.type || "Caterers"; // par défaut Caterers

    let SHEET_URL;
    if(type === "Caterers"){
      SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOt7BxU2sIws9Jc9ON_C7kum1wKjnXwV5gmWZgP1PtnVIVvVtHKfXM4NGV8HYzDmgykxTjsjbxg-Ry/pub?gid=0&single=true&output=csv";
    } else if(type === "Reps"){
      SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOt7BxU2sIws9Jc9ON_C7kum1wKjnXwV5gmWZgP1PtnVIVvVtHKfXM4NGV8HYzDmgykxTjsjbxg-Ry/pub?gid=1329885989&single=true&output=csv";
    } else {
      return { statusCode: 400, body: "Invalid type parameter" };
    }

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
