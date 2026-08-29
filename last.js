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
const nAme = localStorage.getItem("nAme");
const adj = localStorage.getItem("adj");
const vErb = localStorage.getItem("vErb");
const things = localStorage.getItem("things");
const food = localStorage.getItem("food");
const Anml = localStorage.getItem("Anml");
const nNoun = localStorage.getItem("nNoun");
const cOlour = localStorage.getItem("cOlour");
const aGe = localStorage.getItem("aGe");
const dEstination = localStorage.getItem("dEstination");
const nPlural = localStorage.getItem("nPlural");
const cAsia = localStorage.getItem("cAsia");
const pTense = localStorage.getItem("pTense");
const jobType = localStorage.getItem("jobType");
const transpoType = localStorage.getItem("transpoType");
document.getElementById("mt").innerHTML = `
    ${nAme}'s perfect holiday plan!! first thing first is to pack a ${nNoun} very ${adj}ly.
    Followed by ${vErb}ing out the door with ${things}.Obviously travelling at ${aGe} is crazy cool but we all gotta stop and admire the ${Anml} before your trip to ${dEstination}.
    Going ${cAsia} next time fs thoo hopefully youre a ${jobType} by then. OKAY anyways back to the present you got your ${cOlour} suitcase in hand and some brilliant ${food} in the other as you make your way to the${transpoType}.
    enjoy your trip!!!
`;