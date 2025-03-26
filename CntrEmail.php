<?php
require '../TCPDF/tcpdf.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';
require '../PHPMailer/src/Exception.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar datos del formulario

    //bloque B1 datos generales 

    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $correo = $_POST['correo'];
    $celular = $_POST['celular'];
    $peso = $_POST['peso'];
    $estatura = $_POST['estatura'];
    $estado_civil = $_POST['estado_civil'];

    // datos de residencia
    $provincia_B1 = $_POST['provincia_B1'];
    $distrito_B1 = $_POST['distrito_B1'];
    $corregimiento_B1 = $_POST['corregimiento_B1'];
    $barriada = $_POST['barriada'];
    $casa = $_POST['casa'];
    $cerca_deB1 = $_POST['cerca_deB1'];

    //bloque B2 datos laborales 
    
    $provincia_B2 = $_POST['provincia_B2'];
    $distrito_B2 = $_POST['distrito_B2'];
    $corregimiento_B2 = $_POST['corregimiento_B2'];
    $calle_B2 =$_POST ['calle_B2'];
    $cerca_deB2 = $_POST['cerca_deB2'];
    $N_de_base = $_POST['N_de_base'];

    //bloque B3 datos de referencia 1
     
    $nombre_R1 = $_POST['nombre_R1'];
    $parentesco1 = $_POST['parentesco1'];
    $L_Laboral1 = $_POST['L_Laboral1'];
    $provincia_B3 = $_POST['provincia_B3'];
    $distrito_B3 = $_POST['distrito_B3'];
    $corregimiento_B3 = $_POST['corregimiento_B3'];
    $telefono_R1 = $_POST['telefono_R1'];
    
    // bloque B4 datos de referencia 2

    $nombre_R2 = $_POST['nombre_R2'];
    $parentesco2 = $_POST['parentesco2'];
    $L_Laboral2 = $_POST['L_Laboral2'];
    $provincia_B4 = $_POST['provincia_B4'];
    $distrito_B4 = $_POST['distrito_B4'];
    $corregimiento_B4 = $_POST['corregimiento_B4'];
    $telefono_R2 = $_POST['telefono_R2'];


    // Crear PDF
    $pdf = new TCPDF();
    $pdf->AddPage();
    $pdf->SetFont('helvetica', '', 12);
    $pdf->Cell(0, 10, "DATOS PERSONALES", 0, 1, 'C');
    $pdf->Cell(0, 10, "Nombre: $nombre", 0, 1);
    $pdf->Cell(0, 10, "Cédula: $cedula", 0, 1);
    $pdf->Cell(0, 10, "Correo: $correo", 0, 1);
    $pdf->Cell(0, 10, "Celular: $celular", 0, 1);
    $pdf->Cell(0, 10, "Peso: $peso kg", 0, 1);
    $pdf->Cell(0, 10, "Estatura: $estatura cm", 0, 1);
    $pdf->Cell(0, 10, "Estado Civil: $estado_civil", 0, 1);

    $pdf->Cell(0, 10, "DATOS DE RESIDENCIA ", 0, 1, 'C');

    $pdf->Cell(0, 10, "Provincia: $provincia_B1", 0, 1);
    $pdf->Cell(0, 10, "Distrito: $distrito_B1", 0, 1);
    $pdf->Cell(0, 10, "Corregimiento: $corregimiento_B1", 0, 1);
    $pdf->Cell(0, 10, "Barriada: $barriada", 0, 1);
    $pdf->Cell(0, 10, "Casa: $casa", 0, 1);
    $pdf->Cell(0, 10, "Cerca de: $cerca_deB1", 0, 1);

    $pdf->Cell(0, 10, "DATOS DE LABORALES ", 0, 1, 'C');

    $pdf->Cell(0, 10, "Provincia: $provincia_B2", 0, 1);
    $pdf->Cell(0, 10, "Distrito: $distrito_B2", 0, 1);
    $pdf->Cell(0, 10, "Corregimiento: $corregimiento_B2", 0, 1);  
    $pdf->Cell(0, 10, "Calle: $calle_B2", 0, 1);
    $pdf->Cell(0, 10, "Cerca de: $cerca_deB2", 0, 1);
    $pdf->Cell(0, 10, "Nombre de la sede o base donde trabaja: $N_de_base", 0, 1);


    $pdf->Cell(0, 10, "REFERENCIA PERSONAL (1) ", 0, 1, 'C');

    $pdf->Cell(0, 10, "Nombre: $nombre_R1", 0, 1);
    $pdf->Cell(0, 10, "Parentesco: $parentesco1", 0, 1);
    $pdf->Cell(0, 10, "Donde Labora: $L_Laboral1", 0, 1);
    $pdf->Cell(0, 10, "Provincia: $provincia_B3", 0, 1);
    $pdf->Cell(0, 10, "Distrito: $distrito_B3", 0, 1);
    $pdf->Cell(0, 10, "Corregimiento: $corregimiento_B3", 0, 1);  
    $pdf->Cell(0, 10, "Telefono: $telefono_R1", 0, 1);

    $pdf->Cell(0, 10, "REFERENCIA PERSONAL (2) ", 0, 1, 'C');

    $pdf->Cell(0, 10, "Nombre: $nombre_R2", 0, 1);
    $pdf->Cell(0, 10, "Parentesco: $parentesco2", 0, 1);
    $pdf->Cell(0, 10, "Donde Labora: $L_Laboral2", 0, 1);
    $pdf->Cell(0, 10, "Provincia: $provincia_B4", 0, 1);
    $pdf->Cell(0, 10, "Distrito: $distrito_B4", 0, 1);
    $pdf->Cell(0, 10, "Corregimiento: $corregimiento_B4", 0, 1);  
    $pdf->Cell(0, 10, "Telefono: $telefono_R2", 0, 1);




    // Guardar el PDF temporalmente
    $pdf_file = 'formulario.pdf';
    $pdf->Output($pdf_file, 'F');

    // Enviar por correo
    $to = "axelmoren1213@gmail.com";  // Reemplaza con el correo de la jefa
    $subject = "Formulario recibido - $nombre";
    $message = "Adjunto el formulario de $nombre.";
    $headers = "From: tu_correo@example.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary1\"\r\n";

    // Adjuntar el PDF
    $file_content = chunk_split(base64_encode(file_get_contents($pdf_file)));
    $body = "--boundary1\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= "$message\r\n";
    $body .= "--boundary1\r\n";
    $body .= "Content-Type: application/pdf; name=\"$pdf_file\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$pdf_file\"\r\n\r\n";
    $body .= "$file_content\r\n";
    $body .= "--boundary1--";

    // Enviar correo
    mail($to, $subject, $body, $headers);

    // Eliminar el archivo temporal
    unlink($pdf_file);

    echo "Formulario enviado con éxito.";
}
?>