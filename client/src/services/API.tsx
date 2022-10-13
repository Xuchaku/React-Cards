class API {
  constructor() {}
  async getData(url: string, query?: string) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return new Error("No available server...");
    }
  }
}
const api = new API();
export default api;
