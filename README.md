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

Link API REST : `https://juliusprueba.herokuapp.com`

## Registrar usuarios

```
curl -X POST https://juliusprueba.herokuapp.com/api/singup
    -H "Content-Type: application/json" \
    -d '{
            "name": "Juanito Develop",
            "email": "juanito@develop.com",
            "password":"juanitodev"
        }

    ## Ejemplo de respuesta ##
    {
      "ok": true,
      "message": "Login correcto",
      jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....'
    }

```

## Autenticar usuario

```
curl -X POST https://juliusprueba.herokuapp.com/api/singin
    -H "Content-Type: application/json" \
    -d '{
            "email": "juanito@develop.com",
            "password":"juanitodev"
        }
```

## Crear un post

```
curl -X POST https://juliusprueba.herokuapp.com/api/post
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: token jwt " \
    -d '{
            "image-julius": "image -- Input tipo file",
            "titulo":"Juanito está aprendiendo Nodejs",
            "contenido":"Es interesante todo lo que puedo hacer con nodejs ... ",
        }

```

## Listar los post asociados a un usuario

```
curl -X GET https://juliusprueba.herokuapp.com/api/post
    -H "Authorization: token jwt " \
```

## Eliminar un post

```
curl -X DEL https://juliusprueba.herokuapp.com/api/post
    -H "Content-Type: application/json" \
    -H "Authorization: token jwt " \
    -d '{
            "id": "Identificador del post"
        }
```
