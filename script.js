var divElement = document.createElement("div");
divElement.setAttribute("class", "circle-section");

btnElement = document.createElement("button");
iconElement = document.createElement("i");
iconElement.setAttribute("class", "fa fa-random");
iconElement.setAttribute("aria-hidden", "true");

bodyElement = document.querySelector("body");
btnElement.append(iconElement);
divElement.append(btnElement)
bodyElement.append(divElement);

para1 = document.createElement("h1");
para2 = document.createElement("h1");
para3 = document.createElement("h1");
para4 = document.createElement("h1");
para5 = document.createElement("h1");
para1.textContent = "A"
para2.textContent = "B"
para3.textContent = "C"
para4.textContent = "D"
para5.textContent = "E"
para1.setAttribute("class", "first-header header");
para2.setAttribute("class", "sec-header header");
para3.setAttribute("class", "third-header header");
para4.setAttribute("class", "fourth-header header");
para5.setAttribute("class", "fifth-header header");

divElement.append(para1, para2, para3, para4, para5);

var tries = 0 ;
btnElement.addEventListener('click', shuffleFunc)
function shuffleFunc() {
    tries = tries +1
    var arr = [];
    var getElement = document.querySelectorAll('.header');
    var arrayElement = ["A", "B", "C", "D", "E"];
    for (let i = 0; i < arrayElement.length; i++) {
        while (arr.length <= arrayElement.length) {
            var number = Math.floor(Math.random() * arrayElement.length);
            if (!(arr.includes(arrayElement[number]))) {
                arr[i] = arrayElement[number];
                break;
            }
        }
        getElement[i].innerHTML = arr[i];
    }
}

var divEl2 = document.createElement("div");
divEl2.setAttribute("class", "display");
var inputEle = document.createElement("input");
inputEle.setAttribute("type", "text");
btnElement2 = document.createElement("button");
btnElement2.textContent = "GO" ;
btnElement2.setAttribute("id" , "btn2")

btnElement3 = document.createElement("button");
btnElement3.setAttribute("id" , "btn3")
btnElement3.textContent = "END GAME"
var divEl3  = document.createElement("div");
var headerEle = document.createElement("h1")
headerEle.textContent = "Score :"
var headerEle2 = document.createElement("h1")
headerEle2.textContent = "Tries :"
divEl3.append(headerEle , headerEle2);

divEl2.append(inputEle, btnElement2 , btnElement3 ,divEl3);
document.body.append(divEl2);

var emptyArray = []

  btnElement2.addEventListener("click", function () {
    var storedArray = ["CAD", "CAB", "AD", "BE", "CADE", "BADE", "BED", "GAB", "BEG", "GAD" , "DAD" , "BAD"]

    var a = inputEle.value
    storedArray.forEach(function (iterate) {
        if (a == iterate) {
           if(!(emptyArray.includes(a))){
            paragraEle = document.createElement("p")
            divEl3.append(paragraEle)
        
          var ab = (paragraEle.innerHTML = inputEle.value);
          emptyArray.push(ab) ;
      headerEle.textContent ="Score :" + emptyArray.length  

           }
    }
    });
     console.log(emptyArray);

btnElement3.addEventListener("click" , function(){
    headerEle2.textContent ="Tries :" + tries ;  
} );
});