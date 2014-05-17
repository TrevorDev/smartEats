function getURLParameter(name) {
	var ret = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
	return ret == "null" ? null : ret;
}