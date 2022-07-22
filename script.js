var divElement = document.createElement("div");
divElement.setAttribute("class", "circle-section");

btnElement = document.createElement("button");
iconElement = document.createElement("i");
iconElement.setAttribute("class", "fa fa-random");
iconElement.setAttribute("aria-hidden", "true");

bodyElement = document.querySelector("body");
btnElement.append(iconElement);
divElement.append(btnElement)
console.log(divElement);
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

// var arrayElement = [para1.value , para2 , para3, para4, para5];


btnElement.addEventListener('click', shuffleFunc)
    function shuffleFunc() {
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
