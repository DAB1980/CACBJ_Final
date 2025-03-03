-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2024 a las 19:57:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cac_bj_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_pago`
--

CREATE TABLE `medios_pago` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `subtitle` varchar(256) NOT NULL,
  `date` date DEFAULT NULL,
  `category` varchar(256) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `title`, `subtitle`, `date`, `category`, `content`, `img`) VALUES
(4, 'Los penales definieron la clasficación', 'Boca empató 1-1 con Estudiantes y luego cayó en la tanda desde los 12 pasos', '2024-04-23', 'Fútbol', 'Como en 2021, cuando cayó con Racing tras haber eliminado a River en cuartos, Boca quedó fuera de la instancia decisiva de la Copa de Liga al perder -también por penales en esta oportunidad- frente a Estudiantes, en el estadio Mario Kempes. Los 90 minutos concluyeron 1-1 y en la serie de tiros desde los 12 pasos se impusieron los platenses por 3-1\nEl equipo de Diego Martínez se mostró superior durante el primer tiempo y logró establecer la diferencia cerca del cierre, con una buena acción colectiva que remató Miguel Merentiel tras un centro de Luis Advíncula. En ese período, al cabo de un tumulto generalizado, el árbitro Nazareno Arasa sacó una sola amarilla: a Cristian Lema.\nEsa tarjeta acabaría por ser determinante, pues el defensor recibió otra por cometer una falta dentro del área y fue expulsado. Estudiantes llegó al empate a través del penal convertido por el colombiano Edwin Cetré y luego sacó ventaja en la definición.\nBoca volverá a jugar el miércoles próximo, cuando visite a Sportivo Trinidense en Asunción, por la cuarta fecha de la Copa Sudamericana.', './uploads/noticia1_img_lg.jpg'),
(5, 'Voces desde Córdoba', 'Diego Martínez analizó el partido que jugaron Boca y Estudiantes', '2024-04-24', 'Fúbtol', 'Muchas sensaciones. Bronca, impotencia. Sensación de injusticia. Me parece que el equipo hizo un gran partido, sobre todo el primer tiempo. Prácticamente no estábamos sufriendo el segundo y la expulsión y el penal terminaron siendo muy condicionantes para el desarrollo del juego. El equipo lo aguantó con el corazón, con mucho compromiso, y la tristeza de los penales por haber quedado eliminado, me parece, que de manera injusta.\nEs durísimo quedar eliminado de esta manera. Da mucha bronca. Da tranquilidad haber hecho un muy buen partido. No habíamos priorizado la Copa de la Liga, pero sí se dio de esta manera la rotación para los partidos que tuvimos.\nNos falta seguir creciendo, profundizar la idea, ser un equipo que domina a los rivales en cada fase. Por ejemplo, en Fortaleza nos dio bronca el gran primer tiempo que hizo el equipo y en el inicio del segundo pudimos haber tomado mejores decisiones.', './uploads/noticia2_img_lg.jpg'),
(6, 'Caída contra Fortaleza en Brasil', 'Boca resignó el invicto en la Copa Sudamericana', '2024-04-26', 'Futbol', 'Como en 2021, cuando cayó con Racing tras haber eliminado a River en cuartos, Boca quedó fuera de la instancia decisiva de la Copa de Liga al perder -también por penales en esta oportunidad- frente a Estudiantes, en el estadio Mario Kempes. Los 90 minutos concluyeron 1-1 y en la serie de tiros desde los 12 pasos se impusieron los platenses por 3-1.\nEn su tercera presentación por la Copa Sudamericana, Boca perdió 4-2 ante Fortaleza -subcampeón de la edición 2023- en el estadio Castelao. Los brasileños son líderes del Grupo D, después de haber ganado los tres partidos. El Xeneize suma cuatro puntos y en la próxima fecha, el miércoles 8 de mayo, visitará en Paraguay a Sportivo Trinidense, que tiene tres.\nFortaleza hizo la diferencia en el arranque del complemento, con otro gol de Lucero y un doblete de Pikachu. Descontó Kevin Zenón, uno de los titulares que ingresaron durante el segundo período. Sobre el epílogo fue expulsado Kayser, delantero del equipo tricolor.\nPara Boca, sin descanso desde el triunfo ante River, la actividad continúa: el próximo martes 30, en Córdoba, buscará el pase a la final de la Copa de Liga contra Estudiantes de La Plata.', './uploads/noticia3_img_lg.jpg'),
(7, 'Boca lo dio vuelta, ganó el clásico y está en semifinales', 'Festejado triunfo 3-2 ante River en Córdoba, por los cuartos de la Copa de Liga', '2024-04-24', 'Fútbol', 'Un Boca fuerte de ánimo y con muchos recursos futbolísticos se sobrepuso a una temprana desventaja, revirtió el marcador, terminó ganando 3-2 en Córdoba una nueva edición del superclásico argentino y avanzó así a las semifinales de la Copa de Liga. El rival en esa instancia será Estudiantes. Previamente, este jueves, los Xeneizes visitarán a Fortaleza en Brasil por la Sudamericana.\nLuego de que Miguel Borja adelantara a River, Boca se hizo dueño del balón y empezó a merodear el área contraria. La insistente búsqueda tuvo premio sobre el cierre de la primera etapa, cuando Miguel Merentiel conectó un centro de Luis Advíncula para lograr el empate parcial.\nYa en el segundo período, Edinson Cavani de cabeza -luego de un centro de Kevin Zenón- y otra vez Merentiel, al cabo de una veloz réplica que él mismo había iniciado, colocaron un 3-1 que sentenció la historia. El descuento de Paulo Díaz, ya en tiempo agregado, solo decoró las cifras.\nUna multitud celebró en el Mario Kempes la victoria boquense, la tercera consecutiva este año ante los denominados grandes. Las anteriores habían sido 4-2 a Racing y 2-1 a San Lorenzo.', './uploads/noticia4_img_lg.jpg'),
(8, 'Vuelta con triunfo a la Bombonerita', 'Boca superó a Unión por 95-79. Vega y Vildoza, los destacados', '2024-04-01', 'Básquet', 'Con muy buenos rendimientos en ataque, Boca venció 95-79 a Unión y llegó a 18 triunfos en la fase regular de Liga Nacional. Fue el regreso del equipo a La Bombonerita, 40 días después del último partido, y el debut de Gonzalo Pérez como entrenador principal, en reemplazo de Carlos Duro.\nEl base José Vildoza (22 puntos, ocho rebotes, cinco asistencias) y el alero Sebastián Vega (25, siete, dos) fueron las figuras de los locales, que dominaron la lucha aérea (39-31) y provocaron 11 pérdidas del rival.\nLa próxima presentación de Boca será el lunes 29, nuevamente de local, frente a Peñarol de Mar del Plata', './uploads/noticia5_img_lg.jpg'),
(16, 'prueba100', 'prueba', '2024-06-19', 'algo', 'editar 100', './uploads/Logo_oficial_UNRN.jpg'),
(20, 'dsd', 'dasdas', '2024-06-14', 'asdasd', 'dasdsadasd', './uploads/286.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantel_fm`
--

