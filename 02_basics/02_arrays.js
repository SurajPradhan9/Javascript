const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//we want the output to be["thor", "Ironman", "spiderman","superman", "flash", "batman"]
// //but we got the output as [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] (Which is array inside a array)                 0        1          2          this full array has index  3
// console.log(marvel_heros[2]);//spiderman
// console.log(marvel_heros[3]);//[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);//flash
// //this happens because we know that an array  can contain different types of data inside it so an array can also contain a array inside it 
// //push method modifies the array

// //concat method returns in new array
// const all_heros=marvel_heros.concat(dc_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heros);

// //spread operator (consider a glass if we throw it breaks so ...)
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//prefer spread opeartor over concat because if we want to add more values it is complex in concat but in spread we can add easily like this [...marvel_heros, ...dc_heros,*...value to add*]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //spreads out the subarrays 
// console.log(real_another_array);[1,2,3,4,5,6,7,6,7,4,5]


//when we are selecting data from a webpage it may be in the form of string ,objects etc but we want it to be array
console.log(Array.isArray("suraj"))//false
console.log(Array.from("suraj"))//[ 's', 'u', 'r', 'a', 'j' ] (converted string to array)
console.log(Array.from({name: "suraj"})) //[] // interesting //we should specify for what we want the array i.e for key or value ,we not specified so the value is empty

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//Returns a new array from a set of elements.//[ 100, 200, 300 ]







