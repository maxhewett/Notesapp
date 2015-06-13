// JavaScript Document
function showsub(){
	texthide();
	subbar();
	movecont();
}
function subbar(){
var subbar = document.getElementById("subbar");
subbar.style.height == "10vh" ? subbar.style.height = "0" : subbar.style.height = "10vh";
}
function texthide(){
var texthide = document.getElementById("texthide");
texthide.style.marginTop == "2.5vh" ? texthide.style.marginTop = "-8vh" : texthide.style.marginTop = "2.5vh";
}
function movecont(){
	var container = document.getElementById("container");
container.style.paddingTop == "25vh" ? container.style.paddingTop = "15vh" : container.style.paddingTop = "25vh";
}
//new
function newNote1(){
	document.getElementById("ph1").innerHTML = "<input id='title2' rows='1' cols='50' placeholder='Title'><a onclick='remove1();'>-</a></input><textarea id='note2' rows='1' cols='50' placeholder='Start Typing...'></textarea>";
	document.getElementById("btn").innerHTML = "<button onclick='newNote2(); loadNotes();'>New Note</button>";
}
function newNote2(){
	document.getElementById("ph2").innerHTML = "<input id='title3' rows='1' cols='50' placeholder='Title'><a onclick='remove2();'>-</a></input><textarea id='note3' rows='1' cols='50' placeholder='Start Typing...'></textarea>";
	document.getElementById("btn").innerHTML = "<button onclick='newNote3(); loadNotes();'>New Note</button>";
}
function newNote3(){
	document.getElementById("ph3").innerHTML = "<input id='title4' rows='1' cols='50' placeholder='Title'><a onclick='remove3();'>-</a></input><textarea id='note4' rows='1' cols='50' placeholder='Start Typing...'></textarea>";
	document.getElementById("btn").innerHTML = "<button onclick='newNote4(); loadNotes();'>New Note</button>";
}
function newNote4(){
	document.getElementById("ph4").innerHTML = "<input id='title5' rows='1' cols='50' placeholder='Title'><a onclick='remove4();'>-</a></input><textarea id='note5' rows='1' cols='50' placeholder='Start Typing...'></textarea>";
	document.getElementById("btn").innerHTML = "<p>You don't really need that many notes do you?!</p>";
}
//remove functions
function remove1(){
	document.getElementById("ph1").innerHTML = null;
	document.getElementById("btn").innerHTML = "<button onclick='newNote1(); loadNotes();'>New Note</button>";
}
function remove2(){
	document.getElementById("ph2").innerHTML = null;
	document.getElementById("btn").innerHTML = "<button onclick='newNote2(); loadNotes();'>New Note</button>";
}
function remove3(){
	document.getElementById("ph3").innerHTML = null;
	document.getElementById("btn").innerHTML = "<button onclick='newNote3(); loadNotes();'>New Note</button>";
}
function remove4(){
	document.getElementById("ph4").innerHTML = null;
	document.getElementById("btn").innerHTML = "<button onclick='newNote4(); loadNotes();'>New Note</button>";
}
//colours
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}
function blue(){
window.localStorage.colour = "blue";
}
function yellow(){
window.localStorage.colour = "yellow";
}
function grey(){
window.localStorage.colour = "grey";
}
function whatColour(){
	if (localStorage.getItem("colour") === "yellow") {
  		swapStyleSheet('CSS/colour1.css');
	} else { 
		if(localStorage.getItem("colour") === "blue") {
			swapStyleSheet('CSS/colour2.css');
		}
	}
}
//SAVING

//var save;

//function savepage() {
//    save = setTimeout(saveContent(), 10000);
//}
function loadNotes(){
    //1
    document.getElementById("title1").value = localStorage.getItem("title1");
    document.getElementById("note1").value = localStorage.getItem("note1");
    //2
    document.getElementById("title2").value = localStorage.getItem("title2");
    document.getElementById("note2").value = localStorage.getItem("note2");
    //3
    document.getElementById("title3").value = localStorage.getItem("title3");
    document.getElementById("note3").value = localStorage.getItem("note3");
    //4
    document.getElementById("title4").value = localStorage.getItem("title4");
    document.getElementById("note4").value = localStorage.getItem("note4");
    //5
    document.getElementById("title5").value = localStorage.getItem("title5");
    document.getElementById("note5").value = localStorage.getItem("note5");
}

function saveContent(){
    saveNote1();
    saveNote2();
    saveNote3();
    saveNote4();
    saveNote5();
}

function saveNote1(){
    //title
    var title1 = document.getElementById("title1").value ;
    localStorage.setItem("title1", title1) ;
    console.log("note 1's title saved");
    //note
    var note1 = document.getElementById("note1").value ;
    localStorage.setItem("note1", note1) ;
    console.log("note 1 saved")
}
function saveNote2(){
    //title
    var title2 = document.getElementById("title2").value ;
    localStorage.setItem("title2", title2) ;
    console.log("note 2's title saved");
    //note
    var note2 = document.getElementById("note2").value ;
    localStorage.setItem("note2", note2) ;
    console.log("note 2 saved")
}
function saveNote3(){
    //title
    var title3 = document.getElementById("title3").value ;
    localStorage.setItem("title3", title3) ;
    console.log("note 3's title saved");
    //note
    var note3 = document.getElementById("note3").value ;
    localStorage.setItem("note3", note3) ;
    console.log("note 3 saved")
}
function saveNote4(){
    //title
    var title4 = document.getElementById("title4").value ;
    localStorage.setItem("title4", title4) ;
    console.log("note 4's title saved");
    //note
    var note4 = document.getElementById("note4").value ;
    localStorage.setItem("note4", note4) ;
    console.log("note 4 saved")
}
function saveNote5(){
    //title
    var title5 = document.getElementById("title5").value ;
    localStorage.setItem("title5", title5) ;
    console.log("note 5's title saved");
    //note
    var note5 = document.getElementById("note5").value ;
    localStorage.setItem("note5", note5) ;
    console.log("note 5 saved")
}






