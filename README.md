
Requisitos:
Node.js y React Native CLI.
Android studio.
Visual studio code

Ejecutar la aplicación:
Clona el repositorio con el comando: git clone https://github.com/AleVeron/Kiura-test.git.
Navega al directorio del proyecto y ejecuta el comando: npm install

Inicia el servidor de desarrollo:
Una vez instaladas todas las dependencias ejecutar la aplicacion con el comando : npx react-native run-android
Y seleccionar la opcion : run on Android


Explicación breve de las decisiones tomadas durante el desarrollo

Manejo de estado:
Se utilizó el hook useState de React para manejar el estado local de los likes y los comentarios. Esto permite que la aplicación sea reactiva y actualice la interfaz de usuario cuando cambian los datos.
Los datos de las publicaciones se simulan en un archivo posts.js, sin depender de un backend.

Estructura de componentes:
Se creó un componente Post que encapsula toda la lógica y la presentación de cada publicación. Esto promueve la reutilización del código y hace que sea más fácil mantener la aplicación.
Los componentes de entrada de texto y botones de "Like" se separaron en componentes propios , lo que permite una mayor modularidad y simplifica la lógica en la pantalla principal.
Se utilizó FlatList para renderizar las publicaciones, lo que mejora el rendimiento al manejar listas grandes.

En caso de tener inconvenientes para instalar la app en el emulador ejecutar los siguientes comandos:

cd android 

./gradlew clean 

cd ..

npx react-native run-android
