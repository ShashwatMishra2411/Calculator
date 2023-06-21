var display = document.querySelector(".display");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let clear = document.querySelector(".clear");
let plus = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mult = document.querySelector(".mult");
let div = document.querySelector(".divide");
let equal = document.querySelector(".equal");
let back = document.querySelector(".back");
let sine = document.querySelector(".Sine");
let dot = document.querySelector(".dot");
let button = document.getElementById("spa");
let tan = document.querySelector(".Tan");
let cos = document.querySelector(".Cos");
let log = document.querySelector(".Log");
let span = document.querySelectorAll("span");

var value = "";
var dis = "";
var cal = [];
var disp = [];
var x = 0;
var y = 0;

one.addEventListener("click", onep);
two.addEventListener("click", twop);
three.addEventListener("click", threep);
four.addEventListener("click", fourp);
five.addEventListener("click", fivep);
six.addEventListener("click", sixp);
seven.addEventListener("click", sevenp);
eight.addEventListener("click", eightp);
nine.addEventListener("click", ninep);
zero.addEventListener("click", zerop);
clear.addEventListener("click", clearp);
plus.addEventListener("click", plusp);
sub.addEventListener("click", subp);
mult.addEventListener("click", multp);
div.addEventListener("click", divp);
equal.addEventListener("click", equalp);
back.addEventListener("click", backp);
sine.addEventListener("click", sinp);
dot.addEventListener("click", dotp);
ob.addEventListener("click", obp);
cb.addEventListener("click", cbp);
tan.addEventListener("click", tanp);
cos.addEventListener("click", cosp);
log.addEventListener("click", logp);
span.forEach((e)=>{
    e.addEventListener("click", ()=>{
        e.style.animation = "waves 1s ease-in 0s backwards";
        setTimeout(rest, 1001)
    })
})
function rest(){
    span.forEach((e)=>{
            e.style.animation = "none";
    })
}

function dotp()
{
    cal.push(".");
    value = cal.join("");
    disp.push(".");
    dis  = disp.join("");
    button.textContent = dis;
}
function onep(){
    cal.push("1");
    value = cal.join("");
    disp.push("1");
    dis  = disp.join("");
    button.textContent = dis;
    
}
function twop(){
    cal.push("2");
    value = cal.join("");
    disp.push("2");
    dis  = disp.join("");
    button.textContent = dis;
}
function threep(){
    cal.push("3");
    value = cal.join("");
    disp.push("3");
    dis  = disp.join("");
    button.textContent = dis;
}
function fourp(){
    cal.push("4");
    value = cal.join("");
    disp.push("4");
    dis  = disp.join("");
    button.textContent = dis;
}
function fivep(){
    cal.push("5");
    value = cal.join("");
    disp.push("5");
    dis  = disp.join("");
    button.textContent = dis;
}
function sixp(){
    cal.push("6");
    value = cal.join("");
    disp.push("6");
    dis  = disp.join("");
    button.textContent = dis;
}
function sevenp(){
    cal.push("7");
    value = cal.join("");
    disp.push("7");
    dis  = disp.join("");
    button.textContent = dis;
}
function eightp(){
    cal.push("8");
    value = cal.join("");
    disp.push("8");
    dis  = disp.join("");
    button.textContent = dis;
}
function ninep(){
    cal.push("9");
    value = cal.join("");
    disp.push("9");
    dis  = disp.join("");
    button.textContent = dis;
}
function zerop(){
    cal.push("0");
    value = cal.join("");
    disp.push("0");
    dis  = disp.join("");
    button.textContent = dis;
}
function clearp(){
    cal = []
    value = cal.join("");
    disp = []
    dis  = disp.join("");
    button.textContent = dis;
}
function plusp(){
    cal.push("+");
    value = cal.join("");
    disp.push("+");
    dis  = disp.join("");
    button.textContent = dis;
}
function subp(){
    cal.push("-");
    value = cal.join("");
    disp.push("-");
    dis  = disp.join("");
    button.textContent = dis;
}
function multp(){
    cal.push("*");
    value = cal.join("");
    disp.push("*");
    dis  = disp.join("");
    button.textContent = dis;
}
function divp(){
    cal.push("/");
    value = cal.join("");
    disp.push("/");
    dis  = disp.join("");
    button.textContent = dis;
}
function sinp(){
    cal.push("Math.sin");
    value = cal.join("");
    disp.push("Sin");
    dis  = disp.join("");
    button.textContent = dis;
}
function tanp(){
    cal.push("Math.tan");
    value = cal.join("");
    disp.push("Tan");
    dis  = disp.join("");
    button.textContent = dis;
}
function cosp(){
    cal.push("Math.cos");
    value = cal.join("");
    disp.push("Cos");
    dis  = disp.join("");
    button.textContent = dis;
}
function logp(){
    cal.push("Math.log");
    value = cal.join("");
    disp.push("Log");
    dis  = disp.join("");
    button.textContent = dis;
}
function obp(){
    if((cal[cal.length-1] == "Math.sin")||(cal[cal.length-1] == "Math.cos")||(cal[cal.length-1] == "Math.tan")){
    cal.push("((Math.PI/180)*");
    value = cal.join("");
    disp.push("(");
    dis  = disp.join("");
    button.textContent = dis;
    }
    else{
    cal.push("(");
    value = cal.join("");
    disp.push("(");
    dis  = disp.join("");
    button.textContent = dis;
    }
}
function cbp(){
    cal.push(")");
    value = cal.join("");
    disp.push(")");
    dis  = disp.join("");
    button.textContent = dis;
}
function backp(){
    cal.pop()
    value = cal.join("");
    disp.pop();
    dis = disp.join("");
    button.textContent = dis;
}
function equalp(){
    if(cal[0] == "0"){
        cal.shift();
        value = cal.join("");
        console.log("hey = "+cal);
    }
    console.log(disp, cal);
    button.textContent = eval(value);
    disp = [];
    cal = [];
    disp.push(eval(value));
    cal.push(eval(value));
    
    value = eval(value);
    dis = eval(value);
}