export class Produit {
    libelle;
    poids;
    constructor({ libelle, poids }) {
        this.libelle = libelle;
        this.poids = poids;
    }
    // getLibelle = () => this.libelle;
    getPoids = () => this.poids;
    getLibelle = () => this.libelle;
}
