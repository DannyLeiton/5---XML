function cargaXML(file){
	if(window.XMLHttpRequest){
		xhttp = new XMLHttpRequest();
	}else{
		//IE5-IE6
		xhttp = new ActiveXObject("XMLHTTP");
	}
	xhttp.open("GET", file, false);
	try{
		xhttp.responseType = "msxml-document"; 
	}
	catch(err){}
	xhttp.send("");
	return xhttp;
}

window.onload = function(){
	var x = cargaXML("../unidad1/primerArch.xml");
	var xml = x.responseXML;
	var path = "/libros/libro[1]/nombre";//Los arreglos inician en 1, no en 0.
	//alert(xml);
	alert(navigator.appName);
	if(window.XMLHttpRequest){//Creo que esto ya no sirve para ver si IE, porque ahora se llama Edge y sí reconoce el XMLHttpReques
		var libros = xml.evaluate(path, xml, null/*namespace*/, XPathResult.ANY_TYPE, null/*Resultado callback*/);
		//alert(libros);
	 	var libro = libros.iterateNext();
		document.write(libro.childNodes[0].nodeValue+"<br>");
	}else{
		xml.setProperty("SelectionLanguage", "XPath");
		var libros = xml.selectNodes(path);
		for(i=0;i<libros.length;i++){
			document.write(libros[i].childNodes[0].nodeValue+"<br>");
		}
	}
};
