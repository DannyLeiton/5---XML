if(window.XMLHttpRequest){
	//Navegador moderno
	xhttp = new XMLHttpRequest();
} else {
	//IE 5-6
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
//Lee archivo 
xhttp.open("GET","empleados2.xml",false);
xhttp.send();
xmlDoc = xhttp.responseXML;
//
var empleados = xmlDoc.documentElement.childNodes;

for(i=0; i<empleados.length; i++){
	if(empleados[i].nodeType==1){
	//
	empleado = empleados[i].childNodes;
	//
	attributo = empleados[i].attributes.getNamedItem("carajo").nodeValue;
	tit = empleado[1].childNodes[0].nodeValue;
	nom = empleado[3].childNodes[0].nodeValue;;
	app = empleado[5].childNodes[0].nodeValue;;
	puesto = empleado[7].childNodes[0].nodeValue;;
	depto = empleado[9].childNodes[0].nodeValue;;
	correo = empleado[11].childNodes[0].nodeValue;;
	nombre = tit+" "+nom+" "+app;
	//
	document.write(nombre+"<br>");	
	document.write("Puesto: "+puesto+"<br>");
	document.write("Depto.: "+depto+"<br>");
	document.write("Correo: "+correo+"<br>");
	document.write("#Carajo: "+attributo+"<br>");
	document.write("--------------------<br>");
	}
}

