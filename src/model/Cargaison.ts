import { CargoProduitCalculorInterface } from "./interfaces/CargoProduitCalculorInterface";
import { Produit } from "./Produit";

export abstract class Cargaison implements CargoProduitCalculorInterface {
  protected distance: number;
  protected produits: Produit[];

  constructor(distance: number, produits: Produit[]) {
    if (produits.length < 1 || produits.length > 10) {
      throw new Error("La cargaison doit contenir entre 1 et 10 produits.");
    }
    this.distance = distance;
    this.produits = produits;
  }

  getDistance = (): number => this.distance;

  getProduits = (): Produit[] => this.produits;
  // Méthodes abstraites à implémenter dans les sous-classes
  abstract calculerFrais<T extends Produit>(produit: T): number;

  abstract sommeTotale<T extends Cargaison>(cargo: T): number;

  abstract nombreProduit(): number;
}
