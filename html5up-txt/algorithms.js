var jsonParsed = false

var note
var algorithmsJSON
var currentAlgorithm
var returnAlgorithms
const algorithms = {
    "algorithms": [
        { // OLL
            "name": "1",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "R U2 R2 F R F' U2 R' F R F'",
            "note":"asdf",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            "image": "images/algorithms/1.png"
        },
        {
            "name": "2",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r U r' U2 r U2 R' U2 R U' r'",
            "note":"asdf",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            "image": "images/algorithms/2.png"
        },
        {
            "name": "26",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U2 R' U' R U' R'",
            "note":"asdf",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/26.png"
        },
        {
            "name": "27",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U R' U R U2 R'",
            "note":"asdf",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/27.png"
        },
        { // PLL
            "name": "T",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R U R' U' R' F R2 U' R' U' R U R' F'",
            "note":"This algorithm is very important to learn. It is the basis for many PLL algorithms. Learning this one will make many other algorithms easier to learn.Note 2: Think of the first seven moves of this algorithm as taking out an F2L pair, then reinserting it another way.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/t.png"
        },
        {
            "name": "Y",
            "set": "PLL",
            "subSet":"Diagonal Corner Swap",
            "notation": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
            "note":"thinking of this as a T permutation, but slightly altered.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/y.png"
        },
        {
            "name": "Ua",
            "set": "PLL",
            "subSet":"Edges Only",
            "notation": "R U' R U R U R U' R' U' R2",
            "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/ua.png"
        },
        {
            "name": "Ub",
            "set": "PLL",
            "subSet":"Edges Only",
            "notation": "R2 U R U R' U' R' U' R' U R",
            "note":"This is a Ua permutation, backwards.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/ub.png"
        },
        {
            "name": "H",
            "set": "PLL",
            "subSet":"Edges Only",
            "notation": "M2 U M2 U2 M2 U M2",
            "note":"The two U moves can also be U' moves. They need to be the same, however.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/h.png"
        },
        {
            "name": "Z",
            "set": "PLL",
            "subSet":"Edges Only",
            "notation": "M' U M2 U M2 U M' U2 M2",
            "note":"When learning this algorithm, think of it as going back and forth between M and U moves.<br>M moves are one, two, two, one, two.<br>U moves are one, one, one, two.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/algorithms/z.png"
        }
    ]
}

function getAlgorithms(complexity, set) {
    // window.alert("Test alert to signify that the JavaScript is working.");
    // window.alert(JSON.stringify(algorithms.algorithms[0]));

    returnAlgorithms = "<table style='border:solid'>"; // resetting return value for when the code is executed multiple times
    returnAlgorithms += "<tr><th><p class='alg'>Name</p></th><th><p class='alg'>Image</p></th>"+
    "<th><p class='alg'>Notation</p></th><th><p class='alg'>Sub Class</p></th><th><p class='alg'>Note</p></th></tr>"; // header for algorithm tables

    // To filter the JSON down according to complexity and set
    for (let i in algorithms.algorithms) {
        currentAlgorithm = algorithms.algorithms[i];
        
        if (currentAlgorithm[complexity] == true && currentAlgorithm["set"] == set) {

            if (currentAlgorithm.note != "") {
                note = currentAlgorithm.note;
                // note = ""; // this is exclusively for testing purposes. comment this and uncomment the line above for seeing how it should be seen
            } else {
                note = "";
            }

            returnAlgorithms += "<tr>"+
            "<td><p class='alg'>" + currentAlgorithm.name + "</p></td>"+
            "<td><div class='alg'><img src='" + currentAlgorithm.image + "'></image></td>"+
            "<td><p class='alg'>Notation: " + currentAlgorithm.notation + "</p></td>"+
            "<td><p class='alg'>" + currentAlgorithm.subSet + "</p></td>"+
            "<td><p class='alg'>" + note + "</p></td>"+
            "</tr>";
        }
    }

    returnAlgorithms += "</table>";
    // window.alert(JSON.stringify(returnAlgorithms)); // used for testing purposes
    document.getElementById(set).innerHTML = returnAlgorithms;
}

function getBeginnerAlgorithms(set) {
    getAlgorithms("beginner", set);
}

function getIntermediateAlgorithms(set) {
    getAlgorithms("intermediate", set);
}

function getAdvancedAlgorithms(set) {
    getAlgorithms("advanced", set);
}