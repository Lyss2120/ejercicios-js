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
    console.log(' '.repeat(n-i)+'#'.repeat(i))}      
}


/*
 * Complete the 'miniMaxSum' function below.
 * suma los valores más bajos y los más altos
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
// Write your code here min=arr[0],arr[3] max=arr[1]arr[4]minsum += arr[i] tambien se podría usar reduce((acc, item) =>{return acc+= item})

arr.sort()
let minsum = 0;
let maxsum = 0;

//0-3 index
for(let i=0; i<arr.length-1; i++){ 
    minsum += arr[i]    
}
//1-4 index
for(let i=1; i<=arr.length-1; i++){ 
    maxsum += arr[i]
}     
console.log(minsum, maxsum)
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *  You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    // Write your code here
//let tallcandle1= candles.sort()candles.pop()//ordena la lista de -+ y saca el ultimo que tmb es el mayor valor o ...
let tallcandle= Math.max(...candles);//saca el mayor valor de la lista con spread operator
let total=0;

for(let i=0; i<candles.length; i++){
    if (candles[i] == tallcandle){
    total++
}}
return total
console.log(total)
}










