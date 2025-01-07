# Proyecto San José - Frontend

Este proyecto es una aplicación frontend diseñada para servir contenido rápido y dinámico. A continuación, se presentan las instrucciones para ejecutarlo en un entorno de desarrollo local y exponerlo utilizando **Cloudflare Tunnel**.

---

## **Pasos para correr el proyecto en desarrollo**

1. **Clonar el repositorio**

   ```bash
   git clone <URL-del-repositorio>
   cd san-jose-astro-frontend
   ```

2. **Iniciar el servidor de desarrollo**
   Ejecuta el siguiente comando para iniciar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

3. **Acceso local**
   Una vez iniciado el servidor, el proyecto estará disponible en `http://localhost:4321`.

---

## **Exponer el proyecto usando Cloudflare Tunnel**

Para compartir tu proyecto local con colegas o clientes, ya se incluye el archivo `cloudflared.exe` en el repositorio. Solo necesitas ejecutar el siguiente comando:

```bash
./cloudflared.exe --url http://localhost:<puerto>
```

### **Obtener la URL pública**

Una vez iniciado el túnel, se generará una URL pública temporal como:

```
https://<subdominio>.trycloudflare.com
```

- Comparte esta URL con tus colegas para que puedan acceder al proyecto en tiempo real.
- Asegúrate de mantener la terminal abierta mientras utilizas el túnel.

---

## **Notas**

- Los túneles rápidos son temporales y pueden no garantizar un uptime constante.
- El archivo `cloudflared.exe` ya está incluido en el repositorio, por lo que no necesitas instalar nada adicional para exponer el proyecto.

---

## **Contacto**

Si tienes preguntas o problemas, no dudes en comunicarte con el equipo de desarrollo. 😊
