// Task 1
function calculatingSum(num1, num2){
    return num1 + num2
}

// Task 2
function FindingMaximum(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    }
    else if(num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}

// Task 3
function evenNumber(number){
    if (number % 2 == 0){
        return number + 2
    }
    return number + 1
}

// Task 4
function givenSum(num1, num2){
    let result = 0
    for (let i = 0;i < num2;i++){
        result += i
    }
    return result
}

// Task 5
function threeNumSum(num1, num2, num3){
    return num1 + num2 + num3
}

// Task 6
function printEven(num1, num2){
    if (num2 % 2 != 0){
        num2++
    }

    if (num1 % 2 == 0){
        for (let i = num1;i <= num2;i += 2){
            console.log(i)
        }
    }
    else if (num1 % 2 != 0){
        num++
        for (let i = num1;i < num2;i += 2){
            console.log(i)
        }
    }
}

// Task 7

// Task 8
function hipotenuse(num1, num2){
    return num1 * num1 + num2 * num2
}

// Task 9
function facktorial(num1, num2){
    let result = 1
    for (let i = num1;i < num2;i++){
        result *= i
    }
    return result
}

// Task 10
function  palindrom(number){
    number = number + ""
    let num2 = number.split("").reverse().join("")

    if (number == num2){
        return true
    }
    else {
        return false
    }
}

// Task 11
