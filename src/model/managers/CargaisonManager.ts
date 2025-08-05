import { CargoProduitCalculorInterface } from "../interfaces/CargoProduitCalculorInterface";
import { Cargaison } from "../Cargaison";
import { Produit } from "../Produit";

export class CargaisonManager {
  private cargaisons: Cargaison[] = [];
  private produits: Produit[] = [];

  ajouterCargaison(cargaison: Cargaison): void {
    this.cargaisons.push(cargaison);
  }

  ajouterProduit(produit: Produit): void {
    this.produits.push(produit);
  }

  listerCargaisons(): Cargaison[] {
    console.log(this.cargaisons);

    return this.cargaisons;
  }

  listerProduits(): Produit[] {
    return this.produits;
  }
  reset(): void {
    this.cargaisons = [];
  }
}
