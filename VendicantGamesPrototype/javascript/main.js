var nav;
var width;
var flexContainers;
var hasFocus = false;
var dropdownHasFocus = false;
var dropdownContainer; 
var dropdown;
var body;
var hamburgGraphic;

function init() {
    body =  document.getElementsByTagName('body')[0];
    nav = document.getElementsByTagName('nav')[0];
    dropdownContainer = document.getElementById('dropdown-container');
    dropdown = document.getElementById('dropdown');
    hamburg = document.getElementsByTagName("figure")[0];
    width = window.innerWidth;
    
    nav.addEventListener("focus", function() {
        if(width < 950 && hasFocus == false)
        {
            body.style.marginLeft = "200px";
            nav.style.marginLeft = "200px";
            document.getElementsByTagName("figure")[0].style.marginLeft = "200px";
            document.getElementsByTagName('ul')[0].style.width = "200px";
            hasFocus = true;
            document.activeElement.blur();
        }
        else if(width < 950 && hasFocus == true)
        {
            body.style.marginLeft = "0px";
            nav.style.marginLeft = "0px";
            hamburg.style.marginLeft = "0px";
            document.getElementsByTagName('ul')[0].style.width = "0px";
            hasFocus = false;
            document.activeElement.blur();
        }
    });
    
    dropdownContainer.addEventListener('focus', function() {
        if(width < 950 && dropdownHasFocus == false) {
                dropdown.style.height = '125px';
                dropdownContainer.getElementsByTagName('span')[0].style.visibility = "visible";
                dropdownContainer.getElementsByTagName('span')[1].style.visibility = "hidden";
                dropdownHasFocus = true;
                document.activeElement.blur();
            }
            else if(width < 950 && dropdownHasFocus == true)
            {
                dropdown.style.height = '0px';
                dropdownContainer.getElementsByTagName('span')[1].style.visibility = "visible";
                dropdownContainer.getElementsByTagName('span')[0].style.visibility = 'hidden';
                dropdownHasFocus = false;
                document.activeElement.blur();
            }
    });
    
    window.addEventListener("resize", function() {
        document.getElementsByTagName('body')[0].style.marginLeft = "0px";
        nav.style.marginLeft = "0px";
        document.getElementsByTagName("figure")[0].style.marginLeft = "0px";
        dropdown.style.height = '0px';
        if(width < 950)
            document.getElementsByTagName('ul')[0].style.width = "0px";
        else if(width >= 950)
            document.getElementsByTagName('ul')[0].style.width = "95%";
    });
}

function getWindowWidth() {
    width = window.innerWidth;
}

window.onload = init;
window.onresize = getWindowWidth;



