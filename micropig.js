async function incarcaSVG2() {
  // SVG #1 – background principal
  const responseMicro = await fetch("Vectori/Groupmicro.svg");
  const svgMicro = await responseMicro.text();
  document.getElementById("partea2micro").innerHTML = svgMicro;




  }
  incarcaSVG2();
