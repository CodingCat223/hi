const plcont=document.body;
const plim= "img/star.png"

for(let i = 0;i<8;i++){
    const plane=document.createElement("div");
    plane.classList.add("plane");
    plane.innerHTML=`<img src="${plim}">`;
    plane.style.left="-50px";
    plane.style.top=(10+i*9)+"%";
    plane.style.animationDuration=(3+Math.random()*2)+"s";
    document.body.appendChild(plane);
}