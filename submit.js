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
})