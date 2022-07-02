function multiTable(number) {
    return [...new Array(10)].map((value, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join("\n")
}

//     Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
// For example, a multiplication table (string) for number == 5 looks like below:
