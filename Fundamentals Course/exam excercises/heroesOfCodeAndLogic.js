function heroesOfCodeAndLogic(input) {
    let numberOfHeroes = +input.shift();
    let heroes = {};


    for (let index = 0; index < numberOfHeroes; index++) {
        let [name, hp, mp] = input[index].split(" ");
        let hero = {
            name: name,
            hp: +hp,
            mp: +mp
        }
        heroes[name] = {
            name: name,
            hp: +hp,
            mp: +mp
        }
    }

    for (const line of input) {
        if (line === "End") {
            break;
        }
        let [command, ...tokens] = line.split(" - ");

        switch (command) {
            case "CastSpell":
                let name = tokens[0];
                let mpNeeded = +tokens[1];
                let spellName = tokens[2];
                let heroesMP = heroes[name].mp

                if (heroesMP >= mpNeeded) {
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroesMP - mpNeeded} MP!`);
                    heroes[name].mp = heroesMP - mpNeeded
                }
                else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let heroName = tokens[0];
                let damage = +tokens[1];
                let attacker = tokens[2];
                let hpLeft = heroes[heroName].hp - damage;

                if (hpLeft > 0) {
                    heroes[heroName].hp = hpLeft;
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hpLeft} HP left!`);
                }
                else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case "Recharge":
                let nameToRecharge = tokens[0];
                let amount = +tokens[1];
                let mp = heroes[nameToRecharge].mp;
                let totalMP = mp + amount;
                if (totalMP > 200) {

                    console.log(`${nameToRecharge} recharged for ${200 - mp} MP!`);
                    mp = 200;
                    heroes[nameToRecharge].mp = mp;
                }
                else {
                    console.log(`${nameToRecharge} recharged for ${amount} MP!`);
                    heroes[nameToRecharge].mp = mp + amount;
                }
                break;

            case "Heal":
                let nameToHeal = tokens[0];
                let amountToHeal = +tokens[1];
                let hp = heroes[nameToHeal].hp;
                let totalHP = hp + amountToHeal;
                if (totalHP > 100) {

                    console.log(`${nameToHeal} healed for ${100 - hp} HP!`);
                    hp = 100;
                    heroes[nameToHeal].hp = hp;
                } else {
                    console.log(`${nameToHeal} healed for ${amountToHeal} HP!`);
                    heroes[nameToHeal].hp = hp + amountToHeal;
                }


                break;
            default:
                break;
        }

    }
    let keys = Object.keys(heroes);

    for (const key of keys) {
        console.log(heroes[key].name);
        console.log(`  HP: ${heroes[key].hp}`);
        console.log(`  MP: ${heroes[key].mp}`);
    }
}


heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]
)
