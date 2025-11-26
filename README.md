# APRENDIA Landing Page

Aplicación web para la plataforma APRENDIA, diseñada para presentar el proyecto y gestionar el registro de personas interesadas en participar.

## Descripción

Este proyecto es una aplicación React moderna que incluye:

- **Landing Page**: Página pública de presentación del proyecto APRENDIA
- **Sistema de Login**: Autenticación para acceso al panel administrativo
- **Panel de Gestión**: Interfaz administrativa para visualizar y gestionar interesados

## Tecnologías Utilizadas

- **React 19.2** - Biblioteca principal de UI
- **Vite 7.2** - Build tool y dev server
- **React Router DOM 7.9** - Enrutamiento de la aplicación
- **TailwindCSS 4.1** - Framework de estilos
- **Framer Motion 12.23** - Animaciones
- **Chart.js 4.5** - Visualización de datos
- **Heroicons 2.0** - Iconografía

## Requisitos Previos

- Node.js 18 o superior
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ICHEJA-PROJECT/landingAPrendia
cd landing-aprendia
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:

Crear un archivo `.env` en la raíz del proyecto basándose en `.env.example`:

```env
VITE_API_CORE=<url-del-backend-principal>
VITE_API_SERVICES_FORM=<url-del-servicio-de-formularios>
```

## Desarrollo

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Proxy de Desarrollo

El proyecto está configurado con un proxy en Vite para facilitar el desarrollo:

- `/api/core/*` - Redirige al backend principal
- `/api/form/*` - Redirige al servicio de formularios

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

## Estructura del Proyecto

```
src/
├── features/           # Módulos de la aplicación
│   ├── landing/       # Landing page pública
│   ├── login/         # Sistema de autenticación
│   └── gestion/       # Panel administrativo
├── common/            # Componentes compartidos
├── core/              # Configuración central
│   ├── api/          # Cliente API
│   ├── env/          # Variables de entorno
│   └── utils/        # Utilidades
└── assets/           # Recursos estáticos
```

### Arquitectura de Componentes

El proyecto sigue el patrón **Atomic Design**:

- **atoms/** - Componentes básicos (botones, inputs, badges)
- **molecules/** - Combinaciones simples (search bar, cards)
- **organisms/** - Componentes complejos (header, sidebar, tables)
- **templates/** - Plantillas de página
- **views/** - Páginas completas

## Características Principales

### Landing Page

- Diseño responsive y moderno
- Animaciones suaves con Framer Motion
- Formulario de registro de interesados
- Selector de municipios y comunidades
- Validación de datos en tiempo real

### Panel de Gestión

- Dashboard con estadísticas y gráficos
- Tabla de interesados con filtros avanzados
- Búsqueda por municipio y comunidad
- Paginación de resultados
- Exportación de datos
- Sistema de autenticación con JWT

### Sistema de API

- Cliente API centralizado con manejo de errores
- Formateo automático de mensajes de validación
- Autenticación mediante tokens JWT
- Interceptores de request/response

## Deployment

### Docker

El proyecto incluye configuración para Docker:

```bash
# Construir la imagen
docker build -t landing-aprendia .

# Ejecutar el contenedor
docker run -p 80:80 landing-aprendia
```

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`.

## Configuración de Nginx

El proyecto incluye una configuración de Nginx (`nginx.conf`) para servir la aplicación en producción con:

- Compresión gzip habilitada
- Caché de assets estáticos
- Fallback a index.html para SPA routing

## Variables de Entorno

### Desarrollo

En desarrollo, el proxy de Vite maneja las rutas `/api/*` automáticamente.

### Producción

En producción, configurar:

- `VITE_API_URL` - URL base de la API (opcional, se usa el proxy por defecto)

## Estilos y Tema

El proyecto utiliza un tema personalizado de TailwindCSS con:

- Colores corporativos: `pink-ia` (#C90166) y `green-ia` (#009887)
- Animaciones personalizadas: fadeInUp, fadeInLeft, fadeInRight
- Efectos 3D en hover para imágenes
- Optimizaciones para dispositivos móviles
- Soporte para `prefers-reduced-motion`

## Guía de Desarrollo

### Barrido de Importaciones (Barrel Exports)

El proyecto utiliza archivos `index.js` para centralizar las exportaciones y simplificar las importaciones:

#### Estructura de Barrels

Cada nivel de componentes tiene su propio `index.js`:

```javascript
// src/common/iu/components/index.js
export * from './atoms'
export * from './molecules'
export * from './organisms'
export * from './templates'

// src/features/gestion/iu/components/atoms/index.js
export { ExportButton } from './exportButton';
export { Badge } from './Badge';
export { SearchInput } from './SearchInput';
// ...
```

#### Uso de Importaciones

```javascript
// ❌ Evitar importaciones directas
import Button from '../../../common/iu/components/atoms/button'

// ✅ Usar barrel exports
import { PrimaryButton } from '../../../common/iu/components'
```

### Organización de Código

#### Estructura de Features

Cada feature sigue esta estructura:

```
features/
└── [feature-name]/
    ├── hooks/              # Custom hooks específicos
    ├── services/           # Lógica de negocio y API calls
    ├── utils/              # Utilidades específicas
    ├── iu/                 # Interfaz de usuario
    │   ├── components/     # Componentes (Atomic Design)
    │   ├── hooks/          # Hooks de UI
    │   ├── layouts/        # Layouts de la feature
    │   └── views/          # Páginas/vistas
    └── index.js            # Barrel export
```

#### Atomic Design Pattern

- **atoms/**: Componentes básicos sin dependencias (Button, Input, Badge)
- **molecules/**: Combinaciones simples de átomos (SearchBar, Card)
- **organisms/**: Componentes complejos con lógica (Header, Table, Sidebar)
- **templates/**: Plantillas de página con estructura
- **views/**: Páginas completas con datos y lógica

### Cliente API

#### Uso del ApiClient

El proyecto incluye un cliente API centralizado en `src/core/api/apiClient.js`:

```javascript
import { apiClient } from '../../../core/api/apiClient';

// GET request
const data = await apiClient.get('/endpoint');

// POST request
const result = await apiClient.post('/endpoint', { data });

// PUT request
await apiClient.put('/endpoint/:id', { data });

// DELETE request
await apiClient.delete('/endpoint/:id');
```

#### Características del ApiClient

- Manejo automático de tokens JWT
- Formateo de errores de validación
- Traducción de mensajes al español
- Configuración automática de headers
- Proxy automático en desarrollo

### Autenticación

#### Sistema de Auth

El sistema de autenticación se maneja mediante `authService.js`:

```javascript
import { loginUser, logoutUser, isAuthenticated, getCurrentUser } from '../services/authService';

// Login
const result = await loginUser(username, password);
if (result.success) {
  // Token guardado automáticamente en localStorage
}

// Verificar autenticación
if (isAuthenticated()) {
  // Usuario autenticado
}

// Obtener usuario actual
const user = getCurrentUser();

// Logout
logoutUser();
```

#### Rutas Protegidas

Las rutas protegidas usan el componente `ProtectedRoute`:

```javascript
<Route
  path="/gestion"
  element={
    <ProtectedRoute>
      <GestionLayout />
    </ProtectedRoute>
  }
>
  {/* Rutas hijas */}
