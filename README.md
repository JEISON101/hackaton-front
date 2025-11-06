# 🚀 Bienvenido al proyecto: Hackaton Front - React (Vite) + TypeScript

Este proyecto fue creado con los siguientes objetivos principales:

✅ Participar en el Hackaton FUP.
🧠 Aplicar conocimientos avanzados en desarrollo web utilizando tecnologías modernas.

## 🎯 Función principal

Gestionar de forma efectiva y dinámica los distintos módulos de la aplicación, incluyendo productos, clientes, ventas y recomendaciones.

## 🧱 Tecnologías utilizadas

- ⚛️ React (con Vite)
- 🟦 TypeScript
- 💅 TailwindCSS
- 📦 npm para gestión de dependencias
- 🔗 n8n para integración de chat y automatización

## 📦 Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión: >= 22.14.0)
  - Para verificar que lo tienes en tu máquina, ingresa al terminal y escribe `node -v`. Si no lo tienes, instálalo rápidamente.
- **npm**
  - Para verificar que lo tienes en tu máquina, ingresa al terminal y escribe `npm -v`. Si no lo tienes, instálalo rápidamente.

## 💥 Proceso de instalación

Clona el repositorio:

```bash
git clone https://github.com/JEISON101/hackaton-front.git
```

## 🎒 Instalación de dependencias

En la terminal del proyecto:

```bash
npm install
```

## 🏃 Ejecución del proyecto

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 🔗 Integración con n8n

El proyecto incluye un chat automatizado utilizando n8n. Este chat está configurado para interactuar con un webhook que busca información de productos en la base de datos.



## 🚧 Estructura del proyecto

```
src/
├── assets/
├── components/
│   ├── ProductsContent.tsx
│   ├── RenderVistas.tsx
│   ├── RutaPrivada.tsx
│   ├── SideBar.tsx
├── context/
│   ├── AuthContext.tsx
├── pages/
│   ├── AuthPage.tsx
│   ├── Clientes.tsx
│   ├── Compras.tsx
│   ├── Dashboard.tsx
│   ├── Landing.tsx
│   ├── Productos.tsx
│   ├── Recomendaciones.tsx
│   ├── Sucursales.tsx
│   ├── Ventas.tsx
├── services/
│   ├── authServices.ts
│   ├── imagenService.ts
├── utils/
│   ├── supabase.ts
├── App.tsx
├── main.tsx
```

