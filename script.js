const sections = [...document.querySelectorAll(".section")];
const navItems = [...document.querySelectorAll(".nav-item")];
const toast = document.getElementById("toast");

function showSection(id){
  sections.forEach(s=>s.classList.toggle("active-section", s.id===id));
  navItems.forEach(n=>n.classList.toggle("active", n.dataset.section===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
navItems.forEach(n=>n.addEventListener("click",()=>showSection(n.dataset.section)));
document.querySelectorAll("[data-section-target]").forEach(b=>b.addEventListener("click",()=>showSection(b.dataset.sectionTarget)));

const depths=[0,100,500,1000];
const depthTemps={0:"28.4",100:"22.1",500:"15.6",1000:"8.7"};
const depthTabs=document.querySelectorAll("#depthTabs button");
depthTabs.forEach(btn=>btn.addEventListener("click",()=>{
  depthTabs.forEach(x=>x.classList.remove("selected")); btn.classList.add("selected");
  const d=btn.dataset.depth;
  document.getElementById("mapTooltip").innerHTML=`<b>15.0°N, 65.0°E</b><span>Temperature <strong>${depthTemps[d]}°C</strong></span>`;
}));

const slider=document.getElementById("depthSlider");
const sliderValue=document.getElementById("sliderValue");
const explorerTitle=document.getElementById("explorerDepthTitle");
const inspectTemp=document.getElementById("inspectTemp");
const inspectDepth=document.getElementById("inspectDepth");
const presets=[...document.querySelectorAll(".depth-presets button")];

function updateDepth(d){
  d=Number(d);
  slider.value=d; sliderValue.textContent=d+" m";
  explorerTitle.textContent=`Temperature at ${d} m`;
  inspectTemp.textContent=(depthTemps[d] || (28.4-(d/1000)*19.7).toFixed(1))+"°C";
  inspectDepth.textContent=`at ${d} m depth`;
  presets.forEach(p=>p.classList.toggle("active",Number(p.dataset.slider)===d));
}
slider.addEventListener("input",()=>updateDepth(slider.value));
presets.forEach(p=>p.addEventListener("click",()=>updateDepth(p.dataset.slider)));

document.getElementById("inspectBtn").addEventListener("click",()=>{
  const lat=document.getElementById("latInput").value;
  const lon=document.getElementById("lonInput").value;
  document.getElementById("locationPin").style.left=(35+Math.random()*25)+"%";
  document.getElementById("locationPin").style.top=(35+Math.random()*25)+"%";
  toast.textContent=`Point ${lat}°N, ${lon}°E inspected`;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
});

document.getElementById("dateChip").addEventListener("click",()=>{
  toast.textContent="Dataset date: 23 June 2021";
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
});
document.getElementById("profileLocation").addEventListener("click",()=>{
  toast.textContent="Point selector opened — using 15°N, 65°E";
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
});
