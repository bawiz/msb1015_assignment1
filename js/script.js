// This is the js code for assignment 1
var appID = "b3023b39";
var appKey = "004db4860b0f19250fd50026cbf4057d";

var searcher = new ConceptWikiSearch("https://beta.openphacts.org/2.1", appID, appKey);  
var callback=function(success, status, response){  
    searcher.parseResponse(response);
    alert(response);
    $("#hello").append(response);
};  
// success is 'true' or 'false', status is the http status code, response is the raw result which the parser function accepts  
// response will be null in the case of errors  
// limit to 20 results, species human (branch 4), with type set to compounds (uuid 07a800....)  
searcher.byTag('Aspirin', '20', '4', '07a84994-e464-4bbf-812a-a4b96fa3d197', callback);