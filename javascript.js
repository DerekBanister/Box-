document.getElementById("button2").addEventListener(
    "click", 
    function(){
        document.getElementById("box").style.backgroundColor = "Blue";
    }
);
document.getElementById("button1").addEventListener(
    "click",
    function (){
        document.getElementById("box").style.height = "500px"
        
    }
)
document.getElementById("button3").addEventListener(
    "click",
    function (){
        document.getElementById("box").style.opacity = "50%"
    }
)
document.getElementById("button4").addEventListener(
    "click",
    function (){
        document.getElementById("box").style.height = "150px"
        document.getElementById("box").style.backgroundColor = "Orange"
        document.getElementById("box").style.opacity = "100%"
        document.getElementById("box").style.transform = 'rotate(90deg)'
    }
)
document.getElementById("button5").addEventListener(
    "click",
    function (){
        document.getElementById("box").style.transform = 'rotate(45deg)'
    }
)