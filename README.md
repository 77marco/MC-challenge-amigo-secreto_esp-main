# 🤝 Amigo Secreto

Un proyecto web interactivo desarrollado con **HTML**, **CSS** y **JavaScript** que permite organizar sorteos de "amigo secreto" de forma fácil, rápida y divertida.

## 📋 Descripción

Esta aplicación web facilita la organización de intercambios de regalos o actividades de "amigo secreto". Los usuarios pueden agregar nombres de participantes y realizar un sorteo aleatorio para determinar quién será el "amigo secreto" elegido, jojojo ¡a jugar!, chi chi chi le le le ¡Viva Chile!.

## ✨ Características

- **Interfaz intuitiva**: Diseño simple y fácil de usar
- **Agregar participantes**: Permite ingresar múltiples nombres a la lista
- **Validación de datos**: Verifica que no se ingresen nombres vacíos
- **Lista dinámica**: Muestra todos los participantes agregados en tiempo real
- **Sorteo aleatorio**: Selecciona un ganador de forma completamente aleatoria
- **Resultado destacado**: Muestra el nombre del ganador de manera clara y visible

## 🚀 Funcionalidades

### ➕ Agregar Nombres
- Ingresa los nombres de los participantes en el campo de texto
- Valida que el nombre no esté vacío
- Añade automáticamente el nombre a la lista visible

### 📝 Gestión de Lista
- Visualiza todos los nombres agregados
- Lista actualizada dinámicamente
- Interfaz limpia y organizada

### 🎲 Sorteo
- Requiere mínimo 2 participantes para realizar el sorteo
- Algoritmo de selección completamente aleatorio
- Resultado mostrado de forma destacada

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (Vanilla)**: Lógica de la aplicación y manipulación del DOM

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js             # Lógica JavaScript
└── README.md          # Documentación del proyecto
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias adicionales

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd amigo-secreto
   ```

2. **Abrir la aplicación**
   - Abre el archivo `index.html` en tu navegador web preferido
   - O arrastra el archivo directamente al navegador

3. **Usar la aplicación**
   - Escribe el nombre de un participante en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - Repite el proceso para agregar más participantes
   - Una vez que tengas al menos 2 nombres, haz clic en "Sortear amigo"
   - ¡El resultado aparecerá en pantalla!

## 🎯 Cómo Funciona

1. **Entrada de datos**: El usuario ingresa nombres a través de un campo de texto
2. **Validación**: La aplicación verifica que el nombre no esté vacío
3. **Almacenamiento**: Los nombres se guardan en un array JavaScript
4. **Visualización**: La lista se actualiza dinámicamente en el DOM
5. **Sorteo**: Se genera un índice aleatorio para seleccionar un nombre
6. **Resultado**: Se muestra el nombre seleccionado de forma destacada

## 🔧 Funciones Principales

### `agregarAmigo()`
- Obtiene el valor del campo de entrada
- Valida que no esté vacío
- Añade el nombre al array de amigos
- Actualiza la visualización de la lista
- Limpia el campo de entrada

### `actualizarListaAmigos()`
- Limpia la lista actual en el DOM
- Recorre el array de amigos
- Crea elementos de lista dinámicamente
- Actualiza la interfaz visual

### `sortearAmigo()`
- Verifica que haya al menos 2 participantes
- Genera un número aleatorio
- Selecciona el amigo correspondiente
- Muestra el resultado en pantalla

## 🎨 Personalización

El proyecto está diseñado para ser fácilmente personalizable:

- **Estilos**: Modifica `style.css` para cambiar colores, fuentes y diseño
- **Funcionalidades**: Extiende `app.js` para agregar nuevas características
- **Interfaz**: Actualiza `index.html` para modificar la estructura

## 🐛 Solución de Problemas

### Problemas Comunes

**El sorteo no funciona**
- Verifica que hayas agregado al menos 2 nombres
- Asegúrate de que JavaScript esté habilitado en tu navegador

**Los nombres no se agregan**
- Confirma que el campo no esté vacío
- Revisa que no haya espacios en blanco únicamente

**La página no se carga**
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de abrir el archivo `index.html`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Marco Corral**
- GitHub: [@77marco](https://github.com/77marco)
- Email: marco.corral77@gmail.com

## 🙏 Agradecimientos

- Proyecto desarrollado como parte del aprendizaje en desarrollo web

---

⭐ Si te gusta este proyecto, ¡dame una estrella en GitHub!