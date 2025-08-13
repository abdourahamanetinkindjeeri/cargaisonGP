import type { DataItem } from "../types.ts";

export const fetchData = async (url: string): Promise<DataItem[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur réseau...");
    }
    return await response.json();
  } catch (e: any) {
    throw new Error(`Erreur : ${e.message}`);
  }
};
