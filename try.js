//first attempt

let data = {
    "username": "OlegShvets",
    "password": "ghd22df"
}

sendRequest (data, callback) {
		let xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
            	this.loginView.unsubscribe();
            	//what is location ?
                window.location = '/';
            } else if (xhr.readyState === 4) {
                callback();
            }
        });

        xhr.open('POST', 'http://192.168.210.128:8080/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data); 
        console.log(xhr.responseText);
	}



//second attempt: jQuery

var apiurl = 'http://192.168.210.128:8080/login';
    var a = new XMLHttpRequest();
    
    function SaveLead() {
         $.ajax({

     	beforeSend: function (xhr) {
    	xhr.setRequestHeader ("Authorization", "Basic " + btoa("OlegShvets:ghd22df"));
		},   

        type: 'POST',
        url: apiurl,
        ContentType: "application/json; charset=utf-8",
        data: data,
        crossOrigin: true,
        crossDomain: true,
        dataType: "json",
        cache: false,
        complete: function (res) {
            alert("Data Added Successfully");
        },
        error: function (xhr) {
            alert(a.responseText);
        }
    })

}
	

    SaveLead();


//third attempt


makeCorsRequest();

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://192.168.210.128:8080/login';

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    alert('Response from CORS request to ' + text);
  };

  xhr.onerror = function() {
    alert(xhr.getAllResponseHeaders());
  };

  xhr.send(Lead);
}