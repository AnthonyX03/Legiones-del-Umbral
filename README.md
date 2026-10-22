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
- Sistema de sonidos procedurales (Web Audio API) con mute y volumen.
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


## Mejoras de la v0.2.0

- Efectos de sonido generados en tiempo real (sin archivos de audio externos).
- Controles de sonido y volumen en Ajustes.
- Feedback sonoro en combate, tienda, sobres, gachapón y navegación.

## Ideas de mejoras futuras

### Jugabilidad
- **Modo campaña / mapa de nodos** con jefes y recompensas por etapa.
- **Sinergias de facción** (bonus si 3+ unidades de la misma facción).
- **Subida de nivel / fusión** de unidades para progresión a largo plazo.
- **Equipamiento o runas** equipables a unidades o al comandante.
- **Modo PvP asíncrono** (defender con un escuadrón fijo guardado en JSON compartible).
- **Eventos diarios / semanales** con misiones (ganar X combates, abrir sobres, etc.).
- **Más comandantes y unidades legendarias** con habilidades activas (no solo pasivas).
- **Velocidad de combate** (1x / 2x / 3x) y opción de saltar animación.

### Audio y feedback
- Música de fondo ambiental (loops cortos generados o con archivos ligeros).
- Sonidos distintos según rareza al sacar unidades (épico/legendario más espectacular).
- Vibración háptica en móvil al ganar o al abrir sobres.

### Técnico / UX
- Importar partida desde JSON (además de exportar).
- Temas visuales (claro / oscuro / alto contraste).
- Tutorial interactivo para la primera sesión.
- Log de combate expandible y exportable.
- Estadísticas globales (daño total, unidades más usadas, racha de victorias).
- Offline-first más robusto y badges de "instalado" en PWA.
- Internacionalización (i18n) a inglés y otros idiomas.


## v0.3.0 — Gran actualización

- **Campaña** de 10 etapas con 3 jefes y recompensas escaladas.
- **Sinergias de facción** (3+ unidades de la misma facción).
- **Niveles de unidad** (1–10) con XP por combate y bonus de stats.
- **Misiones diarias** rotativas con recompensas.
- **Estadísticas** (victorias, rachas, daño, uso de unidades…).
- **Velocidad de combate** 1x / 2x / 3x y botón Saltar.
- **Importar partida** desde JSON.
- Más unidades (legendarios y épicos nuevos) y un comandante extra.
- Sonidos por rareza al abrir sobres/gachapón, vibración háptica y toggle de música ambiental.

### Pendiente / siguiente iteración
- Equipamiento o runas completas.
- Habilidades activas con botón manual (ahora siguen siendo automáticas en combate).
- Música más rica y temas visuales.
