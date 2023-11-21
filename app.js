// Exercise 1 Section: Sum of array of numbers
console.log(`Exercise 1: Sum of Array of Numbers`);

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    arr.forEach((number) => {
        sum += number;
    });

    return sum
}

console.log(arraySum(numbers));

//Exercise 2 Section: Favorite Book
console.log(`Exercise 2: Favorite Book`);

let favBook = {};

favBook.title = "Queen of Ruin";
favBook.author = "Tracy Banghart";
favBook.pageCount = 325;
favBook.readCount = 1;

console.log(favBook);

function info() {
    return `${this.title} by ${this.author} and is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
};

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Nightlife",
    author: "Rob Thurman",
    pageCount: 352,
    readCount: 4,
    info,
};
console.log(favBook2.info());

//Exercise 3: Reverse a String
console.log(`Exercise 3: Reverse a String`);
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence){
    let result = [];
    let words = sentence.split(" ")
    for(let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
       result.push(reverseWord);
    } 
    return result.join(" ");
}
console.log(reverseWords(sentence));

//Exercise 4: Parse a CSV
console.log(`Exercise 4: Parse a CSV`)
let csvData = "name,age\nFrodo,42\nSam,38\nMerry,36\nPippin,36";

function csvConverter(data) {

    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n")+ 1).split("\n");
    
    const customArr = valuesList.map((row) => {
        let values = row.split(",");
        let obj = {};
        values.forEach((col, idx) => {
            if (idx < headers.length){
                obj[headers[idx]] = col;
            } else {
                obj[`misc${idx}`] = col;
            }
        });
        return obj;
    });
     return customArr;
}

console.log(csvConverter(csvData));