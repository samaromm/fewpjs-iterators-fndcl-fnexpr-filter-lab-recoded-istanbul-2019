// Code your solution here

function findMatching(arr, name){
   let drivers= arr.filter(function(e){
   return e.toLowerCase()==name.toLowerCase()
})}

function fuzzyMatch(arr, letters){
   return arr.filter(function(e){
   e.toLowerCase().substr(0,letter.length)===name.toLowerCase()
})}