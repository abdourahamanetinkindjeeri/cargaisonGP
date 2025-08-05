export class ProduitManager {
    produits = [];
    ajouterProduit(produit) {
        this.produits.push(produit);
        return this.produits;
    }
    listerProduits() {
        this.produits.forEach((produit, index) => {
            console.log(`Produit ${index + 1}: ${produit.info()}`);
        });
    }
    getProduits() {
        return this.produits;
    }
}
