import faker from "@faker-js/faker";

export class Company {
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `<div>
      <h4>Company Name: ${this.companyName}</h4>
      <h5>Catch Phrase: ${this.catchPhrase}</h5>
      </div>`;
  }
}
