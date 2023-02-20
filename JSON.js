//For i loop
var obj={
    "name":"Rajesh",
    "age":"22",
    "City":"Puducherry"
};
for(var a in obj){
console.log(a,obj[a]);
}
//___________________________

// For loop
var arr=[{
    "name":"Rajesh",
    "age":"22",
    "City":"Puducherry"
},{ "name":"Logesh",
    "age":"29",
    "City":"Chennai"}];
for(var i=0;i<arr.length;i++){
for(var a in arr[i]){
console.log(a,arr[i][a]);
}
}