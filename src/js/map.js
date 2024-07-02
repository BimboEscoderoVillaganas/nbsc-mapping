var map = L.map('map').setView([8.360072129923438, 124.86809668440212], 18.40);

L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

L.marker([8.360072129923438, 124.86809668440212]).addTo(map)
    .bindPopup('Northern Bukidnon State College')
    .openPopup();