CREATE TABLE `plantel_fm` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `apellido` varchar(256) NOT NULL,
  `pos` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(10) NOT NULL,
  `provincia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `provincia`) VALUES
(1, 'Buenos Aires'),
(2, 'Buenos Aires-GBA'),
(3, 'Capital Federal'),
(4, 'Catamarca'),
(5, 'Chaco'),
(6, 'Chubut'),
(7, 'Córdoba'),
(8, 'Corrientes'),
(9, 'Entre Ríos'),
(10, 'Formosa'),
(11, 'Jujuy'),
(12, 'La Pampa'),
(13, 'La Rioja'),
(14, 'Mendoza'),
(15, 'Misiones'),
(16, 'Neuquén'),
(17, 'Río Negro'),
(18, 'Salta'),
(19, 'San Juan'),
(20, 'San Luis'),
(21, 'Santa Cruz'),
(22, 'Santa Fe'),
(23, 'Santiago del Estero'),
(24, 'Tierra del Fuego'),
(25, 'Tucumán');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `apellido` varchar(256) NOT NULL,
  `mail` varchar(256) NOT NULL,
  `idprovincia` int(10) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `fecha_alta` date DEFAULT NULL,
  `fecha_baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`id`, `nombre`, `apellido`, `mail`, `idprovincia`, `activo`, `fecha_alta`, `fecha_baja`) VALUES
(7, 'david', 'baffoni', 'sasa', 25, 1, '2024-06-22', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios_pagos`
--

CREATE TABLE `socios_pagos` (
  `id` int(11) NOT NULL,
  `idsocio` int(11) NOT NULL,
  `fecha_pago` date NOT NULL,
  `monto` decimal(10,0) NOT NULL,
  `idmedio_pago` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `apellido` varchar(256) NOT NULL,
  `mail` varchar(256) NOT NULL,
  `alias` varchar(256) NOT NULL,
  `iduser_rol` int(11) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `mail`, `alias`, `iduser_rol`, `password`) VALUES
(3, 'pepe', 'pepe', 'pepe@gmail.com', 'pepe', 1, ''),
(4, 'pepe2', 'pepe', 'pepe@gmail.com', 'pepe', 1, ''),
(8, 'matias', 'perez', 'mp@gmail.com', 'mp', 2, '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_roles`
--

CREATE TABLE `users_roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_roles`
--

INSERT INTO `users_roles` (`id`, `rol`) VALUES
(1, 'Administrador'),
(2, 'Editor'),
(3, 'Lector');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `medios_pago`
--
ALTER TABLE `medios_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plantel_fm`
--
ALTER TABLE `plantel_fm`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_provincias` (`idprovincia`);

--
-- Indices de la tabla `socios_pagos`
--
ALTER TABLE `socios_pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_medios_pago` (`idmedio_pago`),
  ADD KEY `fk_socios` (`idsocio`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_roles` (`iduser_rol`);

--
-- Indices de la tabla `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `medios_pago`
--
ALTER TABLE `medios_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `plantel_fm`
--
ALTER TABLE `plantel_fm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `socios`
--
ALTER TABLE `socios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `socios_pagos`
--
ALTER TABLE `socios_pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `socios`
--
ALTER TABLE `socios`
  ADD CONSTRAINT `fk_provincias` FOREIGN KEY (`idprovincia`) REFERENCES `provincias` (`id`);

--
-- Filtros para la tabla `socios_pagos`
--
ALTER TABLE `socios_pagos`
  ADD CONSTRAINT `fk_medios_pago` FOREIGN KEY (`idmedio_pago`) REFERENCES `medios_pago` (`id`),
  ADD CONSTRAINT `fk_socios` FOREIGN KEY (`idsocio`) REFERENCES `socios` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`iduser_rol`) REFERENCES `users_roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
