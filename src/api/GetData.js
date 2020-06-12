import { create } from "apisauce";
import { baseURL, searchParam } from "../common/properties";

async function GetData(data) {
  const api = create({
    baseURL: baseURL,
  });

  await api.get(searchParam + data).then((response) => (data = response.data));

  return data;
}

export default GetData;
