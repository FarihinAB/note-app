let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command']; 
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
		} else if(cmd === 'insertImage') {
			let link = prompt("Enter the image url here: ", "");
			document.execCommand(cmd, false, link);
		} else {
			document.execCommand(cmd, false, null);
		}
	})
}

function execCommandWithArg(command, arg){
  document.execCommand(command, false, arg);
}

let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#move-icon');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

var word = document.querySelector('#wordCount');
function wordsCount () {
  var arr = output.textContent.trim().replace(/\s+/g, ' ').split(' ');
  word.textContent = !arr[0] ? 0 : arr.length;
}

output.addEventListener('input', wordsCount);
wordsCount();

var character = document.querySelector('#characterCount');
function characterCount () {
  var char = output.textContent.trim().replace(/ /g,'').length;
  character.textContent = char;
//  console.log(char)
}

output.addEventListener('input', characterCount);
characterCount();

function checkWebStorageSupport() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function displaySaveNote() {
    if(checkWebStorageSupport() == true) {
        result = localStorage.getItem('output');
    }
    if(result === null) {
        result = "";
    }
    document.getElementById('output').innerHTML = result;
}

function save() {
    if(checkWebStorageSupport() == true) {
        var output = document.getElementById("output");
        if(output.innerHTML != '') {
            localStorage.setItem("output", output.innerHTML);
        }
        else {
            alert("Nothing to save");
        }
    }
}
displaySaveNote();

function clearBtn(){
    document.getElementById("output").innerHTML = "";
    characterCount();
    wordsCount();
}

//console.log(localStorage)

