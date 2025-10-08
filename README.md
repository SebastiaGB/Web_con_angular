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

## Despliegue de Web con Angular

Los passos a seguir són los siguientes: 
- instalar angular desde github
- usar npm install para instsalar las dependencias y modulos necesarios
- usar ng serve para ejecutar el servidor y poderla lanzar de forma local
- ejecutar ng build para construir la crpeta dist, que es la que se subirá a S3.

## Compra de dominio Route 53

En primer lugar se deberá comprar unn dominio público 'mitologiccloud.com' en nuestro caso que se alojará automaticamente en una zona hospedada.

## Creación S3 

Se crea un bucket s3 con el mismo nombre que el dominio para que funcione en caso contrario no funcionará y se permite en primer lugar el acceso público. Entocnes se sube los archivos de la carpeta dist y se crean los permisos para poder obtener objetos , la política mediante IAM en el bucket. Se habilita el alojamiento de web estático y con el dns es posible acceder al sitio web.

## Distribución CloudFront




---
### Créditos
Proyecto desarrollado como parte del bootcamp **AWS DevOps & Cloud Computing de Blockstellar**.
