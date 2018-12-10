function Universe() {
    this.length = 0;  
}

Universe.prototype.addReality = function (realityName) { 
    Universe[realityName] = [];
    this.length += 1;
}

function singletonUniverse() { 
    const prototipo = new Universe();

    return {
        get: function() {
            return prototipo;
        }
    };
}

// Exportar el módulo
exports.protoUniverse = function() {
    return singletonUniverse();
};