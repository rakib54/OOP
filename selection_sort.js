const number = [12, 54, 3, 78, -6, 45]

function Selections(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }

        }
        const temp = array[i];
        array[i] = array[min]
        array[min] = temp

    }
    return array
}
const sorted = Selections(number)
console.log(sorted);