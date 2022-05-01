app.directive('severities', function() {
  return {
    restrict: "E",
    scope: {
      severities: "="
    },
    templateUrl: "components/severities.html",
    link:function(scope, element, attrs){
      scope.labels = ['High', 'Medium', 'Low'];
      scope.colors = [{
		      backgroundColor: '#F3AB10',
		      pointBackgroundColor: '#F3AB10',
		      pointHoverBackgroundColor: '#F3AB10',
		      borderColor: '#F3AB10',
		      pointBorderColor: '#F3AB10',
		      pointHoverBorderColor: '#F3AB10'
		  },
		  {
		      backgroundColor: '#41B0D5',
		      pointBackgroundColor: '#41B0D5',
		      pointHoverBackgroundColor: '#41B0D5',
		      borderColor: '#41B0D5)',
		      pointBorderColor: '#41B0D5',
		      pointHoverBorderColor: '#41B0D5'
	      },
	      {
		      backgroundColor: '#D54141',
		      pointBackgroundColor: '#D54141',
		      pointHoverBackgroundColor: '#D54141',
		      borderColor: '#D54141)',
		      pointBorderColor: '#D54141',
		      pointHoverBorderColor: '#D54141'
	      }
	  ];
      scope.options = {
      	cutoutPercentage: 87,
      	elements: { arc: { borderWidth: 0 } }
      };
    }
  };
});