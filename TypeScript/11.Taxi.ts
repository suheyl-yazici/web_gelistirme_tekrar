import { Point } from './11.Point';
import { Vehicle } from './11.Vehicle';


export class Taxi implements Vehicle {
  
    constructor(private _location?: Point, private _color?: string) { }
  
    travelTo(point: Point): void {
      console.log(`Taksi X: ${this._location.x} Y: ${this._location.y} dan ${point.x} Y: ${point.y} konuma gidiyor.`);
    }
    
    get location() {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("Koordinat bilgileri negatif olamaz")
        }
        this._location = value;
    }
  }
  