dia=prompt("Ingresa tu dia de nacimiento");
mes=prompt("Ingresa tu mes de nacimiento (CON NUMERO)");

    if ((dia>=21&&mes==3)||(dia<=20&&mes==4)){
		console.log("Aries");}
	else if ((dia>=21&&mes==4)||(dia<=20&&mes==5)){
		console.log("Tauro");}
	else if ((dia>=21&&mes==5)||(dia<=21&&mes==6)){
		console.log("Geminis");}
	else if ((dia>=22&&mes==6)||(dia<=22&&mes==7)){
		console.log("Cancer");}
	else if ((dia>=23&&mes==7)||(dia<=23&&mes==8)){
		console.log("Leo");}
	else if ((dia>=24&&mes==8)||(dia<=22&&mes==9)){
		console.log("Virgo");}
	else if ((dia>=23&&mes==9)||(dia<=22&&mes==10)){
		console.log("Libra");}
	else if ((dia>=23&&mes==10)||(dia<=22&&mes==11)){
		console.log("Escorpio");}
	else if ((dia>=23&&mes==11)||(dia<=21&&mes==12)){
		console.log("Sagitario");}
	else if ((dia>=22&&mes==12)||(dia<=20&&mes==1)){
		console.log("Capricornio");}
	else if ((dia>=21&&mes==1)||(dia<=19&&mes==2)){
		console.log("Acuario");}
	else if ((dia>=20&&mes==2)||(dia<=20&&mes==3)){
		console.log("Piscis");}
	else {
		console.log("Ingresa una fecha valida");
	}
