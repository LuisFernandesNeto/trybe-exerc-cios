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
  
  const battleMembers = (charDmg) => {
    const minDmg = 15;
    const dmg = Math.floor((Math.random() * (charDmg.strength - minDmg + 1) + minDmg));
    return dmg;
  };

  console.log(battleMembers(dragon));
  
