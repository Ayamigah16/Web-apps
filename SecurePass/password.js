//defining variables
const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById(symbol)
const generateEl = document.getElementById('generate')


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


//defining functions
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// a function to generate password
function generatePassword() {
    const len = lenEl.value;

    let password = "";
    if(upperEl.checked){
        password += getUpperCase()
    }
    
    if(lowerEl.checked){
        password += getLowerCase()
    }

    if(numberEl.checked){
        password += getNumber() 
    }

    if(symbolEl.checked){
        password += getSymbols() 
    }

    if(lEl.checked){
        password += getLowerCase 
    }

    for (let i=password.length; i<len; i++){
        const x = generateX();
        password += x
    }

    pwEl.innerHTML = password;
}


// a function to select password values
function generateX() {
    const xs =[];
    if(upperEl.checked) {
        xs.push(getUpperCase());
    }

    if(lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if(numberEl.checked) {
        xs.push(getNumber());
    }

    if(symbolEl.checked) {
        xs.push(getSymbols());
    }

    if (xs.length === 0 ) return "";
    return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener("click", generatePassword)

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
})