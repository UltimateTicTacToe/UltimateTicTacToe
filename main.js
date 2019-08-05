const largeTTC = document.getElementById("largeTTC");

const topLeftSection = document.getElementById("top-left-section");
const topMiddleSection = document.getElementById("top-middle-section");
const topRightSection = document.getElementById("top-right-section");
const middleLeftSection = document.getElementById("middle-left-section");
const middleMiddleSection = document.getElementById("middle-middle-section");
const middleRightSection = document.getElementById("middle-right-section");
const BottomLeftSection = document.getElementById("bottom-left-section");
const BottomMiddleSection = document.getElementById("bottom-middle-section");
const BottomRightSection = document.getElementById("bottom-right-section");

const whosTurn = document.getElementById("whos-turn");
let sectionText = document.getElementById("which-section");
let turn = "X";
let box;
let nextSection = "";

let gameStyle = "normal";
let conquest = false;

function instructions(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("instructions-container").style.display = "block";
}

function returnHome(){
    document.getElementById("menu").style.display = "table";
    document.getElementById("instructions-container").style.display = "none";
}

function startGame(gameStyle){
    if(gameStyle == "conquest"){
        conquest = true;
        document.getElementById("conquest-indicator").style.display = "inline-block";
    }
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function whichBox(nextSection){
    if(nextSection == "tl"){
        return "Top Left Section";
    }else if (nextSection == "tm"){
        return "Top Middle Section";
    }else if (nextSection == "tr"){
        return "Top Right Section";
    }else if (nextSection == "ml"){
        return "Middle Left Section";
    }else if (nextSection == "mm"){
        return "Center Section";
    }else if (nextSection == "mr"){
        return "Middle Right Section";
    }else if (nextSection == "bl"){
        return "Bottom Left Section";
    }else if (nextSection == "bm"){
        return "Bottom Middle Section";
    }else if (nextSection == "br"){
        return "Bottom Right Section";
    }
}

function threeInARow(id, turn){
    if(document.getElementById(id.substring(0,2)).innerHTML == "" || conquest == true){
        //Top Left Section
        if(id.substring(2,4) == "tl"){
            if(document.getElementById(id.substring(0,2)+"tm").innerHTML == turn && document.getElementById(id.substring(0,2)+"tr").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"ml").innerHTML == turn && document.getElementById(id.substring(0,2)+"bl").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }
        }
        //Top Middle Section
        else if(id.substring(2,4) == "tm"){
            if(document.getElementById(id.substring(0,2)+"tl").innerHTML == turn && document.getElementById(id.substring(0,2)+"tr").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"bm").innerHTML == turn){
                return true;
            }
        }
        //Top Right Section
        else if(id.substring(2,4) == "tr"){
            if(document.getElementById(id.substring(0,2)+"tm").innerHTML == turn && document.getElementById(id.substring(0,2)+"tl").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mr").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"bl").innerHTML == turn){
                return true;
            }
        }
        //Middle Left Section
        else if(id.substring(2,4) == "ml"){
            if(document.getElementById(id.substring(0,2)+"tl").innerHTML == turn && document.getElementById(id.substring(0,2)+"bl").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"mr").innerHTML == turn){
                return true;
            }
        }
        //Center Section
        else if(id.substring(2,4) == "mm"){
            if(document.getElementById(id.substring(0,2)+"ml").innerHTML == turn && document.getElementById(id.substring(0,2)+"mr").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"tm").innerHTML == turn && document.getElementById(id.substring(0,2)+"bm").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"tl").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"tr").innerHTML == turn && document.getElementById(id.substring(0,2)+"bl").innerHTML == turn){
                return true;
            }
        }
        //Middle Right Section
        else if(id.substring(2,4) == "mr"){
            if(document.getElementById(id.substring(0,2)+"tr").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"ml").innerHTML == turn){
                return true;
            }
        }
        //Bottom Left Section
        else if(id.substring(2,4) == "bl"){
            if(document.getElementById(id.substring(0,2)+"ml").innerHTML == turn && document.getElementById(id.substring(0,2)+"tl").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"bm").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"tr").innerHTML == turn){
                return true;
            }
        }
        //Bottom Middle Section
        else if(id.substring(2,4) == "bm"){
            if(document.getElementById(id.substring(0,2)+"bl").innerHTML == turn && document.getElementById(id.substring(0,2)+"br").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"tm").innerHTML == turn){
                return true;
            }
        }
        //Bottom Right Section
        else if(id.substring(2,4) == "br"){
            if(document.getElementById(id.substring(0,2)+"bl").innerHTML == turn && document.getElementById(id.substring(0,2)+"bm").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"tr").innerHTML == turn && document.getElementById(id.substring(0,2)+"mr").innerHTML == turn){
                return true;
            }else if(document.getElementById(id.substring(0,2)+"mm").innerHTML == turn && document.getElementById(id.substring(0,2)+"tl").innerHTML == turn){
                return true;
            }
        }
        return false;
    }
}

