var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");

    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger],"marshmallows");

    console.log("Animal population " + Animal.getPopulation());
}

class Animal {
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM! " + this.name + " wants more " + food);
        }else{
            this.sleep();
        }
    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep(){
        console.log(this.name + " hibernates for 4 hours");
    }
}

class Unicorn extends Animal {
    constructor(name){
        super(name, "marshmallows");
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud.");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }

    eat(food){
        if(food == this.favoriteFood){
            super.eat("leaves");
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name){
        super(name, "pollen");
    }

    eat(food){
        if(food == this.favoriteFood){
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }

    sleep(){
        console.log(this.name + " never sleeps.");
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals.");
    }
}


/**
 * function createAnimal(){
    var type = $('#animalType').val();
    var name = $('#name').val();
    var favoriteFood = $('#favoriteFood').val();

    switch(type){
        case "tiger":
            ALLANIMALS.push(new Tiger(name));
            break;
        case 2:
            type = "bear";
            break;
        case 3:
            type = "giraffe";
            break;
        case 4:
            type = "dolphin";
            break;
    }
    listAnimal();
}

 function listAnimal(){
    for(var i = 0; i < ALLANIMALS.length(); i++){
        ALLANIMALS[i] = $('#listOfAnimals');
    }
}
 */

