var nav;
var width;
var flexContainers;
var hasFocus = false;

function init() {
    nav = document.getElementsByTagName('nav')[0];
    width = window.innerWidth;
    
    flexContainers = document.getElementsByClassName('flex-container');
    
    nav.addEventListener("focus", function() {
        if(width < 1050 && hasFocus == false)
        {
            document.getElementsByTagName('body')[0].style.marginLeft = "200px";
            nav.style.marginLeft = "200px";
            document.getElementsByTagName("figure")[0].style.marginLeft = "200px";
            document.getElementsByTagName('ul')[0].style.width = "200px";
            hasFocus = true;
            document.activeElement.blur();
        }
        else if(width < 1050 && hasFocus == true)
        {
            document.getElementsByTagName('body')[0].style.marginLeft = "0px";
            nav.style.marginLeft = "0px";
            document.getElementsByTagName("figure")[0].style.marginLeft = "0px";
            document.getElementsByTagName('ul')[0].style.width = "0px";
            hasFocus = false;
            document.activeElement.blur();
        }
    });
    
    document.getElementById('dropdown-container').addEventListener("focus", function() {
            if(width < 1050) {
                document.getElementById('dropdown').style.heigth = "200px";
            }
            
        });
    
    
    window.addEventListener("resize", function() {
        document.getElementsByTagName('body')[0].style.marginLeft = "0px";
        nav.style.marginLeft = "0px";
        document.getElementsByTagName("figure")[0].style.marginLeft = "0px";
        document.getElementsByTagName('ul')[0].width = "0px";
    });
}

function getWindowWidth() {
    width = window.innerWidth;
}

window.onload = init;
window.onresize = getWindowWidth;



