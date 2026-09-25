/**
 * =====================================================================
 * GOOGLE APPS SCRIPT: CAPTURA DE LEADS WORKSHOP "TU ERA CREATOR"
 * Mentora: @soymariab
 * =====================================================================
 * 
 * PASOS PARA ACTIVAR EN 1 MINUTO:
 * 
 * 1. Ve a https://sheets.new y crea una hoja de cálculo nueva en tu Google Drive.
 *    (Puedes nombrarla: "Leads Workshop Tu Era Creator").
 * 
 * 2. En el menú superior de Google Sheets, ve a:
 *    Extensiones -> Apps Script
 * 
 * 3. Borra todo el código que veas en el editor y pega este script completo.
 * 
 * 4. Haz clic en el botón azul "Implementar" (arriba a la derecha) -> "Nueva implementación".
 * 
 * 5. Configura los siguientes campos:
 *    - Tipo: selecciona "Aplicación web" (haz clic en el engranaje si es necesario).
 *    - Descripción: "Captura de Leads Landing"
 *    - Ejecutar como: "Yo" (tu cuenta de correo)
 *    - Quién tiene acceso: "Cualquier usuario" (IMPORTANTE: para que la landing pueda enviar datos sin pedir login).
 * 
 * 6. Haz clic en "Implementar", autoriza el acceso con tu cuenta de Google.
 * 
 * 7. Copia la "URL de la aplicación web" generada (empieza con https://script.google.com/macros/s/...).
 * 
 * 8. Configura esa URL en tu proyecto o indícala para agregarla a Vercel.
 * =====================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Evita colisiones si entran registros simultáneos

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Si la hoja no tiene encabezados, los creamos automáticamente con diseño
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha y Hora (UY)",
        "Nombre Completo",
        "Instagram (@)",
        "WhatsApp / Teléfono",
        "Correo Electrónico",
        "Método Elegido",
        "ID Registro"
      ]);

      // Estilo de la fila de encabezados
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#FF2E93"); // Color magenta de la marca
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Parsear la información enviada desde la landing
    var data = JSON.parse(e.postData.contents);

    // Formatear Instagram con @ si no lo tiene
    var instagramHandle = data.instagram ? data.instagram.trim() : "";
    if (instagramHandle && !instagramHandle.startsWith("@")) {
      instagramHandle = "@" + instagramHandle;
    }

    // Insertar nueva fila al final
    sheet.appendRow([
      data.dateFormatted || Utilities.formatDate(new Date(), "America/Montevideo", "dd/MM/yyyy HH:mm:ss"),
      data.fullName || "",
      instagramHandle,
      data.phone || "",
      data.email || "",
      data.paymentMethod || "whatsapp",
      data.id || ""
    ]);

    // Retornar confirmación
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Lead registrado exitosamente" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("El Webhook de Leads para 'Tu Era Creator' está activo y funcionando correctamente.");
}
