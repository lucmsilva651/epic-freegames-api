import axios from "axios";

export async function doRequest() {
  const apiUrl = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions";
  const response = await axios.get(apiUrl);
  const data = response.data.data.Catalog.searchStore;
  
  return data;
}