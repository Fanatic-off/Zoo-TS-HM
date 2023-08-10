"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aviary = require("./aviary");
var biome_1 = require("./biome");
var food_1 = require("./food");
var home = {
    Biome: biome_1.Biome.Home,
    Water: 10,
    Square: 10,
    Eat: 10,
    Animals: undefined
};
var hippopotamus = {
    Name: 'Moto-Moto',
    Biome: biome_1.Biome.Tundra,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: food_1.Food.Grass,
    IsHerbivore: function () {
        return this.IsHerbivore();
    }
};
aviary.Add(home, hippopotamus);
