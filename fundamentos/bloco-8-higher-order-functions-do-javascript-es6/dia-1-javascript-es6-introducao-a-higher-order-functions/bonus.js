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

  const dragonDmg = (dragon) => {
    const minDragonDmg = 15;
    const dmgDragon = Math.floor((Math.random() * (dragon.strength - minDragonDmg + 1) + minDragonDmg));
    return dmgDragon;
  };

  console.log(dragonDmg(dragon));
  
// 2

  const warriorDmg = (warrior) => {
    const minWarriorDmg = 15;
    const dmgWarrior = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - minWarriorDmg + 1) + minWarriorDmg));
    return dmgWarrior;
  };

  console.log(warriorDmg(warrior));

  // 3

  const mageDmg = (mage) => {
    const mageMana = mage.mana  ;
    const minMageDmg = mage.intelligence
    const dmgMage = Math.floor((Math.random() * ((mage.intelligence * 2)  - mage.intelligence + 1) + minMageDmg));
    return dmgMage;
    
  };

  console.log(mageDmg(mage));