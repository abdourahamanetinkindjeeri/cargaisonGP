import { CargoProduitCalculorInterface } from "./interfaces/CargoProduitCalculorInterface";
import { Produit } from "./Produit";

export abstract class Cargaison implements CargoProduitCalculorInterface {
  protected distance: number;
  protected produits: Produit[] = [];

  constructor(distance: number, produit: Produit) {
    if (this.produits.length !== 1 && this.produits.length !== 10) {
      throw new Error(
        "La cargaison doit contenir exactement 1 ou 10 produits."
      );
    } else {
      this.distance = distance;
      this.produits.push(produit);
    }
  }

  abstract calculerFrais<T extends Produit>(produit: T): number;

  abstract sommeTotale<T extends Cargaison>(cargo: T): number;

  abstract nombreProduit(): number;
}
