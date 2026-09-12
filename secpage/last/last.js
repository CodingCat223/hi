const plcont = document.body;
const plim = "img/plane.png";
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
${nAme}'s perfect holiday plan!! First thing first, its time to pack a ${nNoun}, and obviously you have to do it very ${adj}ly.
Once that's done, you're ${vErb}ing out the door with ${things} in hand. Travelling at ${aGe} is crazy cool, but before you go, you stop to admire the ${Anml} just one last time before heading to ${dEstination}.
You're already planning on going ${cAsia} next time, and hopefully by then you'll be a ${jobType}. But for now, you've got your ${cOlour} suitcase in one hand and some brilliant ${food} in the other as you make your way to the ${transpoType}.
And just like that youre off on youre new adventure, enjoy your trip!!!
`;