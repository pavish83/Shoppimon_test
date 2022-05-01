app.directive('sources', function() {
  return {
    restrict: "E",
    scope: {
      sources: "="
    },
    templateUrl: "components/sources.html",
    link:function(scope){
        scope.upperCaseArray = function(input) {
		    var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
		    return result.split(",").join(" ");
		}	
    }
  };
});