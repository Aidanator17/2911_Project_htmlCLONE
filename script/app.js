let note1 = {
    title: "note one",
    body: "Write Notes here",
};

let notetemplate = {
    title: "",
    body: "",
};

let notesArray = [note1];

const drkbtn = document.querySelector(".Dark-button");
const bcknotes = document.querySelector(".notes");
const bcktext = document.querySelector(".textbox");
const dkfont = document.querySelector(".container");

function dark2light2dark(){
    //console.log(event);
    if(drkbtn.textContent == "Light Theme"){
        changetolight();
    }
    else{
        changetodark();
    }

}

function changetodark(){
    console.log("changed 2 dark");
    drkbtn.textContent = "Light Theme";
    bcknotes.style.backgroundColor = "#2979A4";
    bcktext.style.backgroundColor = "#213677";
    dkfont.style.color = "black";

}

function changetolight(){
    console.log("changed 2 light");
    drkbtn.textContent = "Dark Theme";
    bcknotes.style.backgroundColor = "#F9E0BD";
    bcktext.style.backgroundColor = "#F6C177";
    dkfont.style.color = "#555169";
    
}

const cnclbtn = document.querySelector(".cancel-button");
let txtara = document.querySelector(".note");
const svebtn = document.querySelector(".save-button");

function cancel(){
    cnclbtn.style.display = "none";
    txtara.style.display = "none";
    svebtn.style.display = "none";
    

}

const nwbtn = document.querySelector(".new-button");

function New_Note(){
    cnclbtn.style.display = "inline-block";
    txtara.style.display = "inline-block";
    svebtn.style.display = "inline-block";
    console.log(txtara);
    txtara.value = "Write Notes here";

}


let mynotes = document.querySelector("#listnotes");

function save(){
    alert("You are trying to save your note.");
    let title = prompt("Please enter the note's title");

    const newnte = Object.create(notetemplate);
    newnte.title = title;
    newnte.body = txtara.value;

    notesArray.push(newnte);
    //console.log(notesArray);


    let newli = document.createElement("li");
    mynotes.appendChild(newli)
    newli.textContent = newnte.title;
    txtara.value = newnte.body;

}

const nt1 = document.querySelector("#listnotes");

function list_search(event){
    let temp = event.target.textContent;
    
    for(let ne of notesArray){
        
        if(ne.title == temp){
            txtara.value = ne.body;
        }
    }

    
    
}


drkbtn.addEventListener("click",dark2light2dark);
cnclbtn.addEventListener("click",cancel);
nwbtn.addEventListener("click",New_Note);
svebtn.addEventListener("click",save);
nt1.addEventListener("click",list_search);

