import { CargoProduitCalculorInterface } from "./interfaces/CargoProduitCalculorInterface";
import { Produit } from "./Produit";

export abstract class Cargaison implements CargoProduitCalculorInterface {
  public ajouterProduit(produit: Produit): void {
    if (this.produits.length >= 10) {
      throw new Error(
        "Impossible d'ajouter plus de 10 produits à une cargaison."
      );
    }
    this.produits.push(produit);
  }
  protected distance: number;
  protected produits: Produit[];

  constructor(distance: number, produits: Produit[]) {
    if (produits.length > 10) {
      throw new Error("La cargaison ne peut pas contenir plus de 10 produits.");
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
