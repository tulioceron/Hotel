//Servidor
function enviarRegistro(nombre,telefono,email,foto){
	$.ajax({
		type: "POST",
		url: "http://igitsoft.com/pgtest.php",
		data: "nom="+nombre+"&tel="+telefono+"&ema="+email+"&id="+disp()['id']
	}).done(function(msg){
		if(msg==1){
			//Subir Foto
			uploadPhoto(foto,nombre);
		}else{
			navigator.notification.alert("Los datos no fueron enviados correctamente", null, "Error de Registro", "Aceptar");
		}
	});
}

function reservarHb(t,p,h,d){
	$.ajax({
		type: "POST",
		url: "http://igitsoft.com/pgtest.php",
		data: "t="+t+"&p="+p+"&h="+h+"&d="+d
	}).done(function(msg){
		if(msg==1){
			navigator.notification.alert('Reserva Realizada Correctamente', function(){
				window.location.href = '#page';
			}, 'Reserva','Aceptar');
		}else{
			navigator.notification.alert("No se pudo sincronizar la reserva, Esperando conexión a internet", null, "Error de Sincronización", "Aceptar");
		}
	});
}