//Promises / Async Await 

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;
            if (preHeatOven) {
                resolve('preheat oven 1999');
            } else {
                reject("failed task");
            }
        }, 1000);
    });
}

const addSugarChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sugarChipsAdded = true;
            if (sugarChipsAdded) {
                resolve('sugar chips added');
            } else {
                reject("failed to add sugar chips");
            }
        }, 1000);
    });
}

const addMilkBiscuits = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const milkBiscuitsAdded = true;
            if (milkBiscuitsAdded) {
                resolve('milk biscuits added');
            } else {
                reject("failed to add milk biscuits");
            }
        }, 1000);
    });
}
    
const bakeChocolateBrownies = async () => {
    const taskone = await preHeatOven();
    console.log(taskone);

    const tasktwo = await addSugarChips();
    console.log(tasktwo);
    
    const taskThree = await addMilkBiscuits();
    console.log(taskThree);
    
}

bakeChocolateBrownies()