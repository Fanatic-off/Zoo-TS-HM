import IAnimal from "./IAnimal";
import { Biome } from "./biome";
import { Food } from "./food";

export class Animal implements IAnimal{
    Name: string;
    Biome: Biome;
    NeedWater: number;
    NeedSquare: number;
    Eats: Food | Food[];
    IsHerbivore(): boolean {
        return this.Eats !== Food.Meat
    }
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

const horse : IAnimal = {
    Name: 'Yesaul',
    Biome: Biome.Grasslands,
    NeedWater: 2,
    NeedSquare: 2,
    Eats: Food.Grass,
    IsHerbivore: function (): boolean {
        return this.IsHerbivore()
    }
}

const dog : IAnimal = {
    Name: 'Sharik',
    Biome: Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Meat,
    IsHerbivore: function (): boolean {
        return this.IsHerbivore()
    }
}

const cat : IAnimal = {
    Name: 'Zhorik',
    Biome: Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Meat,
    IsHerbivore: function (): boolean {
        return this.IsHerbivore()
    }
}