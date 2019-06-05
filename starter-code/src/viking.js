// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health === 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vicking) {
    this.vikingArmy.push(vicking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const saxTest = this.saxonArmy[
      Math.floor(Math.random()) * this.vikingArmy.length
    ];

    const vikTest = this.vikingArmy[
      Math.floor(Math.random()) * this.vikingArmy.length
    ];

    saxTest.receiveDamage(vikTest.strength);

    console.log(this.saxonArmy);
    if (this.saxonArmy.health < 0) {
      this.saxonArmy.splice(1, 0);
    }
  }
  saxonAttack() {}
  // showStatus()
}
