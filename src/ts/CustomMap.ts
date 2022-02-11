export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(`${id}`), {
      zoom: 10,
      center: {
        lat: 60,
        lng: 30,
      },
    });
  }
}
