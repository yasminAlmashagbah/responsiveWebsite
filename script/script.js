var next = document.querySelector(".next-testomonial");
var pic = document.querySelector(".test-pic-id");
var name2 = document.querySelector(".name-test");
var job = document.querySelector(".test-job");
var body = document.querySelector(".test-body");
var next2 = document.getElementById("circle");
let i = 0;
next.addEventListener("click", nextfun);
var imgaes = [
  "images/joanna-nix-474910-unsplash.png",
  "images/sai-maddali-423413-unsplash.png",
];
var names = ["adam", "yasmin"];
var jobs = ["(Director; XYZ)", "(Designer; XYZ)"];
var bodys = [
  "/“n just 2 very short meetings with 96 bucks, they managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.I/”",
  "they managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
];
function nextfun() {
  name2.textContent = names[i];
  job.textContent = jobs[i];
  body.textContent = bodys[i];
  pic.src = imgaes[i];
  i++;
  if (i === names.length) i = 0;
}
