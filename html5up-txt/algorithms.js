var jsonParsed = false

var note
var algorithmsJSON
var currentAlgorithm
var returnAlgorithms
const algorithms = {
    "algorithms": [
        { // OLL
            "name": "Sune",
            "set": "OLL",
            "notation": "R U R' U R U2 R'",
            "note":"asdf",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image.png"
        },
        {
            "name": "Anti Sune",
            "set": "OLL",
            "notation": "R U2 R' U' R U' R'",
            "note":"asdf",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image.png"
        },
        {
            "name": "Dot",
            "set": "OLL",
            "notation": "R U2 R2 F R F' U2 R' F R F'",
            "note":"asdf",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            "image": "images/temp_image.png"
        },
        {
            "name": "Dot",
            "set": "OLL",
            "notation": "r U r' U2 r U2 R' U2 R U' r'",
            "note":"asdf",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            "image": "images/temp_image.png"
        },
        {
            "name": "T",
            "set": "PLL",
            "notation": "R U R' U' R' F R2 U' R' U' R U R' F'",
            "note":"This algorithm is very important to learn. It is the basis for many PLL algorithms. Learning this one will make many other algorithms easier to learn.<br>Note 2: Think of the first seven moves of this algorithm as taking out an F2L pair, then reinserting it another way.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        },
        {
            "name": "Y",
            "set": "PLL",
            "notation": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
            "note":"thinking of this as a T permutation, but slightly altered.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        },
        {
            "name": "Ua",
            "set": "PLL",
            "notation": "R U' R U R U R U' R' U' R2",
            "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        },
        {
            "name": "Ub",
            "set": "PLL",
            "notation": "R2 U R U R' U' R' U' R' U R",
            "note":"This is a Ua permutation, backwards.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        },
        {
            "name": "H",
            "set": "PLL",
            "notation": "M2 U M2 U2 M2 U M2",
            "note":"The two U moves can also be U' moves. They need to be the same, however.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        },
        {
            "name": "Z",
            "set": "PLL",
            "notation": "M' U M2 U M2 U M' U2 M2",
            "note":"When learning this algorithm, think of it as going back and forth between M and U moves.<br>M moves are one, two, two, one, two.<br>U moves are one, one, one, two.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            "image": "images/temp_image2.png"
        }
    ]
}

function getAlgorithms(complexity, set) {
    // window.alert("Test alert to signify that the JavaScript is working.");
    // window.alert(JSON.stringify(algorithms.algorithms[0]));

    returnAlgorithms = "<table>"; // resetting return value for when the code is executed multiple times

    // To filter the JSON down according to complexity and set
    for (let i in algorithms.algorithms) {
        currentAlgorithm = algorithms.algorithms[i];
        
        if (currentAlgorithm[complexity] == true && currentAlgorithm["set"] == set) {

            if (currentAlgorithm.note != "") {
                note = "<p>Note: " + currentAlgorithm.note + "</p>";
            } else {
                note = "";
            }

            returnAlgorithms += "<tr>"+
            "<th><img height='100' src='" + currentAlgorithm.image + "'></image></th>"+
            "<th><p>" + currentAlgorithm.name + "</p><p>Notation: " + currentAlgorithm.notation + "</p>" + note + "</th>"+
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