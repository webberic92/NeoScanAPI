/**
 * 
 */


function myAddress() {
  var x = document.getElementById("myAddress").value;
  document.getElementById("displayAddress").innerHTML = x;
  document.getElementById("youChose").innerHTML = "You chose the wallet address of ...";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
      console.log(this.responseText);
      //invoking myFucntion below.
//      myFunction(this);

      
    }
    
      
    
    else if( this.readyState == 4 && this.status == 400) {
          document.getElementById("demo").innerHTML = "That is an incorrect wallet address format...."
    
     }
    
    
  };
  xhttp.open("GET", "https://api.neoscan.io/api/main_net/v1/get_balance/" + x, true);
  xhttp.send();
  var y = document.getElementById("horizontalLine");
  y.style.display = "block";
   
}

 
function clearAddress() {
	  document.getElementById("displayAddress").innerHTML = "Address Cleared, Please enter another...";
	  document.getElementById("youChose").innerHTML = "";
	  document.getElementById("demo").innerHTML = "";

	  var x = document.getElementById("myAddress").value;
	  x=null;
	  
	  var y = document.getElementById("horizontalLine");
	  y.style.display = "none";
	}


//function myFunction(xml) {
//	  var i;
//	  var xmlDoc = xml.responseXML;
//	  var table="<tr><th>Asset ID</th><th>Amount</th></tr>";
//	  var z = xmlDoc.getElementsByTagName("balance");
//	  for (i = 0; i <z.length; i++) { 
//	    table += "<tr><td>" +
//	    z[i].getElementsByTagName("asset")[0].childNodes[0].nodeValue +
//	    "</td><td>" +
//	    z[i].getElementsByTagName("amount")[0].childNodes[0].nodeValue +
//	    "</td></tr>";
//	  }
//	  document.getElementById("demoTable").innerHTML = table;
//	}