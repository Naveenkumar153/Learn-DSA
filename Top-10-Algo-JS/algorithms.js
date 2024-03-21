/**
 * Reverse the string representation of an array  
 * Examples: reverse('hi') => 'ih';
 * reverse('hello') => 'olleh';
 */
 
function reverseString(str){
    let reversed = '';
    // for(let i = str.length - 1; i >= 0; i--){
    //     reversed += str[i];
    // }
    // return reversed;

    // for(let i = 0; i < str.length; i++){
    //     reversed = str[i] + reversed;
    // };

    for(let char of str){
        console.log('Reversed',char + reversed);
        reversed = char + reversed;
    }

    return reversed;
};

// console.log('reverse', reverseString('hello'));


/**
 * Reverse the integer representation of an array  
 * Examples: reverse(123) => 321;
 * reverse(908) => 809;
 */

function reverseNumber(num){
    const reverse = num.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(num);
};

// console.log(reverseNumber(-123));

/**
 * Reverse the integer without using inbuild methods 
 * Example: reverse(321) => 321;
 * reverse(-456) => -654
 */


function reverse(num){
    let reverse = '';
    for(n of num.toString()){
        reverse = n + reverse;
    }

    return parseInt(reverse) * Math.sign(num);
};

console.log(reverse(-123));