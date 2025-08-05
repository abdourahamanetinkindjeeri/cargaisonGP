export class Cargaison {
    distance;
    produits;
    constructor(distance, produits) {
        if (produits.length < 1 || produits.length > 10) {
            throw new Error("La cargaison doit contenir entre 1 et 10 produits.");
        }
        this.distance = distance;
        this.produits = produits;
    }
    getDistance = () => this.distance;
    getProduits = () => this.produits;
}
