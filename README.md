# MMLimaApi

Municipalidad metropolitana de Lima API no oficial.
Libreria para el manejo de la Municipalidad Metropolitana de Lima API

Creada para el mejor consumo de la api web, tipada con Typescript y documentada con JSDocs.

Instalación con npm

```sh
npm i mmlima-api
```

Ejemplo de uso

```js
const MMLimaApi = require("mmlima-api");
// Para obtener su auth_key, visite :
// https://datosabiertos.munlima.gob.pe/developers/
const api = MMLimaApi({
  auth_key: "MY_AUTH_KEY",
});
const res = await api.datastreams.findAll();
```
