import { Materiel } from "./Materiel";
export class Fragile extends Materiel {
    info() {
        return `Matériel fragile : ${this.libelle}, poids ${this.poids} kg.`;
    }
}
