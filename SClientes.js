// FUNCIONES PARA REGISTRO DE RESIDENCIA //

// Listado de distritos por provincia
const distritos = {

            "Panama": ["PANAMA", "CHIMAN", "CHEPO", "BALBOA", "SAN MIGUELITO", "TABOGA"],
            "panama_O": ["ARRAIJAN","CHAME","CAPIRA","LA CHORRERA","SAN CARLOS","VERACRUZ"],
            "Cocle": ["PENONOME","ANTÓN","CORONADO","NATA","OLA","AGUADULCE","LA PINTADA","PENONOMÉ"],
            "chiriqui": ["DAVID", "BUGABA", "BOQUETE", "BOQUERÓN", "RENACIMIENTO", "DOLEGA", "GUALACA", "REMEDIOS", "SAN FÉLIX","BARU", "TOLÉ", "ALANJE","SAN LORENZO","TIERRAS ALTAS"],
            "bocas_del_toro": ["BOCAS DEL TORO", "CHANGUINOLA", "CHIRIQUI GRANDE", "ALMIRANTE"],
            "colon": ["COLON", "CHAGRES", "DONOSO", "PORTOBELO", "SANTA ISABEL", "SANTA RITA", "SABANITAS"],
            "herrera": ["CHITRE", "LAS MINAS", "LOS POZOS", "OCU", "PARITA", "PESÉ", "SANTA MARÍA", "MONAGRILLO"],
            "los_santos": ["LAS TABLAS", "GUARARÉ", "LAS MINAS", "MACARACAS", "PEDASÍ", "PESÉ", "PUEBLO NUEVO", "TONOSÍ"],
            "veraguas": ["SANTIAGO", "ATALAYA", "CALOBRE", "CAÑAZAS", "LA MESA", "LAS PALMAS", "MONTIJO", "RÍO DE JESÚS", "SAN FRANCISCO", "SANTA FE", "SONÁ"],
            "darien": ["CHEPIGANA", "PINOGANA","SANTA FE"],
            "kuna_yala": ["SIN DISTRITO"],
            "comarca_ngabe_bugle":["BESIKO", "KANKINTU", "KUSAPIN", "MIRONO", "MUNA", "DOLE DUIMA", "ÑURUM", "JIRONDAI", "SANTA CATALINA O CALOVEBORA"],
            "comarca_embera_wounan":["CEMACO","SAMBU"],
            "comarca_naso_tjerdi":["NASO Tjer DI"],
            

};

