import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {Payload} from './Payload';



export class Rocket {
    // properties and methods
    totalCapacityKg: number;
    name: string;
    cargoItems:Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string,totalCapacityKg: number ) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    } 
    sumMass(items: Payload[]) : number {
        let myTotalMass = 0;
        for(let i = 0;i<items.length;i++) {
            myTotalMass += items[i].massKg;
        } 
        return myTotalMass;
    }
    currentMassKg() :number  {
        let cargoMassTotal = this.sumMass(this.cargoItems)
        let astronautMassTotal = this.sumMass(this.astronauts);
        let massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    }
    canAdd(item: Payload): boolean {
        //this.currentMassKg() + item.massKg <= this.totalCapacityKg
        // let totalMass = this.currentMassKg() + item.massKg;
        // return totalMass <= this.totalCapacityKg;
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;

    }

    addCargo(cargo: Cargo): boolean  {
       //Uses this.canAdd() to see if another item can be added.
       let itCanAddit = this.canAdd(cargo);
       if(itCanAddit)  {
           this.cargoItems.push(cargo);
           return true;
       } else {
           return false;
       }
    } 

    addAstronaut(astronaut: Astronaut): boolean {
        let itCanAddit = this.canAdd(astronaut);
        if(itCanAddit)  {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
 }