function accordion_toggle(section)
{console.log("open")
console.log(section)

var selectedSection = document.getElementById(section);
if(selectedSection.style.display == "block")
  {
      selectedSection.style.display = "none";
  }
  else
  {
    //hide everything
    var allSections = document.getElementsByClassName("accordion-section");
    for (var i=0; i<allSections.length; i++){
      allSections[i].style.display = "none";

    }
      
    
    selectedSection.style.display = "block";
  }

}
 