// Listado de corregimientos por distrito
const corregimientos = {    
 
      "panama": ["24 DE DICIEMBRE","ALCALDE DÌAZ","ANCÒN","BETHANIA","BELLA VISTA","CALIDONIA","CAIMITILLO","CHILIBRE","CURUNDU","DON BOSCO","EL CHORRILLO","HERNESTO CORDOBA CAMPOS","JUAN DIAZ","LAS CUMBRES","LAS CUMBRES","LAS CUMBRES","LAS GARZAS","LAS MAÑANITAS","PACORA","PARQUE LEFEVRE","PEDREGAL","PUEBLO NUEVO","RIO ABAJO","SAN FELIPE","SAN FELIPE", "SAN FRANCISCO","SAN MARTIN", "SANTA ANA","TOCUMEN"],
      "chiman":["BRUJAS","CHIMAN","GONZALO VASQUEZ","PASIGA","UNION SANTEÑA"],
      "chepo":["CAÑITA","CHEPILLO","EL LLANO","LAS MARGARITAS","CHEPO","SANTA CRUZ DE CHININA","TORTI","MADUGANDI"],
      "balboa":["LA ENSENADA","LA ESMERALDA","LA GUINEA","PEDRO GONZALES","SABOGA","SAN MIGUEL"],
      "san_miguelito":["AMELIA DENIS DE ICAZA","BELISARIO PORRAS","JOSE DOMINGO ESPINAR","BELISARIO FRIAS","ARNULFO ARIAS","MATEO ITURRALDE","OMAR TORRIJOS","RUFINA ALFARO","VICTORIANO LORENZO"],
      "taboga":["OTOQUE OCCIDENTE","OTOQUE ORIENTE","TABOGA"],


      "arraijan":["ARRAIJAN (cab)","BURUNDA","CERRO SILVESTRE","JUAN DEMOSTENES AROSEMENA","NUEVO EMPERADOR","VERACRUZ","VISTA ALEGRE","SANTA CLARA","VACAMONTE"],
      "chame ":["BEJUCO","BUENOS AIRES","CABUYA","CHAME (cab)","CHICÀ","EL LÌBANO","LAS LAJAS","NUEVA GORGONA","PUNTA CHAME","SAJALICES","SORA"],
      "capira":["CAIMITO","CAPIRA (cab)","CAMPANA","CERMEÑO","CIRI DE LOS SOTOS","CIRI GRANDE","EL CACAO","LA TRINIDAD","LAS OLLAS ARRIBA","LIDICE","VILLA CARMEN","SANTA ROSA","VILLA ROSARIO"],
      "la_chorrera":["AMADOR","AROSEMENA","BARRIO BALBOA","BARRIO COLON","EL ARADO","EL COCO","FEUILLET","GUADALUPE","HERRERA","HURTADO","ITURRALDE","LA REPRESA","LOS DIAZ","MENDOZA","OBALDIA","PLAYA LEONA","PUERTO CAIMITO","SANTA ROSA"],
      "san_carlos":["EL ESPINO","EL HIGO","LA ERMITA","LA LAGUNA","LAS UVAS","SAN CARLOS (cab)","SAN JOSE","LOS LLANITOS","GUAYABITO"],


      "almirante":["ALMIRANTE","BAJO CULUBRE","BARRIO FRANCES","CUACHERO","CEIBA","MIRAFLORES","NANCE DE RISCO", "VALLE DE AGUAS ARRIBA","VALLE DE RISCO"],
      "bocas_del_toro":["BASTIMENTOS","BOCAS DEL TORO (cab)","BOCA DEL DRAGO","PUNTA LAUREL","TIERRA OSCURA","SAN CRISTOBAL"],
      "changuinola":["CHANGUINOLA (cab)","BARRIADA 4 DE ABRIL","BARRANCO ADENTRO","COCHIGRO","EL EMPALME","EL SILENCIO","FINCA 4","FINCA 6","FINCA 12","FINCA 30","FINCA 51","FINCA 60","FINCA 66", "GUABITO","LA GLORIA","LA MESA","LAS DELICIAS","LAS TABLAS"],
      "chiriqui_grande":["BAJO CEDRO","CHRIQUI GRANDE (cab)","MIRAMAR","PUNTA PEÑA","PUNTA ROBALO","RAMABALA"],


      "alanje":["ALANJE (cab)","DIVALÁ","EL TEJAR","GUARUMAL","NUEVO MEXICO","QUEREVALO","SANTO TOMAS","PALO GRANDE"],
      "baru":["BACO","LIMONES","PROGRESO","PUERTO ARMUELLES (cab)","RODOLFO AGUILAR DELGADO","EL PALMAR","MANACA"],
      "boqueron":["BAGALA","BOQUERON (cab)","CORDILLERA","GUABALA","GUAYABAL","PARAISO","PEDREGAL","TIJERAS"],
      "boquete":["ALTO BOQUETE","BAJO BOQUETE (cab)","CALDERA","JARAMILLO","LOS NARANJOS","PALMIRA"],
      "bugaba":["ASERRIO DE GARICHÉ","BUGABA","EL BONGO","GOMEZ","LA CONCEPCION","LA ESTRELLA","SAN ANDRES","SANTA MARTA","SANTA ROSA","SANTO DOMINGO","SORTOVA","SOLANO","SAN ISIDRO"],
      "david":["DAVID (cab)","BIJAGUAL","COCHEA","CHIRIQUI","GUACA","LAS LOMAS","PEDREGAL","SAN CARLOS","DAVID ESTE","DAVID SUR","SAN PABLO NUEVO","SAN PABLO VIEJO"],
      "dolega":["DOLEGA (cab)","LOS ANASTACIOS","POTRERILLOS","TINAJAS","LOS ALGARROBOS",,"POTRERILLOS ABAJO","ROVIRA","DOS RIOS"],
      "gualaca":["GUALACA (cab)","HORNITO","LOS ANGELES","PAJA DE SOMBRE","RINCON"],
      "remedios":["EL NANCITO","EL PORVENIR","EL PUERTO","REMEDIOS (cab)","SANTA LUCIA"],
      "renacimiento":["BREÑON","CAÑAS GORDAS","DOMINICAL","MONTE LIRIO","PLAZA DE CAISAN","RIO SERENO","SANTA CRUZ","SANTA CLARA"],
      "san_felix":["LAS LAJAS (cab)","LAS LAJAS ADRENTRO","JUAY","SAN FELIX","SANTA CRUZ"],
      "san_lorenzo":["HORCONCITOS (cab)","BOCA DE MONTE","BOCA CHICA","SAN JUAN","SAN LORENZO"],
      "tierras_altas":["VOLCAN (cab)","CERRO PUNTA","CUESTA DE PIEDRA"," NUEVA CALIFORNIA","PASO ANCHO"],
      "tole":["TOLÈ (cab)","BELLA VISTA","CASCO VIEJO","EL CRISTO","JUSTO FIDEL PALACIOS","LAJAS DE TOLE","POTRERP DE CAÑA","QUEBRADA DE PIEDRA","VELADERO"],

       
      "aguadulce":["AGUADULCE (cab)","BARRIOS UNIDOS","EL CRISTO","EL ROBLE","EL HATO DE SAN JUAN DE DIOS","POCRÌ","PUEBLOS UNIDOS","VIRGEN DEL CARMEN"],
      "anton":["ANTON (cab)","EL CHIRU","EL VALLE","RIO HATO","SAN JUAN DE DIOS","CABALLERO","CABUYA","SANTA RITA","JUAN DIAZ","EL RETIRO"],
      "la_pintada":["LA PINTADA (cab)","EL HARINO","EL POTRERO","LAS LOMAS","LLANO GRNADE","PIEDRAS GORDAS","LLANO NORTE"],
      "nata":["NATA DE LOS CABALLEROS (cab)","GUZMAN","TOZA","CAPELLANIA","EL CAÑO","LAS HUACAS","VILLARREAL"],
      "ola":["EL COPE","OLA (cab)","EL PALMAR","EL PICACHO","LA PAVA,"],
      "penonome":["PENONOME (cab)","CAÑAVERAL","COCLE","EL COCO","COCLE","CHIGUIRI ARRIBA","PAJONAL","RIO GRANDE","RIO INDIO","TOABRE","TULU","BOCA DE TUCUE","CANDELARIO OVALLE","LAS MINAS","RIECITO","SAN MIGUEL","VICTORIANO LORENZO"],


      "colon":["COLON (cab)","BARRIO NORTE","BARRIO SUR","CATIVA","BUENA VISTA","CRISTOBAL","CIRICITO","CRISTOBAL ESTE","ESCOBAL","LIMON","NUEVA PROVIDENCIA","PUERTO PILON","SABANITAS","SALAMANCA","SAN JUAN","SANTA ROSA"],
      "chagres":["NUEVO CHAGRES (cab)","LA ENCANTADA","EL GUABO","ACHIOTE","PALMAS BELLAS","PIÑA","SALUD"],
      "donoso":["MIGUEL DE LA BORDA (cab)","COCLE DEL NORTE","EL GUASIMO","RIO INDIO","GOBEA"],
      "portobelo":["PORTOBELO (cab)","CACIQUE","ISLA GRANDE","MARIA CHIQUITA","GARROTE"],
      "santa_isabel":["PALENQUE (cab)","CUANGO","MIRAMAR","NOMBRE DE DIOS","PALENQUE","PALMIRA","PLAYA CHIQUITA","SANTA ISABEL","VIENTO FRIO"],
      "omar_torrijos_herrera":["COCLESITO (cab)","SAN JOSE DEL GENERAL","SAN JUAN DE TURBE","NUEVA ESPERANZA"],


      "chepigana":["LA PALMA (cab)","CAMOGANTI","CHEPIGANA","GARACHINE","JAQUE","PUERTO PIÑA","SAMBU","SETEGANTI","TAIMATI","TUCUTI"],
      "pinogana":["EL REAL DE SANTA MARIA(cab)"," BOCA DE CUPE","METETI","PAYA","PINOGANA","PUCURO","YAPE","YAVIZA","WARGANDI"],
      "santa_fe":["SANTA FE (cab)","AGUA FRIA","CUCUNATI","RIO CONGO","RIO CONGO ARRIBA", "RIO IGLESIAS","ZAPALLAL"],


      "chitre":["CHITRE (cab)","LA ARENA","LLANO BONITO","MONAGRILLO","SAN JUAN BAUTISTA"],
      "las_minas":["LAS MINAS (cab)","CHEPO","CHUMICAL","EL TORO","LEONES","QUEBRADA DEL ROSARIO"," QUEBRADA EL CIPRIAN"],
      "los_pozos":["LOS POZOS (cab)","EL CAPURI","EL CALABACITO","EL CEDRO","LA ARENA","LA PITALOZA","LAS LLANAS","LOS CERRITOS","LOS CERROS DE PAJA"],
      "ocu":["OCU (cab)","CERRO LARGO","EL TIJERA","ENTRADERO DEL CASTILLO","LOS LLANOS","LLANO GRNADE","MENCHACA","PEÑAS CHATAS"],
      "parita":["PARITA (cab)","CABUYA","LOS CASTILLOS","LLANO DE LA CRUZ","PARIS","PORTOBELILLO","PORTUGA"],
      "pese":["PESE (cab)","EL BARRERO","EL PEDREGOSO","EL CIRUELO", "EL PAJARO","LAS CABRAS","RINCON HONDO","SABANAGRANDE"],
      "santa_maria":["SANTA MARIA (cab)","CHUPAMPA","EL LIMON","EL RINCON","LOS CANELOS"],


      "guarare":["GUARARE (cab)","EL ESPINAL","EL HATO","EL MACANO","GUARARE ARRIBA","LA ENEA","LA PASERA","LAS TRANCAS","LLANO ABAJO","PERALES"],
      "las_tablas":["LAS TABLAS (cab)","BAJO CORRAL","BAYANO","EL CARATE","EL COCAL","EL MANANTIAL","EL MUÑOZ","EL PEDREGOSO","EL SESTEADERO","LA LAJA","LA MIEL","LA PALMA","LA TIZA","LAS PALMITAS","LAS TABLAS ABAJO","NUARIO","PALMIRA","PEÑA BLANCA","RIO HONDO","SAN JOSE","SAN MIGUEL","SANTO DOMINGO","VALLE RICO","VALLERIQUITO"],
      "los_santos":["LA VILLA DE LOS SANTOS (cab)","EL EJIDO","EL GUASIMO","LA COLORADA","LA ESPIGADILLA","LAS CRUCES","LAS GUABAS","LOS ANGELES","LOS OLIVOS","LLANO LARGO","SABANAGRANDE","SANTA ANA","TRES QUEBRADAS","VILLA LOURDES","AGUA BUENA"],
      "macaracas":["MACARACAS (cab)","BAHIA HONDA","BAJOS DE GUERA","COROZAL","CHUPA","EL CEDRO","ESPINO AMARILLO","LA MESA","LAS PALMAS","LLANO DE PIEDRAS","MACARACAS","MOGOLLON"],
      "pedasi":["PEDASI (cab)","LOS ASIENTOS","MARIABE","ORIA ARRIBA","PURIO"],
      "Pocri":["POCRI (cab)","EL CAÑAFISTULO","LA LAJAMINA","PARAISO","PARITILLA","POCRI"],
      "tonosi":["TONOSI (cab)","CAÑAS","EL BEBEDERO","ALTOS DE GUERRA","CAMBUTAL","EL CACAO","EL PAPAYO","EL CORTEZO","FLORES","GUANICO","ISLA DE CAÑAS","LA TRONOSA"],


      "atalaya":["ATALAYA (cab)","EL BARRITO","LA CARRILLO","LA MESA","LA MONTAÑUELA","SAN ANTONIO"],
      "calobre":["CALOBRE (cab)","BARNIZAL","CHITRA","EL COCLA","EL POTRERO","LA LAGUNA","LA RAYA DE CALOBRE","LA TETILLA","LA YEGUADA","LAS GUIAS","MONJARAS","SAN JOSE"],
      "cañazas":["CAÑAZAS (cab)","CERRO DE PLATA"," EL AROMILLO","EL PICADOR","LAS CRUCES","LOS VALLES","SAN JOSE","SAN MARCELO"],
      "la_mesa":["LA MESA (cab)","BISVALLES","BORO","EL HIGO","LA MESA","LOS MILAGROS","LLANO GRNDE","SAN BARTOLO"],
      "las_palmas":["LAS PALMAS (cab)","CERRO DE CASA", "COROZAL","EL MARIA","EL PRADO","EL RINCON","LAS PALMAS","LOLA","MANUEL E. AMADOR TERRERO","PIXVAE","PUERTO VIDAL","SAN MARTIN DE PORRES","VIGUI","ZAPOTILLO"],
      "montijo":["MONTIJO (cab)","CEBACO","COSTA HERMOSA","GOBERNADORA","LA GARCEANA","LEONES","PILON","UNION DEL NORTE"],
      "rio_de_jesus":["RIO DE JESUS (cab)","14 DE NOVIEMBRE","LAS HUACAS","LOS CASTILLOS", "UTIRA"],
      "san_francisco":["SAN FRANCISCO (cab)","CORRAL FALSO","LOS HATILLOS","REMANCE","SAN JUAN","SAN JOSE"],
      "santa_fe":["SANTA FE (cab)","CALOVEBORA","EL ALTO","EL CUAY","EL PANTANO","GATUNCITO","RIO LUIS","RUBEN CANTU"],
      "santiago":["SANTIAGO (cab)","LA COLORADA","CANTO DEL LLANO","CARLOS SANTANA AVILA","EDWIN FABREGA","LA PEÑA","LA RAYA DE SANTA MARIA","LOS ALGARROBOS","NUEVO SANTIAGO","PONUGA","SAN MARTIN DE PORRES","SAN PEDRO DEL ESPINO","SANTIAGO ESTE","SANTIAGO SUR","RODRIGO LUQUE", "URRACA"],
      "sona":["SONA (cab)","BAHIA HONDA","CALIDONIA","CATIVE","EL MARAÑON","GUARUMAL","HICACO","LA SOLEDAD","LA TRINCHERA","QUEBRADA DE ORO","RIO GRANDE","RODEO VIEJO","SONA"],

      "cemaco":["CIRILO GUAYNORA","LAJAS BLANCAS","MANUEL ORTEGA"],
      "sambu":["JINGURUDO","RIO SABALO"],

      "sin_distrito":["AILIGANDI","NARGANA","PUERTO OBALDIA","TUBUALA"],
      "naso_tjer_di":["BONYIK","SAN SAN DURI","EL TERIBE"],

      "besiko":["SOLOY (cab)","BOCA DE BALSA","CERRO BANCO","CERRO PATENO","CAMARON ARRIBA","EMPLANADA DE CHORCHA","NAMNONI","NIBA"],
      "kankintu":["BISIRA (cab)","CALANTE","KANKINTU","GUORONI","MUNUNI","PIEDRA ROJA","TOLOTE"],
      "kusapin":["KUSAPIN (cab)","BAHIA AZUL","CAÑAVERAL","RIO CHIRIQUI","TOBOBE"],
      "mirono":["HATO PILON (cab)","CASCABEL","HATO COROTU","HATO CULANTRO","HATO JOBO","HATO JULI","QUEBRADA DE LORO","SALTO DUPI"],
      "muna":["CHICHICA (cab)","ALTO CABALLERO","BAKAMA","CERRO PUERCO","KRUA","MARACA","NIBRA","PEÑA BLANCA","ROKA","SITIO PRADO","UMANI","DIKO","KIKARI","DIKERI","MREENI"],
      "dole_duima":["CERRO IGLESIAS(cab)","HATO CHAMI","JADEBERI","LAJERO","SUSAMA"],
      "ñurum":["BUENOS AIRES(cab)","AGUA DE SALUD","ALTO DE JESUS","CERRO PELADO","EL BALE","EL PAREDON","EL PIRO","GUAYABITO","GUIBALE","EL PEÑON","EL PIRO Nº2"],
      "jirondai":["SAMBOA (cab)","BURI","GUARIVIARA","MAN CREEK", "TUWAI"],
      "santa_catalina_o_calovebora":["SANTA CATALINA (cab)","ALTO BILINGUE","LOMA YUCA","SAN PEDRITO","VALLE BONITO"],


};

