export class Cargaison {
    ajouterProduit(produit) {
        if (this.produits.length >= 10) {
            throw new Error("Impossible d'ajouter plus de 10 produits à une cargaison.");
        }
        this.produits.push(produit);
    }
    distance;
    produits;
    constructor(distance, produits) {
        if (produits.length > 10) {
            throw new Error("La cargaison ne peut pas contenir plus de 10 produits.");
        }
        this.distance = distance;
        this.produits = produits;
    }
    getDistance = () => this.distance;
    getProduits = () => this.produits;
}
