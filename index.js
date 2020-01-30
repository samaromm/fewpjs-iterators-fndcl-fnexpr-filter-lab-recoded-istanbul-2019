// Code your solution here

function findMatching(arr, name){
   return arr.filter(function(e){
   e.toLowerCase()===name.toLowerCase()
})}

function fuzzyMatch(arr, letters){
   return arr.filter(function(e){
   e.toLowerCase().substr(0,letter.length)===name.toLowerCase()
})}