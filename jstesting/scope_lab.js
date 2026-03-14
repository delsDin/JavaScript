// Portée globale
var globalVar = "Je suis une variable globale";
let globalLet = "Je suis aussi une variable globale";
const globalConst = "Je suis une constante globale"


{
    // Portée du bloc
    var blockVar = "Je suis une var avec portée de bloc";
    let blockLet = "Je suis un let avec portée de bloc";
    const blockConst = "Je suis une constante avec portée de bloc";
}

// Portée globale
//console.log(globalVar);
//console.log(globalLet);
//console.log(globalConst);

//Portée du block
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "Je suis une var à portée de bloc";
    let functionLet = "Je suis un let à portée de bloc";
    const functionConst = "Je suis un const à portée de bloc";
}
show();
    
console.log(functionVar); // Lance une ReferenceError
console.log(functionLet); // Lance une ReferenceError
console.log(functionConst); // Lance une ReferenceError
    