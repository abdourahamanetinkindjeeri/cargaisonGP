import { Materiel } from "./Materiel";

export class Fragile extends Materiel {
  override info(): string {
    return `Matériel fragile : ${this.libelle}, poids ${this.poids} kg.`;
  }
}
