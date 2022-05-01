app.directive('attackTypes', function() {
  return {
    restrict: "E",
    scope: {
      types: "="
    },
    templateUrl: "components/attackTypes.html"
  };
});