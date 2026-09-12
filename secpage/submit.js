const plcont = document.body;
const plim = "plane.png";
for (let i = 0; i < 4; i++) {
    const plane = document.createElement("div");
    plane.classList.add("plane");
    plane.innerHTML = `<img src="${plim}">`;
    plane.style.left = "-50px";
    plane.style.top = (10 + i * 9) + "%";
    plane.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(plane);
}
const form = document.getElementById('perfectHoliday');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nAme = document.getElementById('nAme').value;
    const adj = document.getElementById('adj').value;
    const vErb = document.getElementById('vErb').value;
    const things = document.getElementById('things').value;
    const food = document.getElementById('food').value;
    const Anml = document.getElementById('Anml').value;
    const nNoun = document.getElementById('nNoun').value;
    const cOlour = document.getElementById('cOlour').value;
    const aGe = document.getElementById('aGe').value;
    const dEstination = document.getElementById('dEstination').value;
    const nPlural = document.getElementById('nPlural').value;
    const cAsia = document.getElementById('cAsia').value;
    const pTense = document.getElementById('pTense').value;
    const jobType = document.getElementById('jobType').value;
    const transpoType = document.getElementById('transpoType').value;

    localStorage.setItem("nAme", nAme);
    localStorage.setItem("adj", adj);
    localStorage.setItem("vErb", vErb);
    localStorage.setItem("things", things);
    localStorage.setItem("food", food);
    localStorage.setItem("Anml", Anml);
    localStorage.setItem("nNoun", nNoun);
    localStorage.setItem("cOlour", cOlour);
    localStorage.setItem("aGe", aGe);
    localStorage.setItem("dEstination", dEstination);
    localStorage.setItem("nPlural", nPlural);
    localStorage.setItem("cAsia", cAsia);
    localStorage.setItem("pTense", pTense);
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("transpoType", transpoType);
    window.location.href = "last.html";
})