function Universe() {
    this.length = 0;  
}

Universe.prototype.addReality = function (realityName) { 
    Universe[realityName] = [];
    this.length += 1;
}

Universe.prototype.cruzarDimension = function(pjs, actualReality, newReality) {
    var universo = this;
    pjs.forEach(function (pj) { 
        universo[actualReality].splice(universo[actualReality].indexOf(pj), 1);
        universo[newReality].unshift(pj);
     });
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