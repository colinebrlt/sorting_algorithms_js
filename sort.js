// Run 'node sort.js small_list.txt' or 'node sort.js big_list.txt' in terminal to try out the algorithms!

const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(data);
    const listToSort = data.split(" ").map(num => parseInt(num, 10))
    bubbleSort(listToSort);
    sortByInsertion(listToSort);
});

const bubbleSort = (array) => {
    let numbers = [...array];
    let count = 0
    for (let i = numbers.length - 1; i > 0; i--) {
        for (let x= 0; x < i; x++) {
            count++
            if (numbers[x + 1] < numbers[x]) {
                [numbers[x + 1], numbers[x]] = [numbers[x], numbers[x + 1]];
            };
        }
    }
    console.log(`1) Tri à bulle: ${count} comparaisons | ${numbers}`);
}

const sortByInsertion = (array) => {
    let numbers = [...array];
    let count = 0;
    for (let i = 1; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let x = i;
        while (x > 0 && numbers[x - 1] > currentNumber) {
            numbers[x] = numbers[x - 1];
            x -= 1;
            count++
        }
        numbers[x] = currentNumber;
    }
    console.log(`2) Tri par insertion: ${count} comparaisons | ${numbers}`);
}