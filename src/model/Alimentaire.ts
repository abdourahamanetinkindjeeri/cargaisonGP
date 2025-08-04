import { Produit } from "./Produit";
import { ProduitInterface } from "./interfaces/ProduitInterface";

export class Alimentaire extends Produit {
  constructor(data: ProduitInterface) {
    super(data);
  }

  override info(): string {
    return `Produit alimentaire : ${this.libelle}, poids ${this.poids} kg.`;
  }
}
