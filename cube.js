var cube = ["W", "W", "W", "W", "W", "W", "W", "W", "W", "O", 
"O", "O", "O", "O", "O", "O", "O", "O", "G", "G", 
"G", "G", "G", "G", "G", "G", "G", "R", "R", "R", 
"R", "R", "R", "R", "R", "R", "B", "B", "B", "B", 
"B", "B", "B", "B", "B", "Y", "Y", "Y", "Y", "Y", 
"Y", "Y", "Y", "Y"];
var moveSet = "";
var inputMode = 0;
var toggleMoveButtonsCount = 0;
var tglLetters = 0;
var colorSetting = 0;
var colorArr = ["white", "orange", "green", "red", "blue", "yellow"];
var customColor = "";
var customColorNum = 0;
const faceOrder = ["Top", "Left", "Front", "Right", "Back", "Bottom"];
var endColorEntry = false;

function performMoves() {
    moveSet = document.getElementById("moveInput").value;
    document.getElementById("moveInput").value = "";
    if(inputMode % 2 == 0) {
        moveSet = moveSet.split(" ");
        for(let i = 0; i < moveSet.length; i++) {
            switch(moveSet[i]) {
                case "R":
                    r();
                    break;
                case "R'":
                    rPrime();
                    break;
                case "R2":
                    r2();
                    break;
                case "L":
                    l();
                    break;
                case "L'":
                    lPrime();
                    break;
                case "L2":
                    l2();
                    break;
                case "U":
                    u();
                    break;
                case "U'":
                    uPrime();
                    break;
                case "U2":
                    u2();
                    break;
                case "D":
                    d();
                    break;
                case "D'":
                    dPrime();
                    break;
                case "D2":
                    d2();
                    break;
                case "F":
                    f();
                    break;
                case "F'":
                    fPrime();
                    break;
                case "F2":
                    f2();
                    break;
                case "B":
                    b();
                    break;
                case "B'":
                    bPrime();
                    break;
                case "B2":
                    b2();
                    break;
                case "M":
                    m();
                    break;
                case "M'":
                    mPrime();
                    break;
                case "M2":
                    m2();
                    break;
                case "E":
                    e();
                    break;
                case "E'":
                    ePrime();
                    break;
                case "E2":
                    e2();
                    break;
                case "S":
                    s();
                    break;
                case "S'":
                    sPrime();
                    break;
                case "S2":
                    s2();
                    break;
                case "x":
                    x();
                    break;
                case "x'":
                    xPrime();
                    break;
                case "x2":
                    x2();
                    break;
                case "y":
                    y();
                    break;
                case "y'":
                    yPrime();
                    break;
                case "y2":
                    y2();
                    break;
                case "z":
                    z();
                    break;
                case "z'":
                    zPrime();
                    break;
                case "z2":
                    z2();
                    break;
            }
        }
    } else {
        var edgeMoves = moveSet.substring(0, moveSet.indexOf(" "));
        var cornerMoves = moveSet.substring(moveSet.indexOf(" "));
        
        for(let i = 0; i < edgeMoves.length; i++) {
            switch(edgeMoves[i]) {
                case "A":
                    eA();
                    break;
                case "C":
                    eC();
                    break;
                case "D":
                    edgeAlg();
                    break;
                case "E":
                    eE();
                    break;
                case "F":
                    eF();
                    break;
                case "G":
                    eG();
                    break;
                case "H":
                    eH();
                    break;
                case "I":
                    eI();
                    break;
                case "J":
                    eJ();
                    break;
                case "K":
                    eK();
                    break;
                case "L":
                    eL();
                    break;
                case "N":
                    eN();
                    break;
                case "O":
                    eO();
                    break;
                case "P":
                    eP();
                    break;
                case "Q":
                    eQ();
                    break;
                case "R":
                    eR();
                    break;
                case "S":
                    eS();
                    break;
                case "T":
                    eT();
                    break;
                case "U":
                    eU();
                    break;
                case "V":
                    eV();
                    break;
                case "W":
                    eW();
                    break;
                case "X":
                    eX();
                    break;
            }
        }
        
        if(edgeMoves.length % 2 == 1) {
            parity();
        }

        for(let i = 0; i < cornerMoves.length; i++) {
            switch(cornerMoves[i]) {
                case "B":
                    cB();
                    break;
                case "C":
                    cC();
                    break;
                case "D":
                    cD();
                    break;
                case "F":
                    cF();
                    break;
                case "G":
                    cG();
                    break;
                case "H":
                    cH();
                    break;
                case "I":
                    cI();
                    break;
                case "J":
                    cJ();
                    break;
                case "K":
                    cK();
                    break;
                case "L":
                    cL();
                    break;
                case "M":
                    cM();
                    break;
                case "N":
                    cN();
                    break;
                case "O":
                    cO();
                    break;
                case "P":
                    cP();
                    break;
                case "Q":
                    cQ();
                    break;
                case "R":
                    cR();
                    break;
                case "S":
                    cS();
                    break;
                case "T":
                    cT();
                    break;
                case "U":
                    cU();
                    break;
                case "V":
                    cornerAlg();
                    break;
                case "W":
                    cW();
                    break;
                case "X":
                    cX();
                    break;
            }
        }
    }
    updateCubeDisplay();
}

