var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var data = {
	"ClearWeb": {
		"Types": {
			"AttackIndication":118,
			"DataLeakage":155,
			"Phishing":230,
			"BrandSecurity":16,
			"ExploitableData":41,
			"vip":23
		},
		"Severities": {
			"High":144,
			"Medium":349,
			"Low":90
		},
		"Sources": {
			"ApplicationStores":1.5437392795883362,
			"SocialMedia":4.974271012006861,
			"PasteSites":16.123499142367066,
			"Others":77.35849056603774
		}
	},
	"DarkWeb": {
		"Types": {
			"AttackIndication":30,
			"DataLeakage":21,
			"Phishing":0,
			"BrandSecurity":0,
			"ExploitableData":17,
			"vip":0
		},
		"Severities": {
			"High":29,
			"Medium":35,
			"Low":4
		},
		"Sources": {
			"BlackMarkets":10.294117647058822,
			"HackingForums":44.11764705882353,
			"PasteSites":13.23529411764706,
			"Others":32.35294117647059
		}
	}
};	

app.use(bodyParser.json());
app.use(express.static('./app'));

app.route('/api/dashboard')
	.get(function(req, res) {
		res.json(data);
	});

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000);