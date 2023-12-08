const body = document.body;

const section = document.createElement("section");
body.appendChild(section);
let div= document.createElement("div");
section.appendChild(div);
div.style=" scale:0.5; padding-bottom:270px; border-radius:30px; background: rgb(240,183,190); background: linear-gradient(79deg, rgba(240,183,190,1) 34%, rgba(249,219,193,1) 65%); height:800px; "
// console.log(section)
let img = document.createElement("img");
div.appendChild(img);
img.src="img.jpg";
img.style="scale:0.7; position:relative; top:-100px;"
let p= document. createElement("p")
div.appendChild(p);
p.innerText="John Doe"
p.style="font-size:80px; font-family: Times New Roman; font-weight:600; position:relative; top:-200px; text-align:center;"
let p_2= document.createElement("p");
div.appendChild(p_2);
p_2.innerHTML="Web Developer &commat; Slackhouse.io"
p_2.style=" text-align:center; font-size:55px; font-weight:500; position:relative; top:-200px;"
let button =document.createElement("button");
div.appendChild(button);
button.innerText="Contact";
button.style="font-size:60px; position:relative; top:-200px; padding:10px 40px; border-radius:40px; margin-left:20px; border:none; color:white; background: rgb(217,81,119); background: linear-gradient(79deg, rgba(217,81,119,1) 11%, rgba(249,218,136,1) 80%);"
section.style="background: rgb(224,109,124); background: linear-gradient(79deg, rgba(224,109,124,1) 34%, rgba(242,190,133,1) 71%);"