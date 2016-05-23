<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
	<body>
		<h2>Tres Libros</h2>
		<table border="15">
			<tr bgcolor="yellow">
				<th>T&iacute;tulo</th>
				<th>Autor</th>
			</tr>
			<tr>
				<td><xsl:value-of 
				select="libros/libro/nombre"/></td>
				<td><xsl:value-of 
				select="libros/libro/autor"/></td>
			</tr>
		</table>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>	