</Route>
```

### Manejo de Errores

#### Formateo de Errores

El proyecto incluye un formateador de errores en `src/core/utils/errorFormatter.js`:

```javascript
import { formatValidationMessage } from '../../../core/utils/errorFormatter';

// Traduce mensajes de validación del backend
const message = formatValidationMessage('numeroTelefono must be longer than or equal to 10 characters');
// Resultado: "El número de teléfono debe tener al menos 10 caracteres"
```

#### Componente Toast

Para mostrar notificaciones al usuario:

```javascript
import { Toast } from '../../../common/iu/components';

<Toast
  message="Operación exitosa"
  type="success" // success | error | warning | info
  onClose={() => setShowToast(false)}
/>
```

### Custom Hooks

El proyecto incluye varios hooks personalizados:

#### Hooks de Gestión

```javascript
// Paginación
import { usePagination } from '../hooks/usePagination';
const { currentPage, totalPages, goToPage, nextPage, prevPage } = usePagination(data, itemsPerPage);

// Filtros
import { useFilters } from '../hooks/useFilters';
const { filters, setFilter, clearFilters } = useFilters();

// Datos de tabla
import { useTableData } from '../hooks/useTableData';
const { data, loading, error, refresh } = useTableData(endpoint);
```

#### Hooks de Animación

```javascript
// Parallax scroll
import { useScrollParallax } from '../hooks/useScrollParallax';
const offset = useScrollParallax(speed);

// Spring animations
import { useSpringAnimation } from '../hooks/useSpringAnimation';
const springProps = useSpringAnimation(trigger);
```

### Estilos y Temas

#### Variables CSS Personalizadas

```css
/* Colores corporativos */
--color-pink-ia: #C90166;
--color-green-ia: #009887;
```

#### Clases de Utilidad

```css
/* Animaciones */
.animate-fade-in-up
.animate-fade-in-left
.animate-fade-in-right

/* Delays */
.delay-100
.delay-200
.delay-300

/* Efectos de imagen */
.image-hover
.image-3d-hover
```

### Convenciones de Código

#### Nomenclatura

- **Componentes**: PascalCase (`UserCard.jsx`, `SearchInput.jsx`)
- **Funciones/Variables**: camelCase (`handleSubmit`, `userData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Archivos de servicio**: camelCase (`authService.js`, `gestionService.js`)

#### Estructura de Componentes

```javascript
import { useState, useEffect } from 'react';
import { ComponenteDependencia } from '../path';

const MiComponente = ({ prop1, prop2 }) => {
  // 1. Hooks de estado
  const [state, setState] = useState(initialValue);
  
  // 2. Hooks de efecto
  useEffect(() => {
    // lógica
  }, [dependencies]);
  
  // 3. Funciones de manejo
  const handleAction = () => {
    // lógica
  };
  
  // 4. Renderizado
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default MiComponente;
```

#### Servicios

```javascript
import { apiClient } from '../../../core/api/apiClient';

/**
 * Descripción del servicio
 */
export const nombreServicio = async (params) => {
  try {
    const data = await apiClient.post('/endpoint', params);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

### Validación de Formularios

#### Validación en Tiempo Real

```javascript
const [errors, setErrors] = useState({});

const validateField = (name, value) => {
  let error = '';
  
  switch(name) {
    case 'email':
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Email inválido';
      }
      break;
    case 'telefono':
      if (value.length !== 10) {
        error = 'El teléfono debe tener 10 dígitos';
      }
      break;
  }
  
  setErrors(prev => ({ ...prev, [name]: error }));
};
```

## Linting

El proyecto usa ESLint con configuración para React:

```bash
npm run lint
```

### Reglas Personalizadas

- Variables no usadas que empiecen con mayúscula o guión bajo son ignoradas
- Configuración para React Hooks
- Soporte para JSX
- ECMAScript 2020+

