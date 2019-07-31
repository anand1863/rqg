

// 1. create a new XMLHttpRequest object -- an object like any other!


var quote = "";
function printQuote() {

  var myRequest = new XMLHttpRequest();
  var url = "https://quotes.rest/qod";
  var data;
// 2. open the request and pass the HTTP method name and the resource as parameters
myRequest.open('GET', url);
// 3. write a function that runs anytime the state of the AJAX request changes
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
       data = myRequest.response
        //console.log(data)

  var jsondata = JSON.parse(data);
  document.getElementById("demo").innerHTML = jsondata.contents.quotes[0].quote ;
  // console.log(jsondata.contents.quotes[0].quote)
  // console.log(jsondata.success.total)
  quote = jsondata.contents.quotes[0].quote;

 // console.log(quote)
    }

}
  myRequest.send();
  return quote
  //document.getElementById('reveal').style.display = 'none';

}

function tweet(){
  var quotetotweet = printQuote(); 
  
  var finalurl = "https://twitter.com/intent/tweet?text=" +quotetotweet ;
  window.open(finalurl);
  }
  