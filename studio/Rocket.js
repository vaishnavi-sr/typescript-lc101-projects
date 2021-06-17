"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMass;
        for (var i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
        ;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumAstronaut = 0;
        var sumCargo = 0;
        for (var i = 0; i < this.astronauts.length; i++) {
            sumAstronaut += this.astronauts[i][0];
        }
        for (var i = 0; i < this.cargoItems.length; i++) {
            sumCargo += this.cargoItems[i][0];
        }
        return sumAstronaut + sumCargo;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
            return true;
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            var record = [cargo.massKg, cargo.material];
            this.cargoItems.push(record);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            var record = [
                astronaut.massKg,
                astronaut.name
            ];
            this.astronauts.push(record);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
