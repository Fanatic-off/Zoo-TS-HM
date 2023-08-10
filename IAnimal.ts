import { Biome } from "./biome";
import { Food } from "./food";

export default interface IAnimal{
    Name: string;
    Biome: Biome;
    NeedWater: number;
    NeedSquare: number;
    Eats: Food | Food[];
    IsHerbivore(): boolean 
}
