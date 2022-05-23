# Proyecto de fizzbuzz
Ejercicio tema 8 entornos de desarrollo

## Objetivo
Realizar en Javascript con Jest una función llamada fizzbuzz que reciba un argumento de tipo entero. La función ha de devolver el mismo número que se le pasa como argumento con unas excepciones:

1. En caso de que dicho argumento sea múltiplo de 2, la función devolverá la palabra "fizz"
2. En caso de que sea múltiplo de 3, la función devolverá "buzz"
3. En caso de que sea múltiplo de 2 y 3, la función devolverá "fizzbuzz"

## Primeros pasos

1. Se creó un proyecto en npm con la siguiente sintaxis `npm init -y`
2. Instalamos la libreria de Jest con `npm i -D jest`
3. Escribimos `npx jest --init` y lo configuraremos

## Posterior creación de archivos

1. Se creó un fichero llamado fizzbuzz.js en el cual irá el codigo fuente
2. Se creó un fichero llamado fizzbuzz.test.js

## Comprobación de la configuración

- Para comprobar que todos los pasos anteriores se han realizado exito en el fichero fizzbuzz.test.js escribiremos la siguiente sintaxis:

```js
  describe("fizzbuzz", () => {
  test('test', () => {
    expect(true).toBe(true);
  });
});
```
- Ahora ejecutamos `npm test` y debería pasar

## Como funciona

- En el fizzbuzz.test.js la sintaxis que se ha utilizado de base para cada función es la siguiente: 
```js
  describe("fizzbuzz", () => {
  test('should print 1 if they recieve 1', () => {
  const expected = 1;
  const result = 1;
  expect(expected).toBe(expected);
  });
});
```
- Ahora pasaremos a explicar punto a punto para que sirve cada linea del codigo:

- esto es lo que esperamos recibir
```js
 const expected = 1;
```

- este el resultado de la operación
```js
 const result = 1;
```

- la comprobación de que el test es correcto
```js
 expect(expected).toBe(expected);
```

- Depués iremos al fichero llamado fizzbuzz.js y escribiremos la siguiente estructura para poder realizar test adecuadamente

```js
function fizzbuzz(num) {
  if (num == 3 == 0) {
  return "fizz" ;
}

return num;
```

- basicamente lo que estamos diciendo con este codigo es, si la condicion se cumple, devuelve la palabra fizz

## Como hacer un test

-Para realizar los test escribiremos en la terminal `npm test` y debería pasar


