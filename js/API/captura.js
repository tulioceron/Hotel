//captura
function tomarFoto(){
	navigator.device.capture.captureImage(function(mediaFiles){
		path = mediaFiles[0].fullPath;
		$('#regFoto').append('<br><img src="'+path+'" width="100%" />').attr('rel',path);
	},function(error){
		navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
	},{limit:1});
}