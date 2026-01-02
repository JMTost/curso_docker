FROM node:19.2-alpine3.16
#cuenta con una carpeta llamada /app usr lib

WORKDIR /app
                        #COMO TENEMOS EL WORKING DIRECTORY NO ES NECESARIO PONERLE LA RUTA 
COPY package.json ./

    #INSTALACIÓN Y GENERACIÓN DE COMANDOS
RUN npm i 

COPY app.js  ./
#COPY app.js package.json ./


#COMANDO RUN DE LA APLICACIÓN 
CMD [ "node", "app.js"]

