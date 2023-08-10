import { IAviary } from "./IAviary";
import { Biome } from "./biome";
import { Animal } from "./animal"

const home : IAviary = {
    Biome: Biome.Home,
    Water: 10,
    Square: 10,
    Eat: 10,
    Animals: undefined
}

export function Add(aviary: IAviary, animal: Animal){
    if(animal.Biome === aviary.Biome){
        console.log("another biome");
        return;
    }
    if(aviary.Animals?.some(x=>x.IsHerbivore() === animal.IsHerbivore())){
        console.log("different types of animals");
        return;
    }
    if(aviary.Water < aviary.Water + animal.NeedWater){
        console.log("not enough water");
        return;
    }
    if(aviary.Square < aviary.Square + animal.NeedSquare){
        console.log("not enough square");
        return;
    }

    aviary.Animals?.push(animal)
}