function checkWinner(id, turn){
    //Top Left Section
    if(id.substring(0,2) == "tl"){
        if(document.getElementById("tm").innerHTML == turn && document.getElementById("tr").innerHTML == turn){
            return true;
        }else if(document.getElementById("ml").innerHTML == turn && document.getElementById("bl").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }
    }
    //Top Middle Section
    else if(id.substring(0,2) == "tm"){
        if(document.getElementById("tl").innerHTML == turn && document.getElementById("tr").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("bm").innerHTML == turn){
            return true;
        }
    }
    //Top Right Section
    else if(id.substring(0,2) == "tr"){
        if(document.getElementById("tm").innerHTML == turn && document.getElementById("tl").innerHTML == turn){
            return true;
        }else if(document.getElementById("mr").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("bl").innerHTML == turn){
            return true;
        }
    }
    //Middle Left Section
    else if(id.substring(0,2) == "ml"){
        if(document.getElementById("tl").innerHTML == turn && document.getElementById("bl").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("mr").innerHTML == turn){
            return true;
        }
    }
    //Center Section
    else if(id.substring(0,2) == "mm"){
        if(document.getElementById("ml").innerHTML == turn && document.getElementById("mr").innerHTML == turn){
            return true;
        }else if(document.getElementById("tm").innerHTML == turn && document.getElementById("bm").innerHTML == turn){
            return true;
        }else if(document.getElementById("tl").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }else if(document.getElementById("tr").innerHTML == turn && document.getElementById("bl").innerHTML == turn){
            return true;
        }
    }
    //Middle Right Section
    else if(id.substring(0,2) == "mr"){
        if(document.getElementById("tr").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("ml").innerHTML == turn){
            return true;
        }
    }
    //Bottom Left Section
    else if(id.substring(0,2) == "bl"){
        if(document.getElementById("ml").innerHTML == turn && document.getElementById("tl").innerHTML == turn){
            return true;
        }else if(document.getElementById("bm").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("tr").innerHTML == turn){
            return true;
        }
    }
    //Bottom Middle Section
    else if(id.substring(0,2) == "bm"){
        if(document.getElementById("bl").innerHTML == turn && document.getElementById("br").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("tm").innerHTML == turn){
            return true;
        }
    }
    //Bottom Right Section
    else if(id.substring(0,2) == "br"){
        if(document.getElementById("bl").innerHTML == turn && document.getElementById("bm").innerHTML == turn){
            return true;
        }else if(document.getElementById("tr").innerHTML == turn && document.getElementById("mr").innerHTML == turn){
            return true;
        }else if(document.getElementById("mm").innerHTML == turn && document.getElementById("tl").innerHTML == turn){
            return true;
        }
    }
    return false;
}

function checkFull(id){
    //Section is full
    if(document.getElementById(id+"tl").innerHTML != "" && 
        document.getElementById(id+"tm").innerHTML != "" && 
        document.getElementById(id+"tr").innerHTML != "" && 
        document.getElementById(id+"ml").innerHTML != "" && 
        document.getElementById(id+"mm").innerHTML != "" && 
        document.getElementById(id+"mr").innerHTML != "" && 
        document.getElementById(id+"bl").innerHTML != "" && 
        document.getElementById(id+"bm").innerHTML != "" && 
        document.getElementById(id+"br").innerHTML != ""){
            return true;
    }
    //Section is NOT full
    return false;
}

function gotClicked(id){
    box = document.getElementById(id);
    if(box.innerHTML=="" && (nextSection == "" || nextSection == id.substring(0,2))){
        box.innerHTML = turn;
        
        if(threeInARow(id, turn)){
            document.getElementById(id.substring(0,2)).innerHTML = turn;
            if(checkWinner(id, turn)){
                document.getElementById("winner-text").innerHTML = turn + " WINS!";
                document.getElementById("restart-button").style.display = "block";
            }
        }

        if(turn == "X"){
            turn = "O";
        }else{
            turn ="X";
        } 
        whosTurn.innerHTML = turn;
        nextSection = id.substring(2,4);
        sectionText.innerHTML = whichBox(nextSection);
        
        if(checkFull(nextSection)){
            nextSection = "";
            sectionText.innerHTML = "Any Section!";
        }

    }else{
        alert("You can't go there. Please make a legal move.");
    }
}