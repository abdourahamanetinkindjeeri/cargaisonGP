import { Cargaison } from "../Cargaison";
import { Produit } from "../Produit";

export interface CargoProduitCalculorInterface {
  calculerFrais<T extends Produit>(produit: T): number;
  sommeTotale<T extends Cargaison>(cargo: T): number;
  nombreProduit(): number;
}
