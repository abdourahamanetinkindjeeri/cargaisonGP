import { ProduitInterface } from "./interfaces/ProduitInterface";
import { Produit } from "./Produit";

type Tonicite = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export class Chimique extends Produit {
  private tonicite: Tonicite;

  constructor(produit: ProduitInterface, tonicite: Tonicite) {
    super(produit);
    this.tonicite = tonicite;
  }

  getTonicite = (): Tonicite => {
    return this.tonicite;
  };

  override info(): string {
    return `Produit chimique : ${this.libelle}, poids ${this.poids} kg, tonicité ${this.tonicite}/10.`;
  }
}
