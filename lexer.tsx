


// const fs = require('fs');

// const html : string = fs.readFileSync('./tolex.html', 'utf8');

const html = "<div>Hello</div>"

const charList = []
const tokenList = []

for(let i = 0; i < html.length; i++) {
    charList.push(html.charAt(i))
}

console.log(charList)

const tokenizer = (charList : string[]) => {
    if(charList.length === 0) {
        return
    }
    if(charList[0] === "<"){
        return tokenList.push("TOPEN")
    }
}
