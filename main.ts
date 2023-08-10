import * as aviary from "./aviary";
import { Animal } from "./animal";
import { Biome } from "./biome";
import { Food } from "./food";
import { IAviary } from "./IAviary";

let home : IAviary = {
    Biome: Biome.Home,
    Water: 10,
    Square: 10,
    Eat: 10,
    Animals: undefined
}

const hippopotamus : Animal = {
    Name: 'Moto-Moto',
    Biome: Biome.Tundra,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Grass,
    IsHerbivore: function (): boolean {
        return this.IsHerbivore()
    }
}

aviary.Add(home, hippopotamus)