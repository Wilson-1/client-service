
---

## 📁 `client-service/README.md`

# 🛰️ Client Service - Microservicio TCP

Este microservicio forma parte de un mini proyecto usando **NestJS**.  
Su función es **enviar un comando TCP** al microservicio `time-service` para obtener la hora actual.

## Cómo ejecutar

### 1. Instalar dependencias

```bash
npm install
```
### Ejecutar el microservicio

```bash
npm run start
```
### Deberías ver en consola algo como:

```bash
🕒 Hora recibida del servicio: 2025-07-30T21:30:00.000Z
```

### Funcionalidad

- Se conecta vía TCP al time-service.
- Envía el comando { cmd: 'get_time' }.
- Recibe y muestra la hora actual.
