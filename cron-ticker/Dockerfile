#CAMBIO A UNA VERSIÓN MAS ACTUAL 
FROM  node:25.2.1-alpine3.23
#cuenta con una carpeta llamada /app usr lib

WORKDIR /app
                        #COMO TENEMOS EL WORKING DIRECTORY NO ES NECESARIO PONERLE LA RUTA 
COPY package.json ./

    #INSTALACIÓN Y GENERACIÓN DE COMANDOS
RUN npm i 

COPY . .
        #COPY app.js package.json ./

#REALIZAR TESTING
RUN npm run test

#COMANDO RUN DE LA APLICACIÓN 
CMD [ "node", "app.js"]

