# Proyecto: Despliegue de aplicación web Angular en AWS.

---
Puedes acceder a la versión en vivo del sitio web aquí:  
[https://mitologiccloud.com](https://mitologiccloud.com)

---

El objetivo del proyecto es que qualquier cliente pueda acceder mediante un nombre de dominio a una Web desde qualquier lugar del munbdo.
Se utilizan los siguientes recursos principales:

* **Amazon S3**: bucket para alojar el frontend Angular (archivos estáticos).

* **CloudFront**: distribución global de contenido, con certificado SSL gestionado en **AWS Certificate Manager** para navegación segura en HTTPS.

* **Route 53**: gestión de dominio y creación de una zona de alojamiento personalizada.

---

### 1. Preparación del proyecto Angular

Los pasos iniciales son los siguientes:

Descargar Angular.

Ejecutar npm install para instalar todas las dependencias y módulos necesarios.

Lanzar el servidor local con ng serve para verificar que la aplicación funciona correctamente.

Ejecutar ng build para generar la carpeta dist, que contendrá los archivos listos para despliegue en S3.

### 2. Compra del dominio en Route 53

En primer lugar, se adquiere un dominio público en Route 53 ,en este caso, 'mitologiccloud.com'.
Al completar la compra, AWS crea automáticamente una zona hospedada asociada al dominio, donde se gestionarán los registros DNS.

### 3. Creación del bucket S3

Crear un bucket en Amazon S3 con el mismo nombre que el dominio 'mitologiccloud.com', ya que en caso contrario no funcionará.

En un primer momento, se permite el acceso público para verificar el funcionamiento.

Subir los archivos de la carpeta dist al bucket.

Configurar una política de bucket  mediante IAM para permitir el acceso a los objetos.

Habilitar la opción de alojamiento de sitio web estático.

Con esto, es posible acceder al sitio web mediante la URL pública de S3.

### 4. Configuración de CloudFront

A continuación, se crea una distribución de CloudFront para obtener acceso global y habilitar HTTPS.

Pasos principales:

Seleccionar el bucket S3 como origen.

Crear un Origin Access Control (OAC) adaptado al bucket, y actualizar la política de S3 para que CloudFront sea el único con acceso.

Redirigir el tráfico HTTP a HTTPS.

(Opcional) Activar AWS WAF como firewall de aplicación (no implementado en esta demo por costes).

Especificar el archivo index.html como objeto principal.

Una vez verificado el correcto acceso a través de CloudFront, bloquear el acceso público del bucket S3, permitiendo únicamente las solicitudes desde CloudFront.

### 5. Certificado SSL en AWS Certificate Manager (ACM)

Solicitar un certificado público para el dominio mitologiccloud.com.

Validar el certificado mediante DNS validation agregando los registros generados por ACM en la zona hospedada de Route 53.

Una vez validado, adjuntar el certificado a la distribución de CloudFront para habilitar HTTPS.

### 6. Configuración de registros en Route 53

Crear un registro tipo A (Alias) que apunte a la distribución de CloudFront, usando el dominio principal mitologiccloud.com.

Crear un bucket adicional llamado 'www.mitologiccloud.com', habilitar el alojamiento de sitio web estático y configurar la redirección hacia mitologiccloud.com.

Crear un segundo registro tipo A para 'www.mitologiccloud.com', apuntando al bucket S3 configurado como redirección hacia el dominio principal.

Alternativamente, podría haberse usado un registro CNAME, pero el tipo Alias es la opción recomendada por AWS para dominios raíz.

---

### Créditos
Proyecto desarrollado como parte del bootcamp **AWS DevOps & Cloud Computing de Blockstellar**.
