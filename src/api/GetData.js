import { create } from "apisauce";
import { baseURL, searchParam } from "../common/properties";

function GetData(searchTerm) {
  const api = create({
    baseURL: baseURL,
  });

  return api
    .get(searchParam + searchTerm)
    .then((response) => response.data.results);
}

export default GetData;
