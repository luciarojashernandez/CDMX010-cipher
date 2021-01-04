#  BlockNotes (prototipo)

**Introducción**

La aplicación blockNotes ha sido diseñada con la finalidad de crear un bloc de notas que contiene un sistema de cifrado (basado en el cifrado César) que le permite al usuario cifrar y descifrar cada nota que escribe (con la oportunidad de tener 13 códigos diferentes). 

El objetivo fue el de crear una app que le permita a los usuarios mantener de manera segura sus notas (en las que pueden incluir escritos importantes, contraseñas o simples anotaciones).

###### -Acerca del cifrado caesar

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.


**Fases**
###### - Definiendo el producto
*** Quiénes son los principales usuarios de producto.**
El target al que está enfocado son jóvenes de entre 18 y 35 años que desean sentir la seguridad de privacidad al momento de escribir sus notas.

*** Cuáles son los objetivos de estos usuarios en relación con el producto.**
El objetivo del usuario que utiliza esta app es el de mantener a salvo sus contraseñas, notas, pensamientos, etc.

*** Cómo es que el producto está resolviendo los problemas del usuario.**
En un mundo en el que la tecnología rebasa la privacidad de las personas, tener una app en la que el usuario sienta la seguridad de que puede guardar notas importantes con un cifrado, puede ser de gran ayuda.

###### - Diseño del prototipo
Se desarrolló el diseño de la interfaz pensando y entendiendo las necesidades del usuario. Dentro de estas necesidades se priorizó la rapidez para lograr el objetivo (escribir y encriptar una nota), por lo tanto, sólo se desarrolaron 3 pantallas:

	Inicio: Se muestra el logo y la bienvenida al usuario. En una segunda etapa se implementará el password para acceder.
![INICIO](https://user-images.githubusercontent.com/73972584/103510555-1a7ea600-4e2b-11eb-8b29-4b7ef1031020.PNG)

	Nueva nota: El usuario puede escribir una nota a la vez y encriptarla. En la segunda etapa se agregará el botón de aguradar.
![NUEVANOTA](https://user-images.githubusercontent.com/73972584/103510897-a98bbe00-4e2b-11eb-9191-428724dbdf33.PNG)

	Mis notas: El usuario podrá ver sus notas guardadas. (Aún no se desarrolla).
![MISNOTAS](https://user-images.githubusercontent.com/73972584/103510952-be685180-4e2b-11eb-9bc7-9a91ae3b0608.PNG)

###### - Desarrollo del código
- Se creó la interfaz con ayuda de HTML y CSS.
- Se estructuró con JS.
-  Usa el alfabeto simple (solamente mayúsculas, minúsculas y sin ñ):
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- La interfaz le permite al usuario:
1. Elegir un desplazamiento (_offset_) indicando cuántas posiciones quiere que el cifrado desplace cada caracter (13 opciones).
2. Insertar una nota (texto) que quiera cifrar.
3. Ver el resultado del mensaje cifrado.
4. Insertar un mensaje (texto) a descifrar.
5. Ver el resultado del mensaje descifrado.
