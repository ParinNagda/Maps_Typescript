import faker from 'faker'

import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName:string
    catchPhrase:string
    location:{
        lat:number
        lon:number  
    }

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lon:parseFloat(faker.address.longitude())
        }
    }

    markerContent(){
        return `<div><h1>Company: ${this.companyName} </h1><h3> ${this.catchPhrase}</h3></div>`;
    }
}