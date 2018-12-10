var PortalGun = function () {
    this.historial = [];
}

PortalGun.prototype.scanNewReality = function (realityName) {
    this.historial.unshift(realityName);
}

PortalGun.prototype.scan = function () {
    // this.historial.forEach( function (reality) {
    //     console.log(reality);
    //   })
    
    for (var i = 0; i < this.historial.length; i++) {
        console.log(this.historial[i]);
    }
}

PortalGun.prototype.trigger = function (universe, newReality) {
    universe.addReality(newReality);
    universe[newReality] = [];
    return universe;
 }


// Exportar el módulo
exports.portalGun = function() {
    return new PortalGun();
};