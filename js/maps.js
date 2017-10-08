;
(function() {

  class UserLocation {
    static get(callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location)=>{
          callback({
            lat: location.coords.latitude,
            lng: location.coords.longitude
          })
        })
      } else {
        swal('Oops..', 'Tu navegador no soporta geolocalizacón', 'error')

      }

    }
  }

  const my_place = {
    lat: 19.4007,
    lng: -99.1573
  }
  google.maps.event.addDomListener(window, "load", () => {
    const map = new google.maps.Map(
      document.getElementById('map'), {
        center: my_place,
        zoom: 15
      }
    )

    const marker = new google.maps.Marker({
      map: map,
      position: my_place,
      title: 'Evolution',
      visible: true
    })

    UserLocation.get((coords)=>{
      //Calcular la distacia
      let origen = new google.maps.LatLng(coords.lat,coords.lng)
      let destino = new google.maps.LatLng(my_place.lat,my_place.lng)

      let service = new google.maps.DistanceMatrixService()

      service.getDistanceMatrix({
        origins: [origen],
        destinations: [destino],
        travelMode: google.maps.TravelMode.DRIVING
      },(response, status)=>{
        if (status === google.maps.DistanceMatrixStatus.OK) {
          const duration_element = response.rows[0].elements[0]

          const duracion_viaje = duration_element.duration.text

          console.log(duracion_viaje)

          document.querySelector("#message").innerHTML = "Estas a "+duracion_viaje+" de <span class='dancing-script medium'>Evolution</span>"
        }
      })
    })
  })
})()
