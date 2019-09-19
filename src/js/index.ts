let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let textInputField: HTMLInputElement = <HTMLInputElement> document.getElementById("textToSwitch");
let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("execute");
button.addEventListener("click",Switch);

function Switch():void{
    let selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("selector");

    switch (selector.value){
        case "ToUpper":
            element.innerHTML = textInputField.value.toUpperCase();
            break;
        case "ToLower":
            element.innerHTML = textInputField.value.toLowerCase();
            break;
        case "EverySecond":
            let charArray:string[] = textInputField.value.split("");
            for (let i = 0; i < charArray.length; i++) {
                if (i%2==0) charArray[i] = charArray[i].toUpperCase();
                else charArray[i] = charArray[i].toLowerCase();
            }
            element.innerHTML = charArray.join("");
            break;
        case "EverySecondStartIndex1":
            let charArrayTwo:string[] = textInputField.value.split("");
            for (let i = 0; i < charArrayTwo.length; i++) {
                if (i%2==1) charArrayTwo[i] = charArrayTwo[i].toUpperCase();
                else charArrayTwo[i] = charArrayTwo[i].toLowerCase();
            }
            element.innerHTML = charArrayTwo.join("");
            break;
        case "BigFont":
            element.innerHTML = textInputField.value;
            element.style.fontSize = "600px";
            element.style.fontStyle = "bold";
            break;
        case "NormalFont":
            element.innerHTML = textInputField.value;
            element.style.fontSize = "18px";
            element.style.fontStyle = "regular";
            break;
    }
}


