import { Materiel } from "./Materiel";
export class Incassable extends Materiel {
    info() {
        return `Matériel incassable : ${this.libelle}, poids ${this.poids} kg.`;
    }
}
