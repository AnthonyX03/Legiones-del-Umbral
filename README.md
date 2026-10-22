# Legiones del Umbral

Primera versión jugable de un juego web de combate automático y colección de unidades, preparado como PWA para PC y móvil.

## Funciones incluidas

- Combate automático con escuadrones de hasta 8 unidades y un comandante.
- Estadísticas de vida, ataque, defensa y velocidad.
- Cuatro rarezas: común, raro, épico y legendario.
- Habilidades de unidades raras, épicas y legendarias.
- Comandantes con pasivas de combate.
- Colección, filtros, búsqueda y gestión del escuadrón.
- Tienda diaria con rotación a las 00:00 según la hora local del dispositivo.
- Sobres con 3 unidades, recompensa por victoria y compra con créditos.
- Gachapón individual y de diez invocaciones, probabilidades visibles y garantía de rareza.
- Guardado local, exportación de partida y ajustes.
- PWA con manifiesto, icono y service worker para caché/offline.

## Probar en local

Se recomienda usar un servidor HTTP local (no abrir `index.html` directamente), ya que el service worker requiere HTTP/HTTPS.

Con Python instalado:

```bash
python -m http.server 8080
```

Después abre http://localhost:8080

## Publicar en GitHub Pages

1. Descomprime el ZIP.
2. Sube `index.html`, `styles.css`, `game.js`, `manifest.json`, `sw.js`, `assets/` y este README a la raíz de la rama `main`.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages publique el sitio.

El proyecto usa rutas relativas para funcionar en un repositorio de GitHub Pages alojado bajo una subruta.

## Guardado

El progreso se guarda en `localStorage` del navegador/dispositivo. No hay servidor ni sincronización entre dispositivos en esta versión. Usa **Ajustes → Exportar partida guardada** para descargar una copia JSON.

## Notas de la versión inicial

- La economía y las estadísticas son valores iniciales de prototipo y se pueden equilibrar.
- La tienda se renueva a medianoche según el reloj local del dispositivo.
- El combate es automático; el jugador configura su escuadrón y el comandante.
- Las ilustraciones se representan mediante glifos y efectos CSS para mantener el paquete ligero y evitar depender de recursos gráficos externos.
- La tipografía web puede cargar desde Google Fonts cuando hay conexión; el juego sigue siendo funcional con fuentes de sistema sin conexión.
