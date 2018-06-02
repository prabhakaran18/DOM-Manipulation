
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function byTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    document.getElementById('block1').style.background = "blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize = "xx-large";
}

function changeFontColor() {
    document.getElementById("block3").onmouseover = function() {mouseover()};
    function mouseover() {
        document.getElementById("block3").style.color = "green";
    }
}

function revertColor() {
    document.getElementById("block3").onmouseout = function() {mouseout()};   
        function mouseout() {
            document.getElementById("block3").style.color = "black";
        }
}

function hide() {
    document.getElementById("block4").style.visibility = "hidden";
}

function changeBackColor() {
    for(var i=0;i<3;i++)
        {
            document.getElementsByClassName("box1")[i].style.backgroundColor= "green"; 
        } 
}
function changeBackColor1() {
            document.getElementsByClassName("box2")[0].style.backgroundColor= "blue";
            document.getElementsByClassName("box2")[1].style.backgroundColor= "blue";
            document.getElementsByClassName("box2")[2].style.backgroundColor= "blue"; 
}
function numbersOnly(evt)
{
    var char=evt.keyCode;
    if(char<48 || char >57)
        return false;
    return true;
}
function addAdjacent() {
    document.getElementById("para2").innerHTML+="<br>Hello...I am John</br>";
}

function removePara() {
    var e=document.getElementById("para3");
    var child=document.getElementById("para4");
   e.parentNode.removeChild(child);

}
function animatePara() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }}
}
function func()
{
    var x=document.getElementById('get');
    x.style.background="green";
}
function camel()
{
    var x=document.getElementById('inputBox3');
    x.value=x.value.charAt(0).toUpperCase() + x.value.slice(1);
}
function upper1()
{
    var x=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
}
function upper()
{
    var x=document.getElementById('inputBox1');
    x.value=x.value.toUpperCase();
}
