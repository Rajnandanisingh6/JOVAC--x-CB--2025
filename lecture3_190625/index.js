// call back

function serveWater(callback){
    console.log("Serving water ");
    setTimeout(callback,1000);
}
function serveSoup(callback){
    console.log("serving soup");
    setTimeout(callback,1000);
}
function serveStarters(callback){
    console.log("serving starter");
    setTimeout(callback,1000);
}
function serveDrinks(callback){
    console.log("serving Drinks");
    setTimeout(callback,1000);
}
function serveDrinner(callback){
    console.log("serving Dinner");
    setTimeout(callback,1000);
}
function payBill(){
    console.log("paying Bill")
}

