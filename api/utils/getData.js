import { doRequest } from "./doRequest.js";
import { unset } from 'lodash-es'

export async function filterData(remove = []) {
  const apiData = await doRequest();

  const data = apiData.elements.map(item => {
    const json = { ...item };
    remove.forEach(path => {
      unset(json, path);
    });

    return json;
  });

  return (data);
}
