
/** 
 * Importa los módulos de tus clases 
 */
var rickSingleton = require("./rick");
var mortySingleton = require("./morty");
var jerrySingleton = require("./jerry");
var universeSingleton = require("./universe");
var portalGunModule = require("./portalgun");
/*
 * Crea el objeto Rick
 */
var protoRick = rickSingleton.rickC137().get();

console.assert(protoRick);
console.assert(protoRick.id == "C-137");
console.assert(protoRick.ondas == "altas");
console.assert(protoRick.habla() == "Es Rick-dículo!");

/**
 * Crea el objeto Morty
 */
var protoMorty = mortySingleton.earthmorty().get();
protoMorty.setPartner(protoRick);

console.assert(protoMorty);
console.assert(protoMorty.id == "earthMorty");
console.assert(protoMorty.ondas == "bajas");
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla() == "Oohh man!");


/**
 * Crea el objeto Jerry
 */
var jerry = jerrySingleton.jerry().get();
jerry.monedas = jerry.coinCollection.getCoinCollection();

console.assert(jerry);
console.assert(jerry.id = "Jerry");
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == "R2-D2");
console.assert(jerry.speak() == "Tengo una colección de monedas antiguas raras!");

// /**
//  * Crea 2 Rick-clones y 1 clon de Morty
//  * y asocia como partner de ese Morty a uno de los Rick-clones.  
//  */
var createRickClon = function () { 
    var clon = Object.create(protoRick);
    clon.id = "C-15"+Math.floor(Math.random()*10);
    return clon;
 }
var clonRick = createRickClon();
var otroRick = createRickClon();

var clonMorty = Object.create(protoMorty);
clonMorty.setPartner(clonRick);

console.assert(clonRick);
console.assert(protoRick != clonRick);
console.assert(Object.getPrototypeOf(clonRick) == protoRick);
console.assert(clonRick.id != "C-137");
console.assert(clonRick.ondas == "altas");
console.assert(clonRick.habla() == "Es Rick-dículo!");

console.assert(otroRick);
console.assert(protoRick != otroRick);
console.assert(Object.getPrototypeOf(otroRick) == protoRick);
console.assert(otroRick.id != "C-137");
console.assert(otroRick.ondas == "altas");
console.assert(otroRick.habla() == "Es Rick-dículo!");

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);
console.assert(clonMorty.ondas == "bajas");
console.assert(clonMorty.partner == clonRick);



// /**
//  * Crea el objeto universo
//  */
var universo = universeSingleton.protoUniverse().get();
console.assert(universo);
console.assert(Object.getPrototypeOf(universo) != Array.prototype);
console.assert(universo.length == 0);

// /**
//  * Crea la primera dimensión, el `Array` mundo `Tierra`, 
//  * mete en él a los 6 objetos que has creado (Rick, Morty y Jerry, 
//  * 2 rick-clones y 1 clon de Morty) y añádelo al objeto `universo`.
//  */
universo.addReality("Tierra");
var tierra = [protoRick, protoMorty, jerry, clonRick, otroRick, clonMorty];
universo["Tierra"] = tierra;

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert("Tierra" in universo);
console.assert(universo.length == 1);

// /**
//  * Crea el objeto portal gun / pistola de portales.
//  * 
//  * Dale la pistola al protoRick para que la dispare.
//  * Pon a la tierra en el principio del historial de dimensiones de la pistola.
//  * 
//  * Rick dispara la pistola y se añade al universo la dimensión "Fart"
//  *  */

var gun = portalGunModule.portalGun();
gun.scanNewReality("Tierra");

console.assert(gun);
console.assert(gun.historial.length == 1);

var result = protoRick.dispara(gun, universo, "Fart");
universo = result.universe;
gun = result.portalgun;

console.assert("Fart" in universo);
console.assert(universo.length == 2);

/**
 * Todos SALVO Jerry cruzan a la dimensión "Fart".
 * Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
 * 
 * Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
 * Puedes situarla en aquel componente que estimes más adecuado.
 * 
 * La pistola añade a su historial "Fart".
 */
var pjsQueCruzan = [protoRick, protoMorty, clonRick, otroRick, clonMorty];
 universo.cruzarDimension(pjsQueCruzan, gun.historial[1], gun.historial[0]);

console.assert(universo["Fart"].length == 5);
console.assert(universo["Tierra"].length == 1);
console.assert(gun.historial.length == 2);

// /**
//  * Si haces un scan de la pistola, se muestra en consola
//  * la lista de dimensiones, desde la más reciente a la más
//  * antigua: Fart, Tierra.
//  */
console.log("/--------Primer Scan -------/"+"\n");
console.log(gun.scan());
console.log("\n");
console.assert(gun.historial.length == 2);


// /**
//  * Rick dispara la pistola y se añade al universo la dimensión "Coaches".
//  */

var result = protoRick.dispara(gun, universo, "Coaches");
universo = result.universe;
gun = result.portalgun;

console.assert("Coaches" in universo);
console.assert(universo.length == 3);

// /**
//  * Los 5 cruzan a la dimensión "Coach".
//  * 
//  * Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
//  * 
//  * La pistola añade a su historial "Fart".
//  * 
//  * Si haces un scan de la pistola, se muestra en consola
//  * Coaches, Fart, Tierra.
//  */

universo.cruzarDimension(pjsQueCruzan, gun.historial[1], gun.historial[0]);

console.assert(universo["Coaches"].length == 5);
console.assert(universo["Fart"].length == 0);
console.assert(universo["Tierra"].length == 1);
console.log("/-----Segundo Scan-----/"+"\n")
console.log(gun.scan());
console.log("\n");
console.assert(gun.historial.length == 3);



// /**
//  * Crea un Doofus Rick segun se indica en el README
//  */

var doofous = createRickClon();

Object.defineProperty(doofous, "extend",
        // Define Object.prototype.extend
        {
            writable: true,
            // Make it nonenumerable
            enumerable: false,
            configurable: true,
            value: function(o) {

                var names = Object.getOwnPropertyNames(o);
                // Loop through them
                for(var i = 0; i < names.length; i++) {
                    // Skip props already in this object
                    // Get property description from o
                    var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                    // Use it to create property on this
                    Object.defineProperty(this, names[i], desc);
                }
            }
            
        });
doofous.extend(jerry);
doofous.id = "J-19-Z7";
doofous.monedas = doofous.coinCollection.getCoinCollection();
doofous.speak = function() {
    return this.messageOnSpeak;
}


console.assert(doofous);
console.assert(doofous.id == "J-19-Z7");
console.assert(doofous.ondas == "altas");
console.assert(doofous.monedas.length == 4);
console.assert(doofous.speak() == "Tengo una colección de monedas antiguas raras!");
