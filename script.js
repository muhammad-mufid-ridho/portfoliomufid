  var mymap = L.map('map').setView([-7.797068, 110.370529], 15); // Ganti dengan koordinat lokasi yang diinginkan

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mymap);

  var marker = L.marker([-7.797068, 110.370529]).addTo(mymap);
  marker.bindPopup("Lokasi Saya").openPopup();