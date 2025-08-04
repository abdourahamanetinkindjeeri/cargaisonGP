import { ProduitInterface } from "./interfaces/ProduitInterface";

export abstract class Produit {
  protected libelle: string;
  protected poids: number;

  constructor({ libelle, poids }: ProduitInterface) {
    this.libelle = libelle;
    this.poids = poids;
  }

  // getLibelle = () => this.libelle;
  getPoids = () => this.poids;

  // setLibelle(libelle: string): void {
  //   this.libelle = libelle;
  // }

  // setPoids = (poids: number) => (this.poids = poids);

  abstract info(): string;
}
