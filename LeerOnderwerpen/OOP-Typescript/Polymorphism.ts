// Polymorphism
class Hero {
    health: number
    attack: number

    Attack() {
        console.log("I'm attacking");
    }
}

class Archer extends Hero {
    arrows: number

    Attack(): void {
        super.Attack()
        console.log("Firing an arrow");
        this.arrows -= 1
    }
}

class Mage extends Hero {
    mana: number
    
    Attack(): void {
        super.Attack()
        console.log("Casting a spell");
        this.mana -= 1;
    }
}

class Warrior extends Hero {
    shield: number

    Attack(): void {
        super.Attack()
        console.log("Im swinging with a sword");
    }
}

class Tribe {
    private heros: Hero[]
    //array<Hero>
    setHeros(heros: Hero[]){
        this.heros = heros
    }

    Attack() : void {
        for (let hero of this.heros) {
            hero.Attack()
        }
    }
}

const archer: Hero = new Archer()
const mage: Hero = new Mage()
const warrior: Hero = new Warrior()
const heros: Hero[] = [archer, mage, warrior]

const tribe = new Tribe()
tribe.setHeros(heros)
tribe.Attack()


console.log("---------- nieuwe class toevoegen --------- ");
class Thief extends Hero {
    Attack(): void {
        super.Attack()
        console.log("Pick pocket");
    }
}

const thief = new Thief()
const heros2: Hero[] = [warrior, thief, mage]
const tribe2 = new Tribe()
tribe2.setHeros(heros2);
tribe2.Attack();