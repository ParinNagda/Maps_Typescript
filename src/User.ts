import { Mappable } from './CustomMap';
import faker from 'faker'


export class User implements Mappable {
    name:string;
    location:{
        lat:number;
        lon:number;
    }
    

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lon:parseFloat(faker.address.longitude())
        }
    }

    markerContent(){
        return `<h3>Username: ${this.name}</h3>`;
    }
}