// Función para actualizar distritos basados en la provincia seleccionada
function actualizarDistritos(provinciaSelect, distritoSelect, corregimientoSelect) {
    const selectedProvincia = provinciaSelect.value;
    const listaDistritos = distritos[selectedProvincia] || [];

    // Limpiar las opciones previas
    distritoSelect.innerHTML = '<option value="">Selecciona un distrito</option>';
    corregimientoSelect.innerHTML = '<option value="">Selecciona un corregimiento</option>';

    // Agregar nuevos distritos
    listaDistritos.forEach(distrito => {
        const option = document.createElement("option");
        option.value = distrito.toLowerCase().replace(/\s+/g, '_');
        option.textContent = distrito;
        distritoSelect.appendChild(option);
    });
}


// Función para actualizar corregimientos basados en el distrito seleccionado
function actualizarCorregimientos(distritoSelect, corregimientoSelect) {
    const selectedDistrito = distritoSelect.value;
    const listaCorregimientos = corregimientos[selectedDistrito] || [];

    // Limpiar opciones previas
    corregimientoSelect.innerHTML = '<option value="">Selecciona un corregimiento</option>';

    // Agregar corregimientos correspondientes
    listaCorregimientos.forEach(corr => {
        const option = document.createElement("option");
        option.value = corr.toLowerCase().replace(/\s+/g, '_');
        option.textContent = corr;
        corregimientoSelect.appendChild(option);
    });
}









