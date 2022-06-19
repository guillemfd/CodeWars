//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//v1
function boolean(string){
    if (string === true) {
        return 'Yes'
    } else {
        return 'No'
    }
}

console.log(boolean(false))



//v2
function boolToWord(boolean){
    return boolean === true ? 'Yes' : 'No';
}

console.log(boolToWord(true))