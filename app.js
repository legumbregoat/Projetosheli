/* =========================================
   PANEL DE CONTROL DE INFLACIÓN
   ========================================= */
const INFLACION = {
    "BLASCOR": 0,
    "3M": 0,
    "WANDA": 0,
    "QUIMAFLEX": 0,
    "SHERWIN WILLIAMS": 0,
    "LAZZURIL": 0,
    "MAXI RUBBER": 0,
    "GENERICO": 0
};

const MI_WHATSAPP = "595981000000"; // <--- ¡TU NÚMERO AQUÍ!

/* =========================================
   BASE DE DATOS COMPLETA (87 PRODUCTOS)
   ========================================= */
const dataBase = {
    "productos": [
        // --- NIVEL 1: BARNICES (LAS JOYAS) ---
        { "id": 75, "nombre": "Barniz Lazzudur 8937 (Alto Sólido)", "precio": 180000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Barnices", "imagen": "https://http2.mlstatic.com/D_NQ_NP_909565-MLA46237243681_062021-O.webp", "etiqueta": "PREMIUM" },
        { "id": 32, "nombre": "Wanda Barniz 5100 (Kit)", "precio": 145000, "proveedor": "WANDA", "categoria": "Barnices", "imagen": "https://http2.mlstatic.com/D_NQ_NP_827367-MLA44533479102_012021-O.webp", "etiqueta": "BEST SELLER" },
        { "id": 76, "nombre": "Barniz C21 2K", "precio": 120000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Barnices", "imagen": "https://http2.mlstatic.com/D_NQ_NP_668965-MLA46237220805_062021-O.webp", "etiqueta": "NUEVO" },
        { "id": 30, "nombre": "Wanda Barniz 1100", "precio": 95000, "proveedor": "WANDA", "categoria": "Barnices", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736873-MLA44533595082_012021-O.webp", "etiqueta": null },
        { "id": 31, "nombre": "Wanda Barniz 5500", "precio": 85000, "proveedor": "WANDA", "categoria": "Barnices", "imagen": "https://http2.mlstatic.com/D_NQ_NP_724042-MLA46476563385_062021-O.webp", "etiqueta": null },
        { "id": 51, "nombre": "Barniz PU Ideal", "precio": 85000, "proveedor": "QUIMAFLEX", "categoria": "Barnices", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },

        // --- NIVEL 2: MASILLAS (LO QUE MÁS SALE) ---
        { "id": 41, "nombre": "Masilla Blandex", "precio": 38000, "proveedor": "QUIMAFLEX", "categoria": "Masillas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-BLANDEX-900GR.jpg", "etiqueta": "RECOMENDADO" },
        { "id": 14, "nombre": "Masilla Poliester Tradicional", "precio": 35000, "proveedor": "BLASCOR", "categoria": "Masillas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-TRADICIONAL-BLASCOR-900GR.jpg", "etiqueta": null },
        { "id": 79, "nombre": "Masilla Pequeñas Correcciones", "precio": 35000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Masillas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_608359-MLA46237243679_062021-O.webp", "etiqueta": null },
        { "id": 42, "nombre": "Masilla Masipol", "precio": 35000, "proveedor": "QUIMAFLEX", "categoria": "Masillas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-MASIPOL-900GR.jpg", "etiqueta": null },
        { "id": 43, "nombre": "Masilla Dudu", "precio": 35000, "proveedor": "QUIMAFLEX", "categoria": "Masillas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-DUDU-900GR.jpg", "etiqueta": null },
        { "id": 52, "nombre": "Masa Antiruido Protex Ideal", "precio": 35000, "proveedor": "QUIMAFLEX", "categoria": "Masillas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASA-ANTIRUIDO-PROTEX-IDEAL-900ML.jpg", "etiqueta": null },

        // --- NIVEL 3: PRIMERS (LA BASE) ---
        { "id": 37, "nombre": "Royal Fix Wash Primer", "precio": 60000, "proveedor": "WANDA", "categoria": "Primers", "imagen": "https://http2.mlstatic.com/D_NQ_NP_965038-MLA44533604060_012021-O.webp", "etiqueta": null },
        { "id": 49, "nombre": "Primer Universal Gris Ideal", "precio": 60000, "proveedor": "QUIMAFLEX", "categoria": "Primers", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/PRIMER-UNIVERSAL-GRIS-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 86, "nombre": "Maxi Rubber Primer PU 511", "precio": 60000, "proveedor": "MAXI RUBBER", "categoria": "Primers", "imagen": "https://http2.mlstatic.com/D_NQ_NP_753905-MLA46476563390_062021-O.webp", "etiqueta": null },

        // --- NIVEL 4: PULIDO Y ESTÉTICA ---
        { "id": 24, "nombre": "Masa p/ Pulir 3M (1Kg)", "precio": 110000, "proveedor": "3M", "categoria": "Pulido", "imagen": "https://http2.mlstatic.com/D_NQ_NP_705307-MLA45645398751_042021-O.webp", "etiqueta": "PRO" },
        { "id": 36, "nombre": "Royal Fix Masa de Pulir", "precio": 35000, "proveedor": "WANDA", "categoria": "Pulido", "imagen": "https://http2.mlstatic.com/D_NQ_NP_840615-MLA44533580074_012021-O.webp", "etiqueta": null },
        { "id": 22, "nombre": "Cera 3M", "precio": 35000, "proveedor": "3M", "categoria": "Pulido", "imagen": "https://http2.mlstatic.com/D_NQ_NP_630658-MLA45645398748_042021-O.webp", "etiqueta": null },
        { "id": 74, "nombre": "Batida de Piedra Negro", "precio": 35000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Complementos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_727092-MLA46237220806_062021-O.webp", "etiqueta": null },
        { "id": 82, "nombre": "Sherwin Batida de Piedra", "precio": 35000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Complementos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_727092-MLA46237220806_062021-O.webp", "etiqueta": null },
        { "id": 55, "nombre": "Batida de Piedra Ideal", "precio": 35000, "proveedor": "QUIMAFLEX", "categoria": "Complementos", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASA-ANTIRUIDO-PROTEX-IDEAL-900ML.jpg", "etiqueta": null },

        // --- NIVEL 5: LIJAS Y ABRASIVOS ---
        { "id": 25, "nombre": "Cubitron (Lija Especial)", "precio": 15000, "proveedor": "3M", "categoria": "Abrasivos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_994975-MLA45645398753_042021-O.webp", "etiqueta": null },
        { "id": 26, "nombre": "Lija Ultrafina 3M 1500", "precio": 4500, "proveedor": "3M", "categoria": "Abrasivos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_944357-MLA46665856384_072021-O.webp", "etiqueta": null },
        { "id": 27, "nombre": "Lija Ultrafina 3M 2000", "precio": 4500, "proveedor": "3M", "categoria": "Abrasivos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_944357-MLA46665856384_072021-O.webp", "etiqueta": null },
        { "id": 28, "nombre": "Lija Ultrafina 3M 1000", "precio": 4500, "proveedor": "3M", "categoria": "Abrasivos", "imagen": "https://http2.mlstatic.com/D_NQ_NP_944357-MLA46665856384_072021-O.webp", "etiqueta": null },

        // --- NIVEL 6: DILUYENTES Y CATALIZADORES ---
        { "id": 16, "nombre": "Catalizador Intermediario PU", "precio": 45000, "proveedor": "BLASCOR", "categoria": "Catalizadores", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/CATALIZADOR-INTERMEDIARIO-PU-450ML.jpg", "etiqueta": null },
        { "id": 77, "nombre": "Catalizador PU / Alto Sólido 065", "precio": 45000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Catalizadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_983636-MLA44353846316_122020-O.webp", "etiqueta": null },
        { "id": 33, "nombre": "Wanda Diluyente 4030", "precio": 18000, "proveedor": "WANDA", "categoria": "Diluyentes", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 34, "nombre": "Wanda Diluyente 4028", "precio": 18000, "proveedor": "WANDA", "categoria": "Diluyentes", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 67, "nombre": "Thinner Universal (5 Litros)", "precio": 75000, "proveedor": "QUIMAFLEX", "categoria": "Diluyentes", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/THINNER-UNIVERSAL-5L.jpg", "etiqueta": "AHORRO" },
        { "id": 44, "nombre": "Thinner Universal (Litro)", "precio": 18000, "proveedor": "QUIMAFLEX", "categoria": "Diluyentes", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/THINNER-UNIVERSAL-900ML.jpg", "etiqueta": null },
        { "id": 45, "nombre": "Diluyente Ideal", "precio": 18000, "proveedor": "QUIMAFLEX", "categoria": "Diluyentes", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/THINNER-UNIVERSAL-900ML.jpg", "etiqueta": null },
        { "id": 62, "nombre": "Thinner Disolflex", "precio": 18000, "proveedor": "QUIMAFLEX", "categoria": "Diluyentes", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/THINNER-UNIVERSAL-900ML.jpg", "etiqueta": null },
        { "id": 66, "nombre": "Thinner Universal 200Lts", "precio": 2500000, "proveedor": "QUIMAFLEX", "categoria": "Diluyentes", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/THINNER-UNIVERSAL-5L.jpg", "etiqueta": "MAYORISTA" },

        // --- NIVEL 7: ACCESORIOS Y VARIOS ---
        { "id": 80, "nombre": "Cinta Adere 12", "precio": 15000, "proveedor": "LAZZURIL", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_899222-MLA44353846317_122020-O.webp", "etiqueta": null },
        { "id": 58, "nombre": "Cinta 12", "precio": 15000, "proveedor": "QUIMAFLEX", "categoria": "Accesorios", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/CINTA-DE-ENMASCARAR-12MM.jpg", "etiqueta": null },
        { "id": 59, "nombre": "Cinta 18", "precio": 20000, "proveedor": "QUIMAFLEX", "categoria": "Accesorios", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/CINTA-DE-ENMASCARAR-12MM.jpg", "etiqueta": null },
        { "id": 56, "nombre": "Estopa G", "precio": 10000, "proveedor": "QUIMAFLEX", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_745942-MLA44353846320_122020-O.webp", "etiqueta": null },
        { "id": 57, "nombre": "Estopa P", "precio": 5000, "proveedor": "QUIMAFLEX", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_745942-MLA44353846320_122020-O.webp", "etiqueta": null },
        { "id": 17, "nombre": "Coladores", "precio": 2000, "proveedor": "BLASCOR", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_857640-MLA46665856385_072021-O.webp", "etiqueta": null },
        { "id": 18, "nombre": "Vaso de Mezcla", "precio": 5000, "proveedor": "BLASCOR", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_857640-MLA46665856385_072021-O.webp", "etiqueta": null },
        { "id": 15, "nombre": "Sellador p/ Plastico", "precio": 55000, "proveedor": "BLASCOR", "categoria": "General", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/SELLADOR-P-PLASTICO-500ML.jpg", "etiqueta": null },
        { "id": 19, "nombre": "Lamina Plastico", "precio": 15000, "proveedor": "BLASCOR", "categoria": "Accesorios", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/CINTA-DE-ENMASCARAR-12MM.jpg", "etiqueta": null },
        { "id": 20, "nombre": "Resina al Agua", "precio": 35000, "proveedor": "BLASCOR", "categoria": "General", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 23, "nombre": "Sellador Parabrisa", "precio": 45000, "proveedor": "3M", "categoria": "General", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/SELLADOR-P-PLASTICO-500ML.jpg", "etiqueta": null },
        { "id": 35, "nombre": "Desengrasante Wanda", "precio": 35000, "proveedor": "WANDA", "categoria": "Limpieza", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 61, "nombre": "Desengrasante 200ml", "precio": 15000, "proveedor": "QUIMAFLEX", "categoria": "Limpieza", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 81, "nombre": "Maxi Rubber Desengrasante", "precio": 45000, "proveedor": "MAXI RUBBER", "categoria": "Limpieza", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 78, "nombre": "Paño Antiestático", "precio": 10000, "proveedor": "SHERWIN WILLIAMS", "categoria": "Accesorios", "imagen": "https://http2.mlstatic.com/D_NQ_NP_745942-MLA44353846320_122020-O.webp", "etiqueta": null },
        { "id": 83, "nombre": "Adhesivo Plastico", "precio": 45000, "proveedor": "MAXI RUBBER", "categoria": "Adhesivos", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-BLANDEX-900GR.jpg", "etiqueta": null },
        { "id": 85, "nombre": "Removedor Pastoso", "precio": 45000, "proveedor": "MAXI RUBBER", "categoria": "Limpieza", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 87, "nombre": "Tchau Tchau", "precio": 25000, "proveedor": "MAXI RUBBER", "categoria": "Limpieza", "imagen": "https://http2.mlstatic.com/D_NQ_NP_931980-MLA44533595083_012021-O.webp", "etiqueta": null },
        { "id": 63, "nombre": "Sellador Madera 1L", "precio": 35000, "proveedor": "QUIMAFLEX", "categoria": "Madera", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 64, "nombre": "Sellador Madera 3.6L", "precio": 110000, "proveedor": "QUIMAFLEX", "categoria": "Madera", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 65, "nombre": "Laca Brillante Madera", "precio": 40000, "proveedor": "QUIMAFLEX", "categoria": "Madera", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 68, "nombre": "Resina Poliester 1Kg", "precio": 45000, "proveedor": "QUIMAFLEX", "categoria": "Resinas", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/BARNIZ-PU-IDEAL-900ML.jpg", "etiqueta": null },
        { "id": 69, "nombre": "Fibra de Vidrio", "precio": 25000, "proveedor": "QUIMAFLEX", "categoria": "Resinas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_745942-MLA44353846320_122020-O.webp", "etiqueta": null },
        { "id": 70, "nombre": "Pegamento Uniflex 250ml", "precio": 25000, "proveedor": "QUIMAFLEX", "categoria": "Adhesivos", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-BLANDEX-900GR.jpg", "etiqueta": null },
        { "id": 72, "nombre": "Colaflex", "precio": 20000, "proveedor": "QUIMAFLEX", "categoria": "Adhesivos", "imagen": "https://pinturastaka.com.py/wp-content/uploads/2021/04/MASILLA-POLYESTER-BLANDEX-900GR.jpg", "etiqueta": null },

        // --- NIVEL 8: ENTONADORES (TODOS LOS COLORES) ---
        { "id": 7, "nombre": "Entonador Color Negro", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 2, "nombre": "Entonador Color Violeta", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 3, "nombre": "Entonador Color Rojo", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 4, "nombre": "Entonador Color Amarillo", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 5, "nombre": "Entonador Color Verde", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 6, "nombre": "Entonador Color Naranja", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 8, "nombre": "Entonador Color Azul", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 11, "nombre": "Entonador Color Marron", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 12, "nombre": "Entonador Color Ocre", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 13, "nombre": "Entonador Color Ceramica", "precio": 8500, "proveedor": "BLASCOR", "categoria": "Entonadores", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 39, "nombre": "Preto Fosco Vinilico", "precio": 45000, "proveedor": "WANDA", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 46, "nombre": "Preto Fosco Ideal", "precio": 40000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 47, "nombre": "Preto Cadilla Ideal", "precio": 40000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 48, "nombre": "Blanco Puro Ideal", "precio": 40000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 50, "nombre": "Aluminio A.F. Ideal", "precio": 45000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 53, "nombre": "Vermello Royal Ideal", "precio": 45000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null },
        { "id": 54, "nombre": "Azul Mackenzie", "precio": 45000, "proveedor": "QUIMAFLEX", "categoria": "Pinturas", "imagen": "https://http2.mlstatic.com/D_NQ_NP_736691-MLA45645398751_042021-O.webp", "etiqueta": null }
    ],
    "cursos": [
        { 
            "id": 101, 
            "titulo": "Colorimetría Avanzada", 
            "precio": 350000, 
            "proveedor": "ISRAEL SHELI", 
            "nivel": "Intermedio", 
            "duracion": "5 Horas", 
            "imagen": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        },
        { 
            "id": 102, 
            "titulo": "Efecto Espejo Masterclass", 
            "precio": 150000, 
            "proveedor": "ISRAEL SHELI", 
            "nivel": "Principiante", 
            "duracion": "2 Horas", 
            "imagen": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        };
       /* =========================================
   LÓGICA AUTOMÁTICA (EL CEREBRO DE LA WEB)
   ========================================= */

// Al cargar la página, ejecutar las funciones
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    cargarCursos();
});

// Función para calcular precio con inflación y formato
function calcularPrecio(precioBase, nombreProveedor) {
    const aumento = INFLACION[nombreProveedor] || 0;
    const precioFinal = precioBase + (precioBase * (aumento / 100));
    return "Gs. " + precioFinal.toLocaleString('es-PY');
}

// Función para pintar los productos en la pantalla
function cargarProductos() {
    const contenedor = document.getElementById('product-grid');
    if (!contenedor) return;
    contenedor.innerHTML = "";
    
    dataBase.productos.forEach(prod => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const precioMostrado = calcularPrecio(prod.precio, prod.proveedor);
        const tagHTML = prod.etiqueta ? `<span class="tag">${prod.etiqueta}</span>` : '';
        const mensaje = `Hola, me interesa: ${prod.nombre} (${prod.proveedor}) - Precio: ${precioMostrado}`;
        const linkWhatsApp = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
        
        const imgUrl = prod.imagen;

        card.innerHTML = `
            ${tagHTML}
            <div style="height: 180px; overflow: hidden; border-radius: 10px; margin-bottom: 15px; border: 1px solid #eee; background: white; display: flex; align-items: center; justify-content: center;">
                <img src="${imgUrl}" onerror="this.src='https://via.placeholder.com/400x300?text=Sin+Foto'" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <h3>${prod.nombre}</h3>
            <p style="color: #888; font-size: 0.8rem;">Prov: ${prod.proveedor}</p>
            <p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">${prod.categoria}</p>
            <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center;">
                <span class="price">${precioMostrado}</span>
                <a href="${linkWhatsApp}" target="_blank" class="btn-wsp"><i class="fab fa-whatsapp"></i> PEDIR</a>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para pintar los cursos
function cargarCursos() {
    const contenedor = document.getElementById('course-grid');
    if (!contenedor) return;
    contenedor.innerHTML = "";
    
    dataBase.cursos.forEach(curso => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const precioMostrado = calcularPrecio(curso.precio, curso.proveedor);
        const linkWhatsApp = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent("Info sobre curso: " + curso.titulo)}`;
        
        card.innerHTML = `
            <div style="height: 120px; border-radius: 10px; margin-bottom: 15px; overflow: hidden;">
                 <img src="${curso.imagen}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h3>${curso.titulo}</h3>
            <p style="color: #888; font-size: 0.9rem;">${curso.nivel}</p>
            <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                <span class="price">${precioMostrado}</span>
                <a href="${linkWhatsApp}" target="_blank" class="btn-wsp">INFO</a>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
    ]
};
