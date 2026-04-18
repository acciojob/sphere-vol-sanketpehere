function volume_sphere() {
    // prevent form submission reload
    event.preventDefault();

    // get radius value
    let radius = document.getElementById("radius").value;

    // convert to number
    radius = parseFloat(radius);

    // calculate volume (4/3 * π * r³)
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // round to 4 decimal places
    volume = volume.toFixed(4);

    // display result
    document.getElementById("volume").value = volume;
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
