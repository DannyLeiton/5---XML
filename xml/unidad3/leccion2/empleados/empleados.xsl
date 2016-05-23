<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
	<body>
    	<h2>Nuestro directorio</h2>
    	<table border="1">
        	<tr bgcolor="yellow">
            	<th></th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Departamento</th>
                <th>Puesto</th>
                <th>Correo electr&oacute;nico</th>
            </tr>
            <!--for-each select-->
            <xsl:for-each select="empleados/empleado">
            <!--Sort -->
            <xsl:sort select="departamento"/>
            	<tr>
            		<td><xsl:value-of select="titulo"/></td>
                    <td><xsl:value-of select="nombres"/></td>
                    <td><xsl:value-of select="apellidos"/></td>
                    <td><xsl:value-of select="departamento"/></td>
                    <td><xsl:value-of select="puesto"/></td>
                    <td><xsl:value-of select="mail"/></td>
                </tr>
            <!--fin del for-each-->
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
