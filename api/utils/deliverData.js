import { filterData } from "./getData.js";

export async function deliverData(res, filters) {
  try {
    res.json(await filterData(filters));
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
}