//Dispositivo
function disp(){
	var arr = [];
	arr['name'] = device.name;
	arr['phonegap'] = device.cordova;
	arr['platform'] = device.platform;
	arr['id'] = device.uuid;
	arr['model'] = device.model;
	arr['version'] = device.version;
	
	return arr;
}