function updateCubeDisplay() {
    var backgroundColor = "black";
    for(let i = 0; i <= 53; i++) {
        if(tglLetters % 2 == 1) {
            document.getElementById(i.toString()).innerHTML = cube[i];
        }
        switch(cube[i]) {
            case "W":
                backgroundColor = colorArr[0];
                break;
            case "O":
                backgroundColor = colorArr[1];
                break;
            case "G":
                backgroundColor = colorArr[2];
                break;
            case "R":
                backgroundColor = colorArr[3];
                break;
            case "B":
                backgroundColor = colorArr[4];
                break;
            default:
                backgroundColor = colorArr[5];
                break;             
        }
        document.getElementById(i.toString()).style.backgroundColor = backgroundColor;
    }
}

function resetCube() {
    cube = ["W", "W", "W", "W", "W", "W", "W", "W", "W", "O", 
"O", "O", "O", "O", "O", "O", "O", "O", "G", "G", 
"G", "G", "G", "G", "G", "G", "G", "R", "R", "R", 
"R", "R", "R", "R", "R", "R", "B", "B", "B", "B", 
"B", "B", "B", "B", "B", "Y", "Y", "Y", "Y", "Y", 
"Y", "Y", "Y", "Y"];
    updateCubeDisplay();
}

function toggleMoveButtons() {
    toggleMoveButtonsCount++;
    if(toggleMoveButtonsCount % 2 == 1) {
        document.getElementById("tglMvBtns").innerHTML = "Move Buttons: OFF";
        document.getElementById("regMoves").style.visibility = "hidden";
        document.getElementById("blindMoves").style.visibility = "hidden";
    } else {
        document.getElementById("tglMvBtns").innerHTML = "Move Buttons: ON";
        document.getElementById("regMoves").style.visibility = "visible";
        document.getElementById("blindMoves").style.visibility = "visible";
    }
}

function toggleLetters() {
    tglLetters++;
    if(tglLetters % 2 == 1) {
        for(let i = 0; i <= 53; i++) {
            document.getElementById("tglLtrs").innerHTML = "Letters in Cube: ON";
            document.getElementById(i.toString()).innerHTML = cube[i];
        }
    } else {
        for(let i = 0; i <= 53; i++) {
            document.getElementById("tglLtrs").innerHTML = "Letters in Cube: OFF";
            document.getElementById(i.toString()).innerHTML = "";
        }
    }
}

function toggleInputMode() {
    inputMode++;
    if(inputMode % 2 == 1) {
        document.getElementById("tglInpMd").innerHTML = "Input Mode: Blindfolded";
    } else {
        document.getElementById("tglInpMd").innerHTML = "Input Mode: Normal";
    }
}

function changeColors() {
    colorSetting++;
    if(colorSetting % 5 == 0) {
        document.getElementById("colorSettings").style.visibility = "hidden";
        document.getElementById("ColorChanger").innerHTML = "Color Preset: Default"
        colorArr = ["white", "orange", "green", "red", "blue", "yellow"];
        updateCubeDisplay();
    } else if(colorSetting % 5 == 1) {
        document.getElementById("ColorChanger").innerHTML = "Color Preset: GAN 356 XS"
        colorArr = ["#E0E5E1", "#F27D33", "#4FE65B", "#E04742", "#017CF0", "#CBE636"];
        updateCubeDisplay();
    } else if(colorSetting % 5 == 2) {
        document.getElementById("ColorChanger").innerHTML = "Color Preset: Emeline"
        colorArr = ["white", "peru", "limeGreen", "fireBrick", "dodgerBlue", "gold"];
        updateCubeDisplay();
    } else if(colorSetting % 5 == 3) {
        document.getElementById("ColorChanger").innerHTML = "Color Preset: Rainbow";
        colorArr = ["#FD0100", "#F76915", "#EEDE04", "#A0D636", "#2FA236", "#333ED4"];
        updateCubeDisplay();
    } else if(colorSetting % 5 == 4) {
        customColorNum = 0;
        endColorEntry = false;
        document.getElementById("colorInputPrompt").innerHTML = "Enter the Top Face Color:";
        document.getElementById("colorSettings").style.visibility = "visible";
        document.getElementById("ColorChanger").innerHTML = "Color Preset: Custom";
    }
}

