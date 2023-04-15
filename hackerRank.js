/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 There are  positive numbers,  negative numbers, and  zero in the array.
 The proportions of occurrence are positive: 3/6, negative: 2/6 and zeros: 
 1/6. Print the ratios of positive, negative and zero values in the array. 
 Each value should be printed on a separate line with 6 digits after the 
 decimal. The function should not return a value: 
 0.500000
 0.333333
 0.166667
 arr = [-4, 3, -9, 0, 4, 1]
 */

function plusMinus(arr) {
    // Write your code here.. 

    let positive= 0;
    let negative= 0; 
    let zero= 0;
    
for (let i=0; i<arr.length; i++){
    let element = arr[i];
    if (element < 0 ){negative++}
    if (element > 0 ){positive++}
    if (element == 0 ){zero++}
}
    const fraccNegative = negative/arr.length
    const fraccPositive = positive/arr.length
    const fraccZero = zero/arr.length
      
    console.log(fraccPositive.toFixed(6))
    console.log(fraccNegative.toFixed(6))
    console.log(fraccZero.toFixed(6))       
}





/*
 * Complete the 'staircase' function below.
 *str.repeat(cantidad)
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here. mientras i sube espacio baja. 
    //5 espacios #, 4 espacios ##, 3 espacios ###
    for (let i=1; i<=n; i++){  
    console.log(' '.repeat(n-i)+'#'.repeat(i))
}      
}











