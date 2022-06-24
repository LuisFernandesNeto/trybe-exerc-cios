const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  // 1

/*   const dragonDmg = (dmg) => {
    const minDmg = 15;
    const dmg = Math.floor((Math.random() * (dmg.strength - minDmg + 1) + minDmg));
    return dmg;
  };

  console.log(battleMembers(dragon));
   */
// 2

  /* const warriorDmg = (damage) => {
    const minDmg = 15;
    const dmg = Math.floor((Math.random() * ((damage.strength * damage.weaponDmg) - minDmg + 1) + minDmg));
    return dmg;
  };

  console.log(warriorDmg(warrior)); */

  // 3

  const mageDmg = (damage) => {
    const manaSpent = 15;
    const minDmg = damage.intelligence
    const dmg = Math.floor((Math.random() * ((damage.intelligence * 2)  - minDmg + 1) + minDmg));
    return dmg;
    
  };

  console.log(mageDmg(mage));