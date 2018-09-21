// This is the js code for assignment 1
var appID = "b3023b39";
var appKey = "004db4860b0f19250fd50026cbf4057d";

var searcher = new CompoundSearch("https://beta.openphacts.org/2.1", appID, appKey);  
var callback=function(success, status, response){
    var classMembersResult = searcher.parseCompoundClassMembersResponse(response);
    alert(response);
    $("#hello").append(response);
};
searcher.compoundClassMembers('http://purl.obolibrary.org/obo/CHEBI_24431', 1, 20, null, null, callback);