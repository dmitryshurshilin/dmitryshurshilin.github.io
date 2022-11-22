## Promises

### `Promise.all`

Метод `Promise.all` принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис.

Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов.

**Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.**

**В случае ошибки, остальные результаты игнорируются**

```javascript
const promiseAll = Promise.all([p1, p2, p3])
promiseAll.then((data) => console.log(data))
```

### `Promise.race`

Метод очень похож на `Promise.all`, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

```javascript
const promiseRace = Promise.race([p1, p2, p3])
promiseRace.then((data) => console.log(data))
```


### `Promise.any`

Метод очень похож на `Promise.race`, но ждёт только первый успешно выполненный промис, из которого берёт результат.

Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью `AggregateError` – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.

```javascript
const promiseAny = Promise.any([p1, p2, p3])
promiseAny.then((data) => console.log(data))
```


### `Promise.allSettled`

Метод `Promise.allSettled` всегда ждёт завершения всех промисов. В массиве результатов будет

`{status: "fulfilled", value: result}` для успешных завершений,
`{status: "rejected", reason: error}` для ошибок.

```javascript
const promiseAllSettled = Promise.allSettled([p1, p2, p3])
promiseAllSettled.then((data) => console.log(data))
```