//::::::::::::::BLOQUE 1:::::::::::::::::::// 

// Obtener los elementos del primer bloque de selección
const provincia_B1 = document.getElementById("provincia_B1");
const distrito_B1 = document.getElementById("distritos_B1");
const corregimiento_B1 = document.getElementById("corregimiento_B1");


// Agregar eventos para el primer bloque
provincia_B1.addEventListener("change", function() {
    actualizarDistritos(provincia_B1, distrito_B1, corregimiento_B1);
});
distrito_B1.addEventListener("change", function() {
    actualizarCorregimientos(distrito_B1, corregimiento_B1);
});


//::::::::::::::BLOQUE 2::::::::::::::::://


// Obtener los elementos del segundo bloque de selección
const provincia_B2 = document.getElementById("provincia_B2");
const distrito_B2 = document.getElementById("distritos_B2");
const corregimiento_B2 = document.getElementById("corregimiento_B2");


// Agregar eventos para el segundo bloque
provincia_B2.addEventListener("change", function() {
    actualizarDistritos(provincia_B2, distrito_B2, corregimiento_B2);
});
distrito_B2.addEventListener("change", function() {
    actualizarCorregimientos(distrito_B2, corregimiento_B2);
});


//::::::::::::::BLOQUE 3:::::::::::::::::::// 

// Obtener los elementos del tercer bloque de selección
const provincia_B3 = document.getElementById("provincia_B3");
const distrito_B3 = document.getElementById("distritos_B3");
const corregimiento_B3 = document.getElementById("corregimiento_B3");


// Agregar eventos para el tercer bloque
provincia_B3.addEventListener("change", function() {
    actualizarDistritos(provincia_B3, distrito_B3, corregimiento_B3);
});
distrito_B3.addEventListener("change", function() {
    actualizarCorregimientos(distrito_B3, corregimiento_B3);
});





//::::::::::::::BLOQUE 4:::::::::::::::::::// 

// Obtener los elementos del tercer bloque de selección
const provincia_B4 = document.getElementById("provincia_B4");
const distrito_B4 = document.getElementById("distritos_B4");
const corregimiento_B4 = document.getElementById("corregimiento_B4");


// Agregar eventos para el tercer bloque
provincia_B4.addEventListener("change", function() {
    actualizarDistritos(provincia_B4, distrito_B4, corregimiento_B4);
});
distrito_B4.addEventListener("change", function() {
    actualizarCorregimientos(distrito_B4, corregimiento_B4);
});



