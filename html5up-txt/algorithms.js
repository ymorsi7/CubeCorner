var jsonParsed = false
var imagePath
var notation
var notationBasic
var universalID = 0
var switchAlgorithmElement
var switchAlgorithmJSON
var switchCurrentAlgorithm
var algorithmsJSON
var currentAlgorithm
var returnAlgorithms
var learnedAlg
const algorithms = {
    "algorithms": [
        { // OLL
            "name": "1",
            "set": "OLL",
            "subSet":"Dot",
            "notation": ["R U2 R2 F R F' U2 R' F R F'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U r' U2 r U2 R' U2 R U' r'","y' F R U R' U' F' f R U R' U' f'","y' F R U R' U' S R U R' U' f'"],
            "defaultAlgorithm":1,
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
            "notation": ["r' R2 U R' U r U2 r' U M'","y F U R U' R' F' U F R U R' U' F'","y' f R U R' U' f' U' F R U R' U' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["M U' r U2 r' U' R U' R' M'","y F U R U' R' F' U F R U R' U' F'","y' f R U R' U' f' U' F R U R' U' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["l' U2 L U L' U l","y2 r' U2 R U R' U r"],
            "defaultAlgorithm":0,
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
            "notation": ["r U2 R' U' R U' r'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U R U2 r'"],
            "defaultAlgorithm":0,
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
            "notation": ["l' U' L U' L' U2 l","R U2 R' U2 R' F R F'","y2 r' U' R U' R' U2 r"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U' R' F R2 U R' U' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U R' F R F' R U2 R'","y2 r U R' U R U' R' U' r' R U R U' R'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U R' F R F' R U2 r'","y2 r' R2 U R' U R U2 R' U M'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U R' F R F' R U2 r'"],
            "defaultAlgorithm":0,
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
            "notation": ["F U R U' R2 F' R U R U' R'","r U' r' U' r U r' y' R' U R"],
            "defaultAlgorithm":0,
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
            "notation": ["R' F R U R' F' R F U' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["l' U' l L' U' L U l' U l","y2 r' U' r R' U' R U r' U r"],
            "defaultAlgorithm":0,
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
            "notation": ["r U r' R U R' U' r U' r'"],
            "defaultAlgorithm":0,
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
            "notation": ["F R' F' R2 r' U R U' R' U' M'","y2 R U R' U R' F R F' U2 R' F R F'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U R U2 r2 U' R U' R' U2 r","y R U2 R2 F R F' U2 M' U R U' r'"],
            "defaultAlgorithm":0,
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
            "notation": ["r' R U R U R' U' M' R' F R F'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U' M2 U R U' R' U' M'","r' R U R U R' U' M2 U R U' r'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U2 R' U' R U R' U' R U' R'","y R U R' U R U' R' U R U2 R'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U2 R2 U' R2 U' R2 U2 R"],
            "defaultAlgorithm":0,
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
            "notation": ["R2 D' R U2 R' D R U2 R","y2 R2 D R' U2 R D' R' U2 R'"],
            "defaultAlgorithm":0,
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
            "notation": ["r U R' U' r' F R F'","y R U R D R' U' R D' R2"],
            "defaultAlgorithm":0,
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
            "notation": ["F' r U R' U' r' F R","y' R' F R B' R' F' R B"],
            "defaultAlgorithm":0,
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
            "notation": ["R U2 R' U' R U' R'","y' R' U' R U' R' U2 R"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U R U2 R'","y' R' U2 R U R' U R"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": true,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "28",
            "set": "OLL",
            "subSet":"Corners Oriented",
            "notation": ["r U R' U' r' R U R U' R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "29",
            "set": "OLL",
            "subSet":"Awkward Shape",
            "notation": ["R U R' U' R U' R' F' U' F R U R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "30",
            "set": "OLL",
            "subSet":"Awkward Shape",
            "notation": ["F R' F R2 U' R' U' R U R' F2","F U R U2 R' U' R U2 R' U' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "31",
            "set": "OLL",
            "subSet":"P Shape",
            "notation": ["R' U' F U R U' R' F' R"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "32",
            "set": "OLL",
            "subSet":"P Shape",
            "notation": ["L U F' U' L' U L F L'","y2 S R U R' U' R' F R f'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "33",
            "set": "OLL",
            "subSet":"T Shape",
            "notation": ["R U R' U' R' F R F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "34",
            "set": "OLL",
            "subSet":"C Shape",
            "notation": ["R U R2 U' R' F R U R U' F'","R U R' U' B' R' F R F' B"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "35",
            "set": "OLL",
            "subSet":"Fish Shape",
            "notation": ["R U2 R2 F R F' R U2 R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "36",
            "set": "OLL",
            "subSet":"Fish Shape",
            "notation": ["L' U' L U' L' U L U L F' L' F","y2 R' U' R U' R' U R U R B' R' B"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "37",
            "set": "OLL",
            "subSet":"Fish Shape",
            "notation": ["F R' F' R U R U' R'","F R U' R' U' R U R' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "38",
            "set": "OLL",
            "subSet":"W Shape",
            "notation": ["R U R' U R U' R' U' R' F R F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "39",
            "set": "OLL",
            "subSet":"Big Lightning Bolt",
            "notation": ["L F' L' U' L U F U' L'","y2 R B' R' U' R U B U' R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "40",
            "set": "OLL",
            "subSet":"Big Lightning Bolt",
            "notation": ["R' F R U R' U' F' U R"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "41",
            "set": "OLL",
            "subSet":"Awkward Shape",
            "notation": ["R U R' U R U2 R' F R U R' U' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "42",
            "set": "OLL",
            "subSet":"Awkward Shape",
            "notation": ["R' U' R U' R' U2 R F R U R' U' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "43",
            "set": "OLL",
            "subSet":"P Shape",
            "notation": ["F' U' L' U L F","R' U' F R' F' R U R"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "44",
            "set": "OLL",
            "subSet":"P Shape",
            "notation": ["F U R U' R' F'","y2 f R U R' U' f'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "45",
            "set": "OLL",
            "subSet":"T Shape",
            "notation": ["F R U R' U' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "46",
            "set": "OLL",
            "subSet":"C Shape",
            "notation": ["R' U' R' F R F' U R"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "47",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["R' U' R' F R F' R' F R F' U R","F' L' U' L U L' U' L U F","y' F U R U' R' F' R U R' U R U2 R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "48",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["F R U R' U' R U R' U' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "49",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["r U' r2 U r2 U r2 U' r"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "50",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["r' U r2 U' r2 U' r2 U r'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "51",
            "set": "OLL",
            "subSet":"I Shape",
            "notation": ["F U R U' R' U R U' R' F'","y2 f R U R' U' R U R' U' f'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "52",
            "set": "OLL",
            "subSet":"I Shape",
            "notation": ["R U R' U R U' B U' B' R'","y2 R' F' U' F U' R U R' U R","R U R' U R U' y R U' R' F'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "53",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["l' U2 L U L' U' L U L' U l","y2 r' U2 R U R' U' R U R' U r","y r' U' R U' R' U R U' R' U2 r"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "54",
            "set": "OLL",
            "subSet":"Small L Shape",
            "notation": ["r U2 R' U' R U R' U' R U' r'","y r U R' U R U' R' U R U2 r'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "55",
            "set": "OLL",
            "subSet":"I Shape",
            "notation": ["R' F R U R U' R2 F' R2 U' R' U R U R'","R' F R U R U' R2 F' R2 U' R' U R U R'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "56",
            "set": "OLL",
            "subSet":"I Shape",
            "notation": ["r' U' r U' R' U R U' R' U R r' U r","r U r' U R U' R' U R U' R' r U' r'","r U r' U R U' R' U R U' M' U' r'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        {
            "name": "57",
            "set": "OLL",
            "subSet":"Corners Oriented",
            "notation": ["R U R' U' M' U R U' r'"],
            "defaultAlgorithm":0,
            "note":"",
            "beginner": false,
            "intermediate": false,
            "advanced": true,
            // "customPath": ""
        },
        { //                                  PLL
            "name": "Aa",
            "set": "PLL",
            "subSet":"Adjacent Corner Swap",
            "notation": ["x L2 D2 L' U' L D2 L' U L'","y' x' L' U L' D2 L U' L' D2 L2","y x R' U R' D2 R U' R' D2 R2","y2 x' R2 D2 R' U' R D2 R' U R'"],
            "defaultAlgorithm":0,
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
            "notation": ["x' L2 D2 L U L' D2 L U' L","y x L U' L D2 L' U L D2 L2","y2 x R2 D2 R U R' D2 R U' R","y' x' R U' R D2 R' U R D2 R2"],
            "defaultAlgorithm":0,
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
            "notation": ["x' L' U L D' L' U' L D L' U' L D' L' U L D","x' R U' R' D R U R' D' R U R' D R U' R' D'"],
            "defaultAlgorithm":0,
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
            "notation": ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"],
            "defaultAlgorithm":0,
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
            "notation": ["R2 U R' U R' U' R U' R2 U' D R' U R D'","R2 u R' U R' U' R u' R2 y' R' U R"],
            "defaultAlgorithm":0,
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
            "notation": ["R' U' R U D' R2 U R' U R U' R U' R2 D","y F' U' F R2 u R' U R U' R u' R2"],
            "defaultAlgorithm":0,
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
            "notation": ["R2 U' R U' R U R' U R2 U D' R U' R' D","y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2","R2 u' R U' R U R' u R2 y R U' R'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U' D R2 U' R U' R' U R' U R2 D'","R U R' y' R2 u' R U' R' U R' u R2"],
            "defaultAlgorithm":0,
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
            "notation": ["M2 U M2 U2 M2 U M2","M2 U' M2 U2 M2 U' M2"],
            "defaultAlgorithm":0,
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
            "notation": ["x R2 F R F' R U2 r' U r U2","y2 L' U' L F L' U' L U L F' L2 U L","y' R' U L' U2 R U' R' U2 R L"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' F' R U R' U' R' F R2 U' R'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'","z U R' D R2 U' R D' U R' D R2 U' R D'"],
            "defaultAlgorithm":0,
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
            "notation": ["R' U R U' R' F' U' F R U R' F R' F' R U' R","z D' R U' R2 D R' U D' R U' R2 D R' U"],
            "defaultAlgorithm":0,
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
            "notation": ["R U' R' U' R U R D R' U' R D' R' U2 R'","R U R' F' R U2 R' U2 R' F R U R U2 R'","y' L U2 L' U2 L F' L' U' L U L F L2"],
            "defaultAlgorithm":0,
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
            "notation": ["R2 F R U R U' R' F' R U2 R' U2 R","y' R' U2 R U2 R' F R U R' U' R' F' R2","R' U2 R' D' R U' R' D R U R U' R' U' R"],
            "defaultAlgorithm":0,
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
            "notation": ["R U R' U' R' F R2 U' R' U' R U R' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["R U' R U R U R U' R' U' R2","R U' R U R U R U' R' U' R2","y2 R2 U' R' U' R U R U R U' R"],
            "defaultAlgorithm":0,
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
            "notation": ["R2 U R U R' U' R' U' R' U R","R2 U R U R' U' R' U' R' U R'","y2 R' U R' U' R' U' R' U R U R2","y2 R' U R' U' R3 U' R' U R U R2"],
            "defaultAlgorithm":0,
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
            "notation": ["R' U R' U' y R' F' R2 U' R' U R' F R F","R' U R' U' R D' R' D R' U D' R2 U' R2 D R2","z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
            "R U2 R' D R U' R U' R U R2 D R' U' R D2","x' R' F R F' U R U2 R' U' R U' R' U2 R U R' U'"],
            "defaultAlgorithm":0,
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
            "notation": ["F R U' R' U' R U R' F' R U R' U' R' F R F'","F R' F R2 U' R' U' R U R' F' R U R' U' F'"],
            "defaultAlgorithm":0,
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
            "notation": ["M' U M2 U M2 U M' U2 M2","y M' U' M2 U' M2 U' M' U2 M2","y M2 U M2 U M' U2 M2 U2 M'","M2 U' M2 U' M' U2 M2 U2 M'"],
            "defaultAlgorithm":0,
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

            notationBasic = "<p class='alg' id='notation" + universalID + "' onclick='switchAlgorithm(" + i + ", \"notation\" + " + universalID + ")'>" +
            (Number(currentAlgorithm.defaultAlgorithm) + 1) + ": " + currentAlgorithm.notation[currentAlgorithm.defaultAlgorithm] + "</p>";

            if (currentAlgorithm.note) {
                notation = "<td><div class='tooltip'>" + notationBasic + "<span class='tooltiptext'>" + currentAlgorithm.note + "</span></div></td>";
            } else {
                notation = "<td><div>" + notationBasic + "</div></td>";
            }

            if (currentAlgorithm.customPath) {
                imagePath = currentAlgorithm.customPath;
            } else {
                imagePath = "images/algorithms/" + currentAlgorithm.set + "/" + currentAlgorithm.name + ".png";
            }

            returnAlgorithms += "<tr>"+
            "<td><p id='alg" + universalID + "' class='alg' onclick='learnAlgorithms(" + universalID + ")'>" + currentAlgorithm.name + "</p></td>"+
            "<td><div class='alg'><img src='" + imagePath + "'></image></td>"+notation+
            "<td><p class='alg'>" + currentAlgorithm.subSet + "</p></td>"+
            "</tr>";

            universalID ++; // this is the id for each algorithm. there will only be one (or zero) algorithms with any given universalID
        }
    }

    returnAlgorithms += "</table>";
    // window.alert(returnAlgorithms); // used for testing purposes
    document.getElementById(set).innerHTML = returnAlgorithms;
}

function switchAlgorithm(algorithmIndex, algorithmID) {
    switchAlgorithmJSON = algorithms.algorithms[algorithmIndex].notation;
    switchAlgorithmElement = document.getElementById(algorithmID);
    switchCurrentAlgorithm = switchAlgorithmElement.innerHTML.slice(3);

    for (let i in switchAlgorithmJSON) {
        if (switchCurrentAlgorithm == switchAlgorithmJSON[i]) {
            if (switchAlgorithmJSON[Number(i) + 1]) { // checking if this is the last listed algorithm
                switchAlgorithmElement.innerHTML = Number(i) + 2 + ": " + switchAlgorithmJSON[(Number(i) + 1)];
            } else {
                switchAlgorithmElement.innerHTML = "1: " + switchAlgorithmJSON[0];
            }
        }
    }
}

function learnAlgorithms(algorithmID) {
    // window.alert("I was clicked by algorithm " + algorithmID);
    learnedAlg = document.getElementById("alg" + algorithmID);
    

    if (learnedAlg.style.background == "chartreuse") {
        learnedAlg.style.background = "";
    } else {
        learnedAlg.style.background = "chartreuse";
    }
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