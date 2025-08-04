import { Materiel } from "./Materiel";

export class Incassable extends Materiel {
  override info(): string {
    return `Matériel incassable : ${this.libelle}, poids ${this.poids} kg.`;
  }
}
