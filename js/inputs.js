function enviar(){
	let edad=document.getElementsByTagName("input")[1].value;
	let nombre=document.getElementsByTagName("input")[0].value;
	if(edad>=0 && edad<121){
		if(edad>=18){
			alert(nombre+" eres mayor de edad");
		}
		if(edad<18){
			alert(nombre+" eres menor de edad");
		}
	}
	else
		alert("EDAD INTRODUCIDA INCORRECTA")
}