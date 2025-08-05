import { Produit } from "./Produit";
export class Chimique extends Produit {
    tonicite;
    constructor(produit, tonicite) {
        super(produit);
        this.tonicite = tonicite;
    }
    getTonicite = () => {
        return this.tonicite;
    };
    info() {
        return `Produit chimique : ${this.libelle}, poids ${this.poids} kg, tonicité ${this.tonicite}/10.`;
    }
}
