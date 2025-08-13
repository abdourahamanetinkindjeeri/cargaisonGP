// app/utils/processData
import { fetchData } from "./fetchData";
import { DataItem } from "../types";

export const processData = async (
  url: string,
  searchKey: string,
  searchValue: string | number
): Promise<DataItem | null> => {
  try {
    const data = await fetchData(url);

    return (
      data.find((item) => {
        const value = item[searchKey];
        if (typeof value === "string") {
          return value
            .toLowerCase()
            .includes(String(searchValue).toLowerCase());
        }
        return value === searchValue;
      }) || null
    );
  } catch (error: any) {
    console.error("Erreur de traitement des données :", error.message);
    return null;
  }
};
