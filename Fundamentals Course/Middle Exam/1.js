function expGaining(data) {
    //data.map(Number)
    let neededExp = data.shift();
    let battleCount = data.shift();
    let currentExp = 0;
    let dataLength = data.length;

    for (let index = 0; index < battleCount; index++) {

        let currentBattleExp = data[index];
 


        if ((index + 1) % 3 === 0 && index !=0) {
            currentBattleExp = currentBattleExp * 1.15;
        }

        if ((index + 1) % 5 === 0 && index !=0) {
            currentBattleExp = currentBattleExp * 0.90;
        }

        if ((index + 1) % 15 ===0 && index !=0) {
            currentBattleExp = currentBattleExp * 1.05;
        }

        
        currentExp += currentBattleExp;
        if (currentExp >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${index+1} battles.`);
            break;
        }

    }

    if (currentExp < neededExp) {
        console.log(`Player was not able to collect the needed experience, ${(neededExp - currentExp).toFixed(2)} more needed.`);
    }

}
expGaining([400,5,50,100,200,100,20])