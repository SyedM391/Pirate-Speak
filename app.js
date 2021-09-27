var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}

function clickHandler() {
var inputTxt = txtInput.value;

fetch(getTranslationUrl(inputTxt))
.then(response=>response.json())
.then(json=>{
    var translatedText = json.contents.translated;
    outputText.innerText = translatedText;
})
};

btnTranslate.addEventListener("click", clickHandler)