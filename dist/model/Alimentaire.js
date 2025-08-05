import { Produit } from "./Produit";
export class Alimentaire extends Produit {
    constructor(data) {
        super(data);
    }
    info() {
        return `Produit alimentaire : ${this.libelle}, poids ${this.poids} kg.`;
    }
}
