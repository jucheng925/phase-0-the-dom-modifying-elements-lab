// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
//document.body.appendChild(newHeader);
//document.body.append(newHeader);//

//newHeader.setAttribute("id", "victory");//
newHeader.id = "victory"

//const message = document.getElementById("victory");
newHeader.textContent = 'Kimchi is the champion'
document.body.append(newHeader);