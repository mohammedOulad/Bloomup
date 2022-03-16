//Encapsulation
class Player {
    speed: number
    private health: number
    readonly weight: number = 7;
    //methods getter en setters
    setHealth(health:number) {
        if(health < 0){
            console.log("You can't set the health below 0");
            return;
        }
        this.health = health;
    }

    getHealth() {
        return this.health;
    }
}

const mario = new Player()

mario.speed = 1
// mario.health = -5;  => kan voor problemen zorgen dus in class => private

mario.setHealth(8);
mario.setHealth(-2);

//mario.weight = 5;  => readonly kan je enkel lezen niet aanpassen

console.log(`Mario has ${mario.getHealth()}/10 health and has ${mario.weight} weight.`);
console.log(`Mario has ${mario.speed} speed and has ${mario.weight} weight.`);