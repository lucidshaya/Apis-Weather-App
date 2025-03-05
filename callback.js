console.log("step 1");

function task1(callback) {
    setTimeout(() => {
        console.log("step 2");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("step 4");
        callback();
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("step 5");
        callback();
    }, 2000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("step 6");
        callback();
    }, 2000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("step 7");
        callback();
    }, 2000);
}

function task6(callback) {
    setTimeout(() => {
        console.log("step 8");
        callback();
    }, 2000);
}
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        console.log("All tasks completed");
                    });
                });
            });
        });
    });
});