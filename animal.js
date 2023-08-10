"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var biome_1 = require("./biome");
var food_1 = require("./food");
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.IsHerbivore = function () {
        return this.Eats !== food_1.Food.Meat;
    };
    return Animal;
}());
exports.Animal = Animal;
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
var horse = {
    Name: 'Yesaul',
    Biome: biome_1.Biome.Grasslands,
    NeedWater: 2,
    NeedSquare: 2,
    Eats: food_1.Food.Grass,
    IsHerbivore: function () {
        return this.IsHerbivore();
    }
};
var dog = {
    Name: 'Sharik',
    Biome: biome_1.Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: food_1.Food.Meat,
    IsHerbivore: function () {
        return this.IsHerbivore();
    }
};
var cat = {
    Name: 'Zhorik',
    Biome: biome_1.Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: food_1.Food.Meat,
    IsHerbivore: function () {
        return this.IsHerbivore();
    }
};
