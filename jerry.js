// var jerry = (function (){

//   var rd2dCoinCollection = ["RD2D-Coin", "RD2D-Coin", "RD2D-Coin", "RD2D-Coin"];

//   return {
//     setCoinCollection : function (newValue) {
//         rd2dCoinCollection = newValue;
//     },
//     getCoinCollection : function () {
//      return rd2dCoinCollection; 
//     }
//   }; 
// }());

class Jerry {
     constructor () {
        this.id = "Jerry";
        this.messageOnSpeak = "Tengo una colección de monedas antiguas raras!";
        this.coinCollection = (function (){

            var r2d2CoinCollection = ["R2-D2", "R2-D2", "R2-D2", "R2-D2"];
          
            return {
              setCoinCollection : function (newValue) {
                r2d2CoinCollection = newValue;
              },
              getCoinCollection : function () {
               return r2d2CoinCollection; 
              }
            }; 
          }());
     }

     speak() {
         return this.messageOnSpeak;
        };
}

var jerry = new Jerry();

// Hacer el prototipo de Jerry único
function singletonJerry() { 
    const prototipo = new Jerry();

    return {
        get: function() {
            return prototipo;
        }
    };
}

// Exportar el módulo
exports.jerry = function() {
    return singletonJerry();
};