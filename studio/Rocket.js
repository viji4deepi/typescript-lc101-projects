"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoMassTotal = this.sumMass(this.cargoItems);
        var astronautMassTotal = this.sumMass(this.astronauts);
        var massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    };
    Rocket.prototype.canAdd = function (item) {
        //this.currentMassKg() + item.massKg <= this.totalCapacityKg
        // let totalMass = this.currentMassKg() + item.massKg;
        // return totalMass <= this.totalCapacityKg;
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        //Uses this.canAdd() to see if another item can be added.
        var itCanAddit = this.canAdd(cargo);
        if (itCanAddit) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var itCanAddit = this.canAdd(astronaut);
        if (itCanAddit) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
