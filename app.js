var render = require('./lib/render')
var jsonResp = require('./lib/jsonResp')
var config = require('./lib/config')
var sessionHelper = require('./lib/sessionHelper')
var logger = require('koa-logger')
var router = require('koa-router')
var serve = require('koa-static')
var session = require('koa-session')
var views = require('co-views')
var parse = require('co-body')
var koa = require('koa')
var swig = require('swig')
var https = require('https')
var http = require('http')
var request = require('request');
var fs = require('fs')
var cors = require('koa-cors');
var thunkify = require('thunkify');
var app = koa()
var Promise = require("bluebird");
var BitPay = require('bitpay-node');
var client = new BitPay.Client({ apiKey: 'BUxuipHFna0BXrzCwl7l6LWX2eURfio2MsKFq8'});

//REMOVE IN PRODUCTION??
swig.setDefaults(config.templateOptions)

//ROUTES
app.keys = [config.sessionSecret]
app.use(session())
app.use(jsonResp())
app.use(cors())
app.use(router(app))

//PAGE ROUTES
app.get('/', defaultPageLoad('index'))
app.get('/order', defaultPageLoad('order'))
app.post('/invoice', invoice)
app.get('/public/*', serve('.'))


//PAGE HANDLERS
function defaultPageLoad(pageName, requiresLogin) {
	return function *(){
		if(requiresLogin===true && !sessionHelper.isLoggedIn(this.session)){
			this.redirect('/login')
			return
		}

		var temp = sessionHelper.commonTemplate(this.session);
		this.body = yield render(pageName, temp)
	}
}

function *invoice (){
	var amount = parseFloat(this.query.p)
	var that = this
	var ret = yield bitpayer(amount)
	this.jsonResp(200, ret)
}

function bitpayer(amount){
	var resolver = Promise.pending();

	var invoiceOptions = { 
	  price: amount, 
	  currency: 'USD' 
	}; 

	client.createInvoice(invoiceOptions, function(err, invoice) {
	  resolver.resolve(invoice);
	})

	return resolver.promise;
}



var server = http.createServer(app.callback())
server.listen(config.appPort);
console.log('Started ----------------------------------------------')
