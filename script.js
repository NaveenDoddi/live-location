
function run() {
    var para = document.createElement("p")
    para.innerText="press ALLOW to get your location"
    document.getElementById("para").append(para)
  
    navigator.geolocation.getCurrentPosition(showloc)
  
    function showloc(pos){
      
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude
  
      var a = document.createElement("a")
    
      a.href = "https://www.latlong.net/c/?lat="+latitude+"&long="+longitude
      a.target = '_self'
      a.innerText = "Get your Location"
      // document.getElementById("para").append(a)
      document.body.append(a)
  
    }
  
  }
