
function Rick() {
    this.messageOnTalk = "Es Rick-dículo!";
    this.id = "C-137";
    this.ondas = "altas";
}

Rick.prototype.habla = function() {
    return this.messageOnTalk;
};

// Hacer el prototipo de Rick único
function singletonRick() { 
    const prototipo = new Rick();

    return {
        get: function() {
            return prototipo;
        }
    };
}

// Exportar el módulo
exports.rickC137 = function() {
    return singletonRick();
};