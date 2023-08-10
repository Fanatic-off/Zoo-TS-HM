"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = void 0;
var biome_1 = require("./biome");
var home = {
    Biome: biome_1.Biome.Home,
    Water: 10,
    Square: 10,
    Eat: 10,
    Animals: undefined
};
function Add(aviary, animal) {
    var _a, _b;
    if (animal.Biome === aviary.Biome) {
        console.log("another biome");
        return;
    }
    if ((_a = aviary.Animals) === null || _a === void 0 ? void 0 : _a.some(function (x) { return x.IsHerbivore() === animal.IsHerbivore(); })) {
        console.log("different types of animals");
        return;
    }
    if (aviary.Water < aviary.Water + animal.NeedWater) {
        console.log("not enough water");
        return;
    }
    if (aviary.Square < aviary.Square + animal.NeedSquare) {
        console.log("not enough square");
        return;
    }
    (_b = aviary.Animals) === null || _b === void 0 ? void 0 : _b.push(animal);
}
exports.Add = Add;
