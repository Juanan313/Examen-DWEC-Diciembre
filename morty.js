Morty = function() {
    this.id = "earthMorty";
    this.messageOnTalk = "Oohh man!";
    this.ondas = "bajas";
}

Morty.prototype.habla = function () {
    return this.messageOnTalk;
  }
Morty.prototype.setPartner = function (rick) {
    this.partner = rick;
}

// Hacer el prototipo de Morty único
function singletonMorty() { 
    const prototipo = new Morty();

    return {
        get: function() {
            return prototipo;
        }
    };
}

// Exportar el módulo
exports.earthmorty = function() {
    return singletonMorty();
};