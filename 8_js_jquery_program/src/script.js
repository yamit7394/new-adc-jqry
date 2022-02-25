var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
        
function appear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = (Math.random() * 200) + 100;
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    $("#shape").css("backgroundColor",getRandomColor());
    $("#shape").css("width",width + "px");
    $("#shape").css("height",width + "px");
    $("#shape").css("top",top + "px");
    $("#shape").css("left",left + "px");
    $("#shape").css("display","block");
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(appear, Math.random() * 2000);
}
        
appearAfterDelay();
document.getElementById("shape").onclick=function() {   
    $("#shape").css("display","none");
    var end=new Date().getTime();
    var timeTaken=(end-start)/1000;
    $("#timeTaken").html(timeTaken+"s");
    appearAfterDelay();
}