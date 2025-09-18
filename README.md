# Práctica: Patrones de Diseño en TypeScript

Este proyecto demuestra la implementación de varios patrones de diseño clásicos utilizando TypeScript. Cada archivo contiene un ejemplo práctico y sencillo de cómo aplicar estos patrones en el contexto de gestión de pedidos y reservas en un restaurante.

## Estructura del Proyecto

- [`Factory.ts`](Factory.ts): Implementa el patrón Factory para crear diferentes tipos de pedidos (para comer en el lugar o para llevar) usando la clase `OrderFactory`.
- [`Singleton.ts`](Singleton.ts): Muestra el patrón Singleton con la clase `ReservationManager`, asegurando que solo exista una instancia para la gestión de reservas.
- [`Adapter.ts`](Adapter.ts): Aplica el patrón Adapter para integrar un sistema antiguo de pedidos con una nueva interfaz mediante la clase `OrderAdapter`.
- [`Observer.ts`](Observer.ts): Utiliza el patrón Observer para notificar a diferentes partes interesadas sobre el estado de un pedido con la clase `Order`.
- [`tsconfig.json`](tsconfig.json): Configuración de TypeScript para el proyecto.

## Ejecución

1. Compila los archivos TypeScript:
   ```sh
   npx tsx //Añadir el nombre y extension del archivo que se quiere ejecutar
   ```

## Patrones Implementados

- **Factory**: Crea objetos de diferentes tipos de pedido sin exponer la lógica de creación al cliente.
- **Singleton**: Garantiza una única instancia para la gestión de reservas.
- **Adapter**: Permite que sistemas incompatibles trabajen juntos.
- **Observer**: Permite la suscripción y notificación de cambios de estado en los pedidos.

## Autor

Modelo de exámen para la materia TLP4 hecho por González Cristian David.

---

Puedes consultar cada archivo para ver la implementación específica de cada patrón.
