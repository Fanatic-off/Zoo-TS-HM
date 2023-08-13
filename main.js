var Biome;
(function (Biome) {
    Biome[Biome["Tundra"] = 0] = "Tundra";
    Biome[Biome["Taiga"] = 1] = "Taiga";
    Biome[Biome["Forest"] = 2] = "Forest";
    Biome[Biome["Grasslands"] = 3] = "Grasslands";
    Biome[Biome["Desert"] = 4] = "Desert";
    Biome[Biome["Plateau"] = 5] = "Plateau";
    Biome[Biome["Water"] = 6] = "Water";
    Biome[Biome["Home"] = 7] = "Home";
})(Biome || (Biome = {}));

var Food;
(function (Food) {
    Food[Food["Meat"] = 0] = "Meat";
    Food[Food["Animal"] = 1] = "Animal";
    Food[Food["Grass"] = 2] = "Grass";
    Food[Food["Trees"] = 3] = "Trees";
    Food[Food["People"] = 4] = "People";
})(Food || (Food = {}));

function Add(aviary, animal) {
    if (aviary.Animals.some(x=> x.Biome !== animal.Biome)) {
        console.log("another biome");
        return;
    }
    if (aviary.Animals.some(x=> x.IsHerbivore !== animal.IsHerbivore)) {
        console.log("different types of animals");
        return;
    }
    if (aviary.Water - animal.NeedWater < 0) {
        console.log("not enough water");
        return;
    }
    if (aviary.Square - animal.NeedSquare < 0) {
        console.log("not enough square");
        return;
    }

    aviary.Water -= animal.NeedWater
    aviary.Square -= animal.NeedSquare

    aviary.Animals.push(animal)
    console.log("animal is added");
}

function IsHerbivore(){
    return this.Eats !== Food.Meat
}

var home = {
    Biome: Biome.Home,
    Water: 100,
    Square: 100,
    Eat: 100,
    Animals: []
};

const cat = {
    Name: 'Zhorik',
    Biome: Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Meat,
    IsHerbivore: function () {
        return this.IsHerbivore()
    }
}

var hippopotamus = {
    Name: 'Moto-Moto',
    Biome: Biome.Tundra,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Grass,
    IsHerbivore: function () {
        return IsHerbivore();
    }
};

const horse = {
    Name: 'Yesaul',
    Biome: Biome.Grasslands,
    NeedWater: 2,
    NeedSquare: 2,
    Eats: Food.Grass,
    IsHerbivore: function () {
        return IsHerbivore();
    }
}

const dog = {
    Name: 'Sharik',
    Biome: Biome.Home,
    NeedWater: 10,
    NeedSquare: 2,
    Eats: Food.Meat,
    IsHerbivore: function () {
        return this.IsHerbivore()
    }
}


Add(home, cat);
Add(home, hippopotamus);
Add(home, horse);
Add(home, dog);