import IAnimal from "./IAnimal";
import { Biome } from "./biome";

export interface IAviary{
    Biome: Biome;
    Water: number;
    Square: number;
    Eat: number;
    Animals?: IAnimal[]
}