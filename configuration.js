var configuration = {
    "serverUrl":"http://localhost:8983/solr/songs/select?"
};

function  search(){
    var serverUrl = configuration["serverUrl"];
    var query = "q=%2B"+document.getElementById("queryId").value;
    console.log(query.indexOf(/\s/g));
    var defType = "defType=edismax";
    var rows = "rows="+parseInt("900");
    var join = "&";
    query = query.trim();
    query = query.replace(/\s/g," %2B");
    console.log(query);
    var url = serverUrl+defType+join+query+join+rows;
    console.log(url);
    var xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET",url,true);
    if (!xmlRequest) {
      alert("CORS not supported");
    }
    xmlRequest.onload = function() {
      displayResult(xmlRequest.responseText);
    };
    xmlRequest.send();
    var response = xmlRequest.responseText;
    document.getElementById("searchResults").innerHTML = response;
}

function displayResult(response) {
  document.getElementById("searchResults").innerHTML = response;
  var data = JSON.parse(response);
  var resultHtml = parseResults(data);
  document.getElementById("searchResults").innerHTML = resultHtml;
}

function parseResults(resultJson) {
  var docs = resultJson["response"]["docs"];
  var numFound = '<div><p>'+ parseInt(resultJson["response"]["numFound"])+' search results found</p></div>';
  document.getElementById("numFound").innerHTML = numFound;
  var html = [];
  for (var i = 0; i < docs.length; i++) {
      var doc = docs[i];
      var songTitle = "ගීතය &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"+doc["title"];
      var artist = "ගායනය&nbsp;&nbsp;&nbsp;" + doc["artist"] ;
      JSON.stringify(doc["song"],'\n','<br>') ;
      var song = "<br>" +doc["song"];
      var title = '<span>' + 
                  songTitle + '</span>';
      var displayHtml = '<div><p style="font-size: 25px;"><span class="dataset-title">' + title + 
                '</span><br><span class="dataset-author">' + artist +'</p><p></span><br><span style="white-space: pre-line" class="dataset-author">' + song +
                  '</span></p></div>';
      html.push(displayHtml);
  }
  if (html.length) {
      return html.join("\n");
  }
  else {
      return "<p></p>";
  }
}