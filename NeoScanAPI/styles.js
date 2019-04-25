/**
 * 
 */


function myAddress() {
	
	// Gets value for wallet address..
  var x = document.getElementById("myAddress").value;
  document.getElementById("displayAddress").innerHTML = x;
  document.getElementById("youChose").innerHTML = "You chose the wallet address of ...";
  
  //makes get request.
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML =
//      this.responseText;
    	//here we have json string, need to convert to objet
        let jsonObj=JSON.parse(this.responseText);

     // traverse the JSON object
      //WORKS
       var balance =jsonObj['balance'];     
       for (var i=0; i<balance.length; i++) {   
      document.getElementById('demo1').innerHTML += "<br>" +  JSON.stringify(balance[i].asset_symbol);
      }
      
       for (var i=0; i<balance.length; i++) {   
      document.getElementById('demo2').innerHTML += "<br>" + JSON.stringify(balance[i].amount);  
        
       }}
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
//	  document.getElementById("demo").innerHTML = "";
	  document.getElementById("demo1").innerHTML = "";
	  document.getElementById("demo2").innerHTML = "";

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