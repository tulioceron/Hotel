//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = '#login';
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		$('#regEnviar').tap(function(){
			var nom = $('#regNom').val();
			var email = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('rel');
			if(nom != '' && email != '' && tel != '' && foto != undefined && foto != ''){
				enviarRegistro(nom, tel, email, foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', 'Aceptar');
			}
		});
		$('#nr1 li').tap(function(){
			if($(this).index()!=0){
				switch($(this).index()){
					case 1:
						$('#nr2').attr('th',1);
						break;
					case 2:
						$('#nr2').attr('th',2);
						break;
					case 3:
						$('#nr2').attr('th',3);
				}
				window.location.href = '#nr2';
			}
		});
		$('#nr2 a[data-role=button]').tap(function(){
			var th = $('#nr2').attr('th');
			var pr = $('#nr2 select:eq(0)').val();
			var hb = $('#nr2 select:eq(1)').val();
			var ds = $('#nr2 select:eq(2)').val();
			
			if(navigator.connection.type != Connection.NONE)
				reservarHb(th, pr, hb, ds);
			else
				reservaInt(th, pr, hb, ds);
		});
		$('#page li:eq(1)').tap(function(){
			leerHistorial();
		});
		document.addEventListener("online",function(){
			leerReservas();
		},false);
	}, false);
});