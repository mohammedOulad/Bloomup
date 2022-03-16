abstract class Character {
    health: number;
    abstract eat():void;
}

interface Hero1 extends Character {
    HeroId: number
}

interface Enemy1 extends Character {
    EnemyId: number
}

class Spy implements Hero1, Enemy1 {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    HeroId: number;
    EnemyId: number;
    health: number = 1;
}
