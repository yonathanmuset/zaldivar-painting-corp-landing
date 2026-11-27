# Project memory

## Product intent & audience

- Sitio web para **Zaldivar Painting**, empresa de pintura.
- Audiencia: clientes potenciales que solicitan servicios de pintura.
- Funcionalidad principal: mostrar videos de trabajos y captar solicitudes de cotización vía formulario que abre la app de correo del usuario.

## Brand personality & voice

- Tono profesional y directo en español.
- Comunicación bilingüe: al menos español e inglés (existen traducciones en ambos idiomas).

## Visual design & UX direction

- **Video spotlight**: el video activo se muestra grande; los demás como miniaturas pequeñas. Al hacer clic en una miniatura, ese video se agranda y se reproduce automáticamente; el anterior se reduce.
- **Responsive**: en móvil, las miniaturas se convierten en una fila horizontal deslizable debajo del video grande.
- **Formulario de contacto** con campos: nombre, correo, teléfono, dirección del proyecto, tipo de servicio (menú desplegable), descripción del proyecto.
- **Envío del formulario**: abre la aplicación de correo del usuario con los datos organizados y listos para enviar al correo de Zaldiver Painting.
- Estructura basada en componentes (`VideoSpotlight`, `ContactForm`).
- Breakpoints responsive definidos en CSS.

## Decisions, constraints & rationale

- Framework: **Vite + React**.
- Internacionalización con traducciones manuales (ES/EN) — se actualizaron traducciones en inglés al agregar el campo de dirección.
- El formulario no usa backend; depende del cliente de correo del usuario para el envío.
- Se verificó la compilación con build tras cada cambio significativo.

## Open questions & assumptions

- **Pendientes propuestos al cliente** (sin confirmar):
  - Adjuntar foto de referencia desde el teléfono.
  - Campo de fecha preferida para el proyecto.
  - Casilla para elegir llamada o texto como método de contacto.
  - Guardar solicitudes en base de datos para no depender solo del correo.
- Se asume que el correo destino de Zaldivar Painting ya está configurado en el formulario.
- No se confirma si hay más idiomas además de ES/EN.