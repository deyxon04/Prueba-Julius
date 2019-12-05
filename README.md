# Prueba para Julius 2 grow

Servicio API RESTFUL con Node.js y express.js

## Dependencias

- NodeJS

## Instalación

```
Clonar con SSH

git clone git@github.com:deyxon04/Prueba-Julius.git

Clonar con HTTPS

git clone https://github.com/deyxon04/Prueba-Julius.git

## Instalación en modo de desarrollo ##

cd Prueba-Julius
npm install
npm run dev

## Instalación en modo de producción ##

cd Prueba-Julius
npm start

```
## Como usar la API 

Link API REST : ```https://juliusprueba.herokuapp.com```

##Registrar Usuario##

```
curl -X POST https://juliusprueba.herokuapp.com/singup
    -H "Content-Type: application/json" \
    -d '{
            "name": "Juanito Develop",
            "email": "juanito@develop.com",
            "password":"juanitodev"
        }
```
