export class CargaisonManager {
    cargaisons = [];
    produits = [];
    ajouterCargaison(cargaison) {
        this.cargaisons.push(cargaison);
    }
    ajouterProduit(produit) {
        this.produits.push(produit);
    }
    listerCargaisons() {
        console.log(this.cargaisons);
        return this.cargaisons;
    }
    listerProduits() {
        return this.produits;
    }
    reset() {
        this.cargaisons = [];
    }
}
