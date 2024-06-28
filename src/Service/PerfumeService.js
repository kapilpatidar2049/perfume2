const API_URL = "http://192.168.0.105:2000/perfumes";

async function getPerfumes() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export { getPerfumes };
