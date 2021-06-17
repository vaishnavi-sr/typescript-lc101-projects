import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: [number, string][] = [];
    astronauts: [number, string][] = [];
 
    constructor(name: string, totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sumMass: number;
        for(let i=0;i<items.length;i++)
        {
          sumMass += items[i].massKg;
        }
        return sumMass;
        ;
     }

     currentMassKg(): number {
        let sumAstronaut=0;
        let sumCargo = 0;
        for(let i=0;i<this.astronauts.length;i++)
        {
            sumAstronaut += this.astronauts[i][0];
        }
        for(let i=0;i<this.cargoItems.length;i++)
        {
            sumCargo += this.cargoItems[i][0];
        }
        return sumAstronaut+sumCargo;
     }

     canAdd(item: Payload): boolean {
         if(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
         return true;
         else return false;
     }

     addCargo(cargo: Cargo): boolean {
         if(this.canAdd(cargo))
         {
           var record: [number, string] = [cargo.massKg,cargo.material];
           this.cargoItems.push(record);
           return true;
         }
         else
         return false;
     }

     addAstronaut(astronaut: Astronaut): boolean {
         if(this.canAdd(astronaut))
         {
           var record: [number, string] = [
            astronaut.massKg,
            astronaut.name];
           this.astronauts.push(record);
           return true;
         }
         else
         return false;
     }
}