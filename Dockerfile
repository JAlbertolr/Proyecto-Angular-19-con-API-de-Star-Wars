# Etapa 1: build de Angular
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila la app Angular en modo producción
RUN ng build --configuration production

# Etapa 2: Nginx para servir archivos estáticos
FROM nginx:alpine

# Copia la build desde la etapa anterior
COPY --from=build /app/dist/tu-nombre-app-angular /usr/share/nginx/html

# Expone el puerto 80 (Render detecta este automáticamente)
EXPOSE 80

# Arranca nginx
CMD ["nginx", "-g", "daemon off;"]




