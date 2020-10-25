class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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

    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return this.name + " has received " + damage + " points of damage";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return "A Saxon has received " + damage + " points of damage";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let atacante = Math.floor(Math.random() * this.vikingArmy.length);
    let atacado = Math.floor(Math.random() * this.saxonArmy.length);

    const result = this.saxonArmy[atacado].receiveDamage(
      this.vikingArmy[atacante].strength
    );

    if (this.saxonArmy[atacado].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[atacado], 1);
    }

    return result;
  }

  saxonAttack() {
    let atacante = Math.floor(Math.random() * this.saxonArmy.length);
    let atacado = Math.floor(Math.random() * this.vikingArmy.length);

    const result2 = this.vikingArmy[atacado].receiveDamage(
      this.saxonArmy[atacante].strength
    );

    if (this.vikingArmy[atacado].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[atacado], 1);
    }

    return result2;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
