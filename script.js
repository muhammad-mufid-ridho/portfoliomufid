  var mymap = L.map('map').setView([-5.415294826520846, 105.07339024592888], 15); // Ganti dengan koordinat lokasi yang diinginkan

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mymap);

  var marker = L.marker([-5.4152934914019655, 105.07338555206307]).addTo(mymap);
  marker.bindPopup("Rumah Ku").openPopup();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var elem = document.querySelector('.m-p-g');

	document.addEventListener('DOMContentLoaded', function() {
		var gallery = new MaterialPhotoGallery(elem);})