function customColors() {
    if(!endColorEntry) {
        customColor = document.getElementById("colorInput").value;
        document.getElementById("colorInput").value = "";
        colorArr[customColorNum] = customColor;
        updateCubeDisplay();
        if(customColorNum != 5) {
            customColorNum++;
            document.getElementById("colorInputPrompt").innerHTML = "Enter the " + faceOrder[customColorNum] + " Face Color:";
        } else {
            endColorEntry = true;
        }
    }
}

//Move Functions - - - - - - - - - - - - - - - - - - - - - - - -
var seqArr = [0, 1, 2];
function r() {
    seqArr = [2, 5, 8, 20, 23, 26, 47, 50, 53, 42, 39, 36, 28, 30, 34, 32, 29, 27, 33, 35];
    moveAssignment(seqArr);
}

function r2() {
    r();
    r();
}

function rPrime() {
    r2();
    r();
}

function l() {
    seqArr = [18, 6, 3, 0, 38, 41, 44, 51, 48, 45, 24, 21, 10, 12, 16, 14, 9, 15, 17, 11];
    moveAssignment(seqArr);
}

function l2() {
    l();
    l();
}

function lPrime() {
    l2();
    l();
}

function u() {
    seqArr = [20, 27, 28, 29, 36, 37, 38, 9, 10, 11, 18, 19, 7, 5, 1, 3, 8, 2, 0, 6];
    moveAssignment(seqArr);
}

function u2() {
    u();
    u();
}

function uPrime() {
    u2();
    u();
}

function d() {
    seqArr = [26, 25, 24, 17, 16, 15, 44, 43, 42, 35, 34, 33, 46, 48, 52, 50, 45, 51, 53, 47];
    moveAssignment(seqArr);
}

function d2() {
    d();
    d();
}

function dPrime() {
    d2();
    d();
}

function f() {
    seqArr = [8, 7, 6, 11, 14, 17, 45, 46, 47, 33, 30, 27, 19, 21, 25, 23, 18, 24, 26, 20];
    moveAssignment(seqArr);
}

function f2() {
    f();
    f();
}

function fPrime() {
    f2();
    f();
}

function b() {
    seqArr = [0, 1, 2, 29, 32, 35, 53, 52, 51, 15, 12, 9, 37, 39, 43, 41, 36, 42, 44, 38];
    moveAssignment(seqArr);
}

function b2() {
    b();
    b();
}

function bPrime() {
    b2();
    b();
}

function m() {
    seqArr = [1, 37, 40, 43, 52, 49, 46, 25, 22, 19, 7, 4];
    moveAssignment(seqArr);
}

function m2() {
    m();
    m();
}

function mPrime() {
    m2();
    m();
}

function e() {
    seqArr = [23, 22, 21, 14, 13, 12, 41, 40, 39, 32, 31, 30];
    moveAssignment(seqArr);
}

function e2() {
    e();
    e();
}

function ePrime() {
    e2();
    e();
}

function s() {
    seqArr = [5, 4, 3, 10, 13, 16, 48, 49, 50, 34, 31, 28];
    moveAssignment(seqArr);
}

function s2() {
    s();
    s();
}

function sPrime() {
    s2();
    s();
}

function x() {
    l();
    l();
    l();
    m();
    m();
    m();
    r();
}

function x2() {
    x();
    x();
}

function xPrime() {
    x2();
    x();
}

function y() {
    u();
    e();
    e();
    e();
    d();
    d();
    d();
}

function y2() {
    y();
    y();
}

function yPrime() {
    y2();
    y();
}

function z() {
    b();
    b();
    b();
    s();
    f();
}

function z2() {
    z();
    z();
}

function zPrime() {
    z2();
    z();
}

function moveAssignment(seqArr) {
    var j = 3;
    var temp = [cube[seqArr[0]], cube[seqArr[1]], cube[seqArr[2]]];
    for(let i = 0; i < 9; i++) {
        cube[seqArr[i]] = cube[seqArr[j]];
        j++;
        if(j > 11) {
            j = 0;
        }
    }
    cube[seqArr[9]] = temp[0];
    cube[seqArr[10]] = temp[1];
    cube[seqArr[11]] = temp[2];
    
    if(seqArr.length != 12) {
        temp.push(cube[seqArr[12]]);
        temp.push(cube[seqArr[16]]);
        for(let i = 12; i < 15; i++) {
            cube[seqArr[i]] = cube[seqArr[i + 1]];
        }
        cube[seqArr[15]] = temp[3];
        
        for(let i = 16; i < 19; i++) {
            cube[seqArr[i]] = cube[seqArr[i + 1]];
        }
        cube[seqArr[19]] = temp[4];
    }
}

//Blindfolded Functions - - - - - - - - - - - - - - - - - - - - - - -
function edgeAlg() {
    r();
    u();
    rPrime();
    uPrime();
    rPrime();
    f();
    r2();
    uPrime();
    rPrime();
    uPrime();
    r();
    u();
    rPrime();
    fPrime();
}

function cornerAlg() {
    r();
    uPrime();
    rPrime();
    uPrime();
    r();
    u();
    rPrime();
    fPrime();
    r();
    u();
    rPrime();
    uPrime();
    rPrime();
    f();
    r();
}

function parity() {
    r();
    u();
    rPrime();
    fPrime();
    r();
    u2();
    rPrime();
    u2();
    rPrime();
    f();
    r();
    u();
    r();
    u2();
    rPrime();
    uPrime();
}

//Edge Algorithms
function eA() {
    m2();
    dPrime();
    l2();
    edgeAlg();
    l2();
    d();
    m2();
}

function eC() {
    m2();
    d();
    l2();
    edgeAlg();
    l2();
    dPrime();
    m2();
}

function eE() {
    l();
    ePrime();
    l();
    edgeAlg();
    lPrime();
    e();
    lPrime();
}

function eF() {
    ePrime();
    l();
    edgeAlg();
    lPrime();
    e();
}

function eG() {
    lPrime();
    ePrime();
    l();
    edgeAlg();
    lPrime();
    e();
    l();
}

function eH() {
    lPrime();
    eG();
    l();
}

function eI() {
    m();
    dPrime();
    l2();
    edgeAlg();
    l2();
    d();
    mPrime();
}

function eJ() {
    e2();
    l();
    edgeAlg();
    lPrime();
    e2();
}

function eK() {
    dPrime();
    eG();
    d();
}

function eL() {
    lPrime();
    edgeAlg();
    l();
}

function eN() {
    e();
    l();
    edgeAlg();
    lPrime();
    ePrime();
}

function eO() {
    d2();
    eG();
    d2();
}

function eP() {
    ePrime();
    lPrime();
    edgeAlg();
    l();
    e();
}

function eQ() {
    mPrime();
    d();
    l2();
    edgeAlg();
    l2();
    dPrime();
    m();
}

function eR() {
    l();
    edgeAlg();
    lPrime();
}

function eS() {
    d();
    eG();
    dPrime();
}

function eT() {
    e2();
    lPrime();
    edgeAlg();
    l();
    e2();
}

function eU() {
    dPrime();
    l2();
    edgeAlg();
    l2();
    d();
}

function eV() {
    d2();
    l2();
    edgeAlg();
    l2();
    d2();
}

function eW() {
    d();
    l2();
    edgeAlg();
    l2();
    dPrime();
}

function eX() {
    l2();
    edgeAlg();
    l2();
}

function cB() {
    r2();
    cornerAlg();
    r2();
}

function cC() {
    f2();
    d();
    cornerAlg();
    dPrime();
    f2();
}

function cD() {
    f2();
    cornerAlg();
    f2();
}

function cF() {
    fPrime();
    d();
    cornerAlg();
    dPrime();
    f();
}

function cG() {
    fPrime();
    cornerAlg();
    f();
}

function cH() {
    dPrime();
    r();
    cornerAlg();
    rPrime();
    d();
}

function cI() {
    f();
    rPrime();
    cornerAlg();
    r();
    fPrime();
}

function cJ() {
    rPrime();
    cornerAlg();
    r();
}

function cK() {
    rPrime();
    dPrime();
    cornerAlg();
    d();
    r();
}

function cL() {
    d2();
    r();
    cornerAlg();
    rPrime();
    d2();
}

function cM() {
    f();
    cornerAlg();
    fPrime();
}

function cN() {
    rPrime();
    f();
    cornerAlg();
    fPrime();
    r();
}

function cO() {
    r2();
    f();
    cornerAlg();
    fPrime();
    r2();
}

function cP() {
    r();
    f();
    cornerAlg();
    fPrime();
    rPrime();
}

function cQ() {
    r();
    dPrime();
    cornerAlg();
    d();
    rPrime();
}

function cS() {
    d();
    fPrime();
    cornerAlg();
    f();
    dPrime();
}

function cT() {
    r();
    cornerAlg();
    rPrime();
}

function cU() {
    d();
    cornerAlg();
    dPrime();
}

function cW() {
    dPrime();
    cornerAlg();
    d();
}

function cX() {
    d2();
    cornerAlg();
    d2();
}