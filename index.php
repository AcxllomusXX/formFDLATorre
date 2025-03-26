
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleForm.css">
    <title>Formulario de Datos Personales</title>
</head>
<body>

<header>
    <h1>REGISTRO PERSONAL </h1>
    <img src="../Form_FDLTorre/img/L_fdelatorre.png" alt="logo" width="200">
</header>

<!-- ::::::::::::::::: PARTE DE DATOS PERSONALES    BLOQUE B0  :::::::::::::::::::::: --> 
 
<main>

<section id="d-personales" >

  <form action="#" method="post">
        
        <h4>DATOS PERSONALES</h4>

        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="cedula">Cédula:</label> 
        <input type="text" id="cedula" name="cedula" required>

        <label for="correo">Correo:</label>
        <input type="email" id="correo" name="correo" required>

        <label for="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" required>

        <label for="peso">Peso:</label>
        <input type="number" id="peso" name="peso" required>

        <label for="estatura">Estatura:</label>
        <input type="number" id="estatura" name="estatura" required><br>

        <label for="estado_civil">Estado civil:</label>
        <select id="estado_civil" name="estado_civil" required>
            <option value="soltero">SOLTERO(A)</option>
            <option value="casado">CASADO(A)</option>
            <option value="divorciado">DIVORCIADO(A)</option>
            <option value="unido">UNIDO(A)</option>
            <option value="viudo">VIUDO(A)</option>
            <option value="separado">SEPARADO(A)</option>
        </select>
        <br><br>

</section> 
        
        
<!-- ::::::::::::::::: PARTE DE RESIDENCIA    BLOQUE B1  :::::::::::::::::::::: --> 

<section  id="d-residenciales">

       <h3>DATOS RESIDENCIALES  </h3>


        <label for="provincia_B1">Provincia</label>
        <select id="provincia_B1" name="provincia_B1" required>
            <option value="">Selecciona una Provincia</option>
            <option value="Panama">PANAMA</option>
            <option value="panama_O">PANAMA OESTE</option>
            <option value="Cocle">COCLE</option>
            <option value="veraguas">VERAGUAS</option>
            <option value="herrera">HERRERA</option>
            <option value="los_santos">LOS SANTOS</option>
            <option value="chiriqui">CHIRIQUI</option>
            <option value="bocas_del_toro">BOCAS DEL TORO</option>
            <option value="colon">COLON</option>
            <option value="darien">DARIEN</option>
            <option value="comarca">COMARCA NOGBE-BUGLE</option>
        </select>
        <br><br>

        <label for="distritos_B1">Distrito:</label>
        <select id="distritos_B1" name="distritos_B1" required>
            <option value="">Selecciona un distrito</option>
        </select>
        <br><br>

        <label for="corregimiento_B1">Corregimiento:</label>
        <select id="corregimiento_B1" name="corregimiento_B1" required>
            <option value="">Selecciona un corregimiento</option>
        </select>
        <br><br>
        <label for="barriada">Barriada</label>
        <input type="text" id="barriada" name="barriada" required>
        <br><br>
        <label for="calle">Calle:</label>
        <input type="text" id="calle" name="calle" required>
        <br><br>
        <label for="casa">Casa:</label>
        <input type="text" id="casa" name="casa" required>
        <br><br>
        <label for="cerca_deB1">Cerca de:</label>
        <input type="text" id="cerca_deB1" name="cerca_deB1" required>
        
        <br><br><br><br>
    

</section>

<!--::::::::::::::PARTE DE LOCACION LABORAL  BLOQUE  B2 ::::::::::::::::::: -->

<section  id="d-laborales">

<h3>DATOS LABORALES  </h3>

<label for="provincia_B2">Provincia</label>
        <select id="provincia_B2" name="provincia_B2" required>
            <option value="">Selecciona una Provincia</option>
            <option value="Panama">PANAMA</option>
            <option value="panama_O">PANAMA OESTE</option>
            <option value="Cocle">COCLE</option>
            <option value="veraguas">VERAGUAS</option>
            <option value="herrera">HERRERA</option>
            <option value="los_santos">LOS SANTOS</option>
            <option value="chiriqui">CHIRIQUI</option>
            <option value="bocas_del_toro">BOCAS DEL TORO</option>
            <option value="colon">COLON</option>
            <option value="darien">DARIEN</option>
            <option value="comarca">COMARCA NOGBE-BUGLE</option>
        </select>
        <br><br>

        <label for="distritos_B2">Distrito:</label>
        <select id="distritos_B2" name="distritos_B2" required>
            <option value="">Selecciona un distrito</option>
        </select>
        <br><br>

        <label for="corregimiento_B2">Corregimiento:</label>
        <select id="corregimiento_B2" name="corregimiento_B2" required>
            <option value="">Selecciona un corregimiento</option>
        </select>
        <br><br>
        <label for="calle">Calle</label>
        <input type="text" id="barriada" name="barriada" required>
        <br><br>
        <label for="cerca_deB2">Cerca de:</label>
        <input type="text" id="cerca_deB2" name="cerca_deB2" required>
        <br><br>
        <label for="N_de_base">Nombre de la sede o base donde Trabaja:</label>
        <input type="text" id="N_de_base" name="N_de_base" required>
        <br><br><br>


</section>


<section  id="d-referencias_1">

<h3>REFERENCIA PERSONAL (1) </h3>

    <br>
    <label for="nombre_R1">Nombre:</label>
    <input type="text" id="nombre_R1" name="nombre_R1" required><br><br>
    
     <label for="">Parentesco:</label>
    <select id="parentesco1" name="parentesco1" required>
        <option value="">Selecciona un parentesco</option>
        <option value="conyugue">CONYUGUE</option>
        <option value="abuelo">ABUELO(A)</option>
        <option value="amistad">AMISTAD</option>
        <option value="hijo">HIJO(A)</option>
        <option value="madre">MADRE</option>
        <option value="comadre">COMADRE</option>
        <option value="compadre">COMPADRE</option>
        <option value="compañero_trb">COMPAÑERO DE TRABAJO</option>
        <option value="padre">PADRE</option>
        <option value="otros">OTROS</option>
        <option value="hermano">HERMANO (A)</option>
        <option value="nieto">NIETO (A)</option>
        <option value="primo">PRIMO (A)</option>
        <option value="sobrino">SOBRINO (A)</option>
        <option value="tio">TIO (A)</option>
        <option value="vecino">VECINO (A)</option>
        <option value="desconocido">DESCONOCIDO (A)</option>


    </select>

    <br><br>


    <label for="L_Laboral1"> Donde Labora :</label>
    <input type="text" id="L_Laboral1" name="L_Laboral1" required><br><br>
    <label for="D_residencia"> Direccion Residencial:</label><br><br>
    <label for="provincia_B3">Provincia</label>
        <select id="provincia_B3" name="provincia_B3" required>
            <option value="">Selecciona una Provincia</option>
            <option value="Panama">PANAMA</option>
            <option value="panama_O">PANAMA OESTE</option>
            <option value="Cocle">COCLE</option>
            <option value="veraguas">VERAGUAS</option>
            <option value="herrera">HERRERA</option>
            <option value="los_santos">LOS SANTOS</option>
            <option value="chiriqui">CHIRIQUI</option>
            <option value="bocas_del_toro">BOCAS DEL TORO</option>
            <option value="colon">COLON</option>
            <option value="darien">DARIEN</option>
            <option value="comarca">COMARCA NOGBE-BUGLE</option>
        </select><br><br>

        <label for="distritos_B3">Distrito:</label>
        <select id="distritos_B3" name="distritos_B3" required>
            <option value="">Selecciona un distrito</option>
        </select><br><br>

        <label for="corregimiento_B3">Corregimiento:</label>
        <select id="corregimiento_B3" name="corregimiento_B3" required>
            <option value="">Selecciona un corregimiento</option>
        </select>
        <br><br>


    <label for="telefono_R2"> Telefono:</label>
    <input type="text" id="telefono_R2" name="telefono_R2" required><br><br>

    
    <br><br>
</section>


<section id="d-referencias_2">

<h4>REFERENCIA PERSONAL (2) </h4>
    <br>
    <label for="nombre_R2">Nombre:</label>
    <input type="text" id="nombre_R2" name="nombre_R2" required><br><br>
    
     <label for="">Parentesco:</label>
    <select id="parentesco2" name="parentesco2" required>
        <option value="">Selecciona un parentesco</option>
        <option value="conyugue">CONYUGUE</option>
        <option value="abuelo">ABUELO(A)</option>
        <option value="amistad">AMISTAD</option>
        <option value="hijo">HIJO(A)</option>
        <option value="madre">MADRE</option>
        <option value="comadre">COMADRE</option>
        <option value="compadre">COMPADRE</option>
        <option value="compañero_trb">COMPAÑERO DE TRABAJO</option>
        <option value="padre">PADRE</option>
        <option value="otros">OTROS</option>
        <option value="hermano">HERMANO (A)</option>
        <option value="nieto">NIETO (A)</option>
        <option value="primo">PRIMO (A)</option>
        <option value="sobrino">SOBRINO (A)</option>
        <option value="tio">TIO (A)</option>
        <option value="vecino">VECINO (A)</option>
        <option value="desconocido">DESCONOCIDO (A)</option>


    </select>

    <br><br>


    <label for="L_Laboral2"> Donde Labora :</label>
    <input type="text" id="L_Laboral2" name="L_Laboral2" required><br><br>
    <label for="L_Laboral"> Direccion Residencial:</label><br><br>

    <label for="provincia_B4">Provincia</label>
        <select id="provincia_B4" name="provincia_B4" required>
            <option value="">Selecciona una Provincia</option>
            <option value="Panama">PANAMA</option>
            <option value="panama_O">PANAMA OESTE</option>
            <option value="Cocle">COCLE</option>
            <option value="veraguas">VERAGUAS</option>
            <option value="herrera">HERRERA</option>
            <option value="los_santos">LOS SANTOS</option>
            <option value="chiriqui">CHIRIQUI</option>
            <option value="bocas_del_toro">BOCAS DEL TORO</option>
            <option value="colon">COLON</option>
            <option value="darien">DARIEN</option>
            <option value="comarca">COMARCA NOGBE-BUGLE</option>
        </select><br><br>

        <label for="distritos_B4">Distrito:</label>
        <select id="distritos_B4" name="distritos_B4" required>
            <option value="">Selecciona un distrito</option>
        </select><br><br>

        <label for="corregimiento_B4">Corregimiento:</label>
        <select id="corregimiento_B4" name="corregimiento_B4" required>
            <option value="">Selecciona un corregimiento</option>
        </select>
        <br><br>

    <label for="telefono_R2"> Telefono:</label>
    <input type="text" id="telefono_R2" name="telefono_R2" required><br><br>

    
    <br><br>

</section>


    <button type="submit" >Enviar</button>
</form>







<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script src="SClientes.js"></script>
    

</body>
</html>


