function cargaXML(archivo){
	if(window.XMLHttpRequest){
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",archivo,false);
	try{xhttp.responseType="msxml-document";}
	catch(err) {};
	xhttp.send("");
	return xhttp;
}
/*  Implementación Empleado por Empleado:
 *  window.onload = function(){
	var x = cargaXML("../unidad2/empleados2.xml");
	var xml = x.responseXML;
	var path = "empleados/empleado";
	//
	if(window.XMLHttpRequest){
		var empleados = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
		//
		var empleado = empleados.iterateNext();
		document.write("<select>");
		while(empleado){
			//document.write(empleado+"<br>");
			//empleado = empleados.iterateNext();
			document.write("<option>");
			//
			//alert(empleado.childNodes[1].childNodes[0].nodeValue);
			tit = empleado.childNodes[1].childNodes[0].nodeValue;
			//
			nom = empleado.childNodes[3].childNodes[0].nodeValue;
			//
			app = empleado.childNodes[5].childNodes[0].nodeValue;
			//
			puesto = empleado.childNodes[7].childNodes[0].nodeValue;
			//
			depto = empleado.childNodes[9].childNodes[0].nodeValue;
			//
			correo = empleado.childNodes[11].childNodes[0].nodeValue;
			//siguiente empleado:
			empleado = empleados.iterateNext();
			//
			opcion = depto+" ("+puesto+"), "+tit+" "+nom+" "+app+", "+correo;
			document.write(opcion);
			document.write("</option>");
		}
		document.write("</select>");
	} else {
		xml.setProperty("SelectionLanguage","XPath");
		libros = xml.selectNodes(path);
		for(i=0; i<libros.length; i++){
			document.write(libros[i].childNodes[0].nodeValue);	
			document.write("<br>");
		}
	}
};*/

/*  Implementación etiqueta por etiqueta: */
    window.onload = function(){
	var x = cargaXML("../unidad2/empleados2.xml");
	var xml = x.responseXML;
	var path = "empleados/empleado/*";
	//
	if(window.XMLHttpRequest){
		var listaElementos = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
		//
		var elemento = listaElementos.iterateNext();
		document.write("<select>");
		while(elemento){
			document.write("<option>");
			tit = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			nom = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			app = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			puesto = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			depto = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			correo = elemento.childNodes[0].nodeValue;
			elemento = listaElementos.iterateNext();
			opcion = depto+" ("+puesto+"), "+tit+" "+nom+" "+app+", "+correo;
			document.write(opcion);
			document.write("</option>");
		}
		document.write("</select>");
	} else {
		xml.setProperty("SelectionLanguage","XPath");
		libros = xml.selectNodes(path);
		for(i=0; i<libros.leght; i++){
			document.write(libros[i].childNodes[0].nodeValue);	
			document.write("<br>");
		}
	}
};


