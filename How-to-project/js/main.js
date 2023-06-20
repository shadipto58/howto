




function myFunction(x) {
  x.classList.toggle("change");
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
   

    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/****** Tabs ******/
/*
function openCity(evt, cityName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
 
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}*/


/*const tablinks = document.getElementsByClassName('tablinks');

for(const tab of tablinks){
	tab.addEventListener('click', function(){
		const tabcontents = document.getElementsByClassName('tabcontent');
		for(const tabcontents of tabcontent){
			tabcontents.style.display = 'block';
			
		}
	});
}*/

/*********************
      Tab Headers
**********************/

/*function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();*/

/*********************
      Tab Headers
**********************/

const tab = document.getElementById('home');
	tab.addEventListener('click', function(){
		const home = document.getElementById('Home');
		
		if(home.style.display ==='none'){
			home.style.display = 'block';
		}
		else{
			home.style.display = 'none';
		}
	});
	
const page2 = document.getElementById('news');
	page2.addEventListener('click', function(){
		const home = document.getElementById('News');
		
		if(home.style.display ==='none'){
			home.style.display = 'block';

		}
		else{
			home.style.display = 'none';
		}
		return false;
	});

const page3 = document.getElementById('contact');
	page3.addEventListener('click', function(){
		const home = document.getElementById('Contact');
		
		if(home.style.display ==='none'){
			home.style.display = 'block';
		}
		else{
			home.style.display = 'none';
		}
	});

const page4 = document.getElementById('about');
	page4.addEventListener('click', function(){
		const home = document.getElementById('About');
		
		if(home.style.display ==='none'){
			home.style.display = 'block';
		}
		else{
			home.style.display = 'none';
		}
	});