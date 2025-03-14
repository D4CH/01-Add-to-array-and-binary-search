// Tomt array
let myArray = [];

function textTilmyArray(input) {
    input = document.getElementById('textField').value;
    if (input.trim() !== "") { // Fjerner whitespaces
        myArray.push(input);  
        myArray.sort();  // Sortér arrayet efter hvert input
    }
    console.log(myArray);
    return false;
}

function hentTextFraMyArray() {
    document.getElementById('hentTing').textContent = myArray.join("\n"); //Sætter hvert element på ny linje
    console.log("Hentede ting:");
    console.log(myArray);
    return false;
}

// Recursive binary search
function recursiveFunction(arr, x, start, end) {
    // Base Condition
    if (start > end) return false;
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
    // Compare mid with given key x
    if (arr[mid] === x) return true;
    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}

function binarySearch() {
    let x = document.getElementById('searchField').value;
    if (myArray.length === 0) { // Hvis arrayen er 0 characters i længde så..
        document.getElementById('searchStatus').textContent = "Array er tomt!";
        return false;
    }
    let found = recursiveFunction(myArray, x, 0, myArray.length - 1);
    document.getElementById('searchStatus').textContent = found ? "Element fundet!" : "Element ikke fundet!";

    console.log(found ? "Element found!" : "Element not found!");
    return false;
}