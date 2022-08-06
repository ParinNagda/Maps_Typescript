export interface Mappable {
    location: {
        lat:number
        lon:number
    },
    markerContent():string
}

export class CustomMap {
    private googleMap:google.maps.Map;
    public selector:string;

    constructor(selector:string) {
        this.selector = selector;
        this.googleMap = new google.maps.Map(document.getElementById(selector ),{
            zoom:1,
            center: {
                lat:0,
                lng:0
            }
        });
    }

    addMarker(mapLocation:Mappable) {
         const marker = new google.maps.Marker({
             map:this.googleMap,
             position:{
                 lat:mapLocation.location.lat,
                 lng:mapLocation.location.lon
            }
         }) 
         
         marker.addListener('click',() => {
             const infoWindow = new google.maps.InfoWindow({
                 content: mapLocation.markerContent()
             })
             
             infoWindow.open(this.googleMap,marker)
         })
    }
}