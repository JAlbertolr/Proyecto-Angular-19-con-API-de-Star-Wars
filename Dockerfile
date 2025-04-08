# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /mi_web

# Copia los archivos de configuración de npm
COPY package*.json ./

# Elimina node_modules y package-lock.json si existen
RUN rm -rf node_modules package-lock.json

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 4200
# EXPOSE 4200
EXPOSE 3000

# Comando para iniciar la aplicación
# CMD ["ng", "serve", "--host", "0.0.0.0"]

# Comando para iniciar Angular en el puerto 3000
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "3000"]



