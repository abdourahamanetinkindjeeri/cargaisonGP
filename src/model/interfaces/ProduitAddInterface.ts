import { Produit } from "../Produit";

export interface ProduitAddInterface {
  ajouterProduit<T extends Produit>(produit: T): Produit[];
}
