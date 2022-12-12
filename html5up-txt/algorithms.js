var jsonParsed = false
var imagePath
var notation
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
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "2",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r U r' U2 r U2 R' U2 R U' r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "3",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r' R2 U R' U r U2 r' U M'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "4",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "M U' r U2 r' U' R U' R' M'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "5",
            "set": "OLL",
            "subSet":"Square Shape",
            "notation": "l' U2 L U L' U l",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "6",
            "set": "OLL",
            "subSet":"Square Shape",
            "notation": "r U2 R' U' R U' r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "7",
            "set": "OLL",
            "subSet":"Small Lightning Bolt",
            "notation": "r U R' U R U2 r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "8",
            "set": "OLL",
            "subSet":"Small Lightning Bolt",
            "notation": "l' U' L U' L' U2 l",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "9",
            "set": "OLL",
            "subSet":"Fish Shape",
            "notation": "R U R' U' R' F R2 U R' U' F'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "10",
            "set": "OLL",
            "subSet":"Fish Shape",
            "notation": "R U R' U R' F R F' R U2 R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "11",
            "set": "OLL",
            "subSet":"Small Lightning Bolt",
            "notation": "r U R' U R' F R F' R U2 r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "12",
            "set": "OLL",
            "subSet":"Small Lightning Bolt",
            "notation": "r U R' U R' F R F' R U2 r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "13",
            "set": "OLL",
            "subSet":"Knight Move Shape",
            "notation": "F U R U' R2 F' R U R U' R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "14",
            "set": "OLL",
            "subSet":"Knight Move Shape",
            "notation": "R' F R U R' F' R F U' F'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "15",
            "set": "OLL",
            "subSet":"Knight Move Shape",
            "notation": "l' U' l L' U' L U l' U l",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "16",
            "set": "OLL",
            "subSet":"Knight Move Shape",
            "notation": "r U r' R U R' U' r U' r'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "17",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "F R' F' R2 r' U R U' R' U' M'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "18",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r U R' U R U2 r2 U' R U' R' U2 r",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "19",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r' R U R U R' U' M' R' F R F'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "20",
            "set": "OLL",
            "subSet":"Dot",
            "notation": "r U R' U' M2 U R U' R' U' M'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "21",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U2 R' U' R U R' U' R U' R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "22",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U2 R2 U' R2 U' R2 U2 R",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "23",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R2 D' R U2 R' D R U2 R",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "24",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "r U R' U' r' F R F'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "25",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "F' r U R' U' r' F R",
            "note":"asdf",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "26",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U2 R' U' R U' R'",
            // "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "27",
            "set": "OLL",
            "subSet":"Cross",
            "notation": "R U R' U R U2 R'",
            "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            // "customPath": ""
        },
        { //                                  PLL
            "name": "Aa",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "x L2 D2 L' U' L D2 L' U L'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Ab",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "x' L2 D2 L U L' D2 L U' L",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "E",
            "set": "PLL",
            "subSet":"Diagonal Corner Swap",
            "notation": "x' L' U L D' L' U' L D L' U' L D' L' U L D",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "F",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Ga",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R2 U R' U R' U' R U' R2 U' D R' U R D'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Gb",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R' U' R U D' R2 U R' U R U' R U' R2 D",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Gc",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R2 U' R U' R U R' U R2 U D' R U' R' D",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Gd",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R U R' U' D R2 U' R U' R' U R' U R2 D'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
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
            // "customPath": ""
        },
        {
            "name": "Ja",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "x R2 F R F' R U2 r' U r U2",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Jb",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R U R' F' R U R' U' R' F R2 U' R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Na",
            "set": "PLL",
            "subSet":"Diagonal Corner Swap",
            "notation": "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Nb",
            "set": "PLL",
            "subSet":"Diagonal Corner Swap",
            "notation": "R' U R U' R' F' U' F R U R' F R' F' R U' R",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Ra",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R U' R' U' R U R D R' U' R D' R' U2 R'",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Rb",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R2 F R U R U' R' F' R U2 R' U2 R",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "T",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": "R U R' U' R' F R2 U' R' U' R U R' F'",
            "note":"This algorithm is very important to learn. It is the basis for many PLL algorithms. Learning this one will make many other algorithms easier to learn.Note 2: Think of the first seven moves of this algorithm as taking out an F2L pair, then reinserting it another way.",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "Ua",
            "set": "PLL",
            "subSet":"Edges Only",
            "notation": "R U' R U R U R U' R' U' R2",
            // "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            // "customPath": ""
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
            // "customPath": ""
        },
        {
            "name": "V",
            "set": "PLL",
            "subSet":"Diagonal Corner Swap",
            "notation": "R' U R' U' y R' F' R2 U' R' U R' F R F",
            // "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
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
            // "customPath": ""
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
            // "customPath": ""
        }
    ]
}

function getAlgorithms(complexity, set) {
    // window.alert("Test alert to signify that the JavaScript is working.");
    // window.alert(JSON.stringify(algorithms.algorithms[0]));

    returnAlgorithms = "<table style='border:solid'>"; // resetting return value for when the code is executed multiple times
    returnAlgorithms += "<tr><th><p class='alg'>Name</p></th><th><p class='alg'>Image</p></th>"+
    "<th><p class='alg'>Notation</p></th><th><p class='alg'>Sub Class</p></th></tr>"; // header for algorithm tables // <th><p class='alg'>Note</p></th>

    // To filter the JSON down according to complexity and set
    for (let i in algorithms.algorithms) {
        currentAlgorithm = algorithms.algorithms[i];
        
        if (currentAlgorithm[complexity] == true && currentAlgorithm["set"] == set) {

            if (currentAlgorithm.note) {
                notation = "<td><div class='tooltip'><p class='alg'>" + currentAlgorithm.notation + "</p><span class='tooltiptext'>" + currentAlgorithm.note + "</span></div></td>";
            } else {
                notation = "<td><div><p class='alg'>" + currentAlgorithm.notation + "</p></div></td>";
            }

            if (currentAlgorithm.customPath) {
                imagePath = currentAlgorithm.customPath;
            } else {
                imagePath = "images/algorithms/" + currentAlgorithm.set + "/" + currentAlgorithm.name + ".png";
            }

            returnAlgorithms += "<tr>"+
            "<td><p class='alg'>" + currentAlgorithm.name + "</p></td>"+
            "<td><div class='alg'><img src='" + imagePath + "'></image></td>"+notation+
            "<td><p class='alg'>" + currentAlgorithm.subSet + "</p></td>"+
            "</tr>";
        }
    }

    returnAlgorithms += "</table>";
    // window.alert(returnAlgorithms); // used for testing purposes
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