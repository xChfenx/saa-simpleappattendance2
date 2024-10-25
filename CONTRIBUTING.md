# Cómo contribuir al proyecto

Guía para colaborar y realizar pull requests:

1. Primero verifica que no existan bugs duplicados y ya solucionados.
2. Haz un fork del repositorio y clónalo localmente.
3. Crea una nueva rama para tu contribución.
4. Haz los tests correspondientes.
5. Haz push a tu fork y luego haz un pull request.

* ### Asegúrate de que los tests se ejecuten exitosamente.

## Convención de mensajes de commits:
  * Usa el imperativo, tiempo presente: “cambiar” en vez de "cambiado" o "cambios"

  * Comienza los commits en mayúscula para una mejor legibilidad.

  * Haz commits de los arreglos de bugs con el sufijo `fix: …`

  * Haz commits de nuevas características con el prefijo `feat: …`

  * Haz commits de cambios muy grandes con el sufijo `BREAKING CHANGE:` en el cuerpo del mensaje del commit.

  ---

## Significado de cada sufijo:

* `fix: …` Es para cambios pequeños. Aumentará le versión del arreglo, por  ejemplo: 1.2.3 → 1.2.4

* `feat: …` Es para cambios medianos. Aumentará la versión de la característica, ejemplo. 1.2.3 → 1.3.0

* `BREAKING CHANGE: …` Es para cambios grandes. Estos cambios romperán la compatibilidad con versiones anteriores. Aumentará la versión del BREAKING CHANGE, e.g. 1.2.3 → 2.0.0

* `docs: …` Es para cambios en documentos como README.md, CONTRIBUTING.md o cualquier otro.

* `refactor: …` Es para cambios como comentarios, eliminación de líneas de código sin usar, etc.

## Añade y confirma Tus cambios
* git add .
* git commit -m "descripcion del commit"

## Haz push a tu fork
* git push origin tu-rama-de-contribucion