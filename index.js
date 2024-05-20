document.getElementById("btn").addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((e) => {
        document.getElementById("a1").innerText = e.coords.latitude.toString();
        document.getElementById("a2").innerText = e.coords.longitude.toString();
    })
    fetch("https://api.ipify.org/?format=json")
    .then(e => e.json())
    .then(u => {
        console.log(u)
        document.getElementById("a3").innerText = u["ip"];
    })
});

