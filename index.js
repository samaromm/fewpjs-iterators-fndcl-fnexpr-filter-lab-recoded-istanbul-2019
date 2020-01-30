// Code your solution here

function findMatching(arr, name){
   return arr.filter(function(e){
   e.toLowerCase()==name.toLowerCase()
})}

function fuzzyMatch(arr, name){
   return arr.filter(function(e){
   e.toLowerCase()==name.toLowerCase()
})}