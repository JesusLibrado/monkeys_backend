-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: 172.17.0.2    Database: monkeys
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ConceptoFactura`
--

DROP TABLE IF EXISTS `ConceptoFactura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ConceptoFactura` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facturaId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int NOT NULL,
  `productoId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `servicioId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ConceptoFactura_facturaId_fkey` (`facturaId`),
  KEY `ConceptoFactura_productoId_fkey` (`productoId`),
  KEY `ConceptoFactura_servicioId_fkey` (`servicioId`),
  CONSTRAINT `ConceptoFactura_facturaId_fkey` FOREIGN KEY (`facturaId`) REFERENCES `Factura` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `ConceptoFactura_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `ConceptoFactura_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `Servicio` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ConceptoFactura`
--

LOCK TABLES `ConceptoFactura` WRITE;
/*!40000 ALTER TABLE `ConceptoFactura` DISABLE KEYS */;
INSERT INTO `ConceptoFactura` VALUES ('fdkb2vze1yesdz4vkj947pbo','twu0i0rply3x162wkgn2g4x4',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 00:01:31.532','2025-06-12 00:01:31.532'),('lxtf36ec0mwsttglbdidgv3n','rkuo1sa3vwwro1suxo5p2x5v',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-11 23:20:08.702','2025-06-11 23:20:08.702'),('so8zfr1oa2hw9uow8apu72pz','umi1d65gtb5sm5xcky50uf3g',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 00:00:58.708','2025-06-12 00:00:58.708');
/*!40000 ALTER TABLE `ConceptoFactura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleado`
--

DROP TABLE IF EXISTS `Empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Empleado` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usuarioId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horaEntrada` datetime(3) DEFAULT NULL,
  `horaSalida` datetime(3) DEFAULT NULL,
  `rol` enum('BARBERO','RECEPCIONISTA') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Empleado_usuarioId_key` (`usuarioId`),
  CONSTRAINT `Empleado_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES ('c26ez0hpm0nywjx1khazro7m','Uriel','Velasco Galvan','x4ochaio6ydr2uu6o3tzgxnt',NULL,NULL,'BARBERO','2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('d14kta3sc8wryzz0bvkqio93','Jimena','Landa Hernandez','jt1v37u52wbivjqhsjiadnjx',NULL,NULL,'BARBERO','2025-06-11 23:16:05.407','2025-06-11 23:16:05.407'),('i11hm0vyuyksve4bku6anlv3','Javier','Gonzalez Hernandez','j144p2ns4unhxukk6mls4dzq',NULL,NULL,'BARBERO','2025-06-11 23:16:05.394','2025-06-11 23:16:05.394'),('qgrx1gg2c89lye9yhditmkqc','Oswaldo','Ruiz Hernandez','nd4uxhry1i4sh37twrfe9g6f',NULL,NULL,'BARBERO','2025-06-11 23:16:05.400','2025-06-11 23:16:05.400');
/*!40000 ALTER TABLE `Empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Estacion`
--

DROP TABLE IF EXISTS `Estacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Estacion` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero` int NOT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT '1',
  `empleadoId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Estacion_numero_key` (`numero`),
  UNIQUE KEY `Estacion_empleadoId_key` (`empleadoId`),
  CONSTRAINT `Estacion_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `Empleado` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Estacion`
--

LOCK TABLES `Estacion` WRITE;
/*!40000 ALTER TABLE `Estacion` DISABLE KEYS */;
INSERT INTO `Estacion` VALUES ('d76vqxzgnigk6fnjx16rrlgu',3,1,'qgrx1gg2c89lye9yhditmkqc','2025-06-11 23:16:05.400','2025-06-11 23:21:24.627'),('e6mgn0x0pchwwlgsm12qc9fs',1,1,'c26ez0hpm0nywjx1khazro7m','2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('n6egu52cvs7qz8pvppno5y14',2,1,'i11hm0vyuyksve4bku6anlv3','2025-06-11 23:16:05.394','2025-06-12 00:01:37.032'),('wz51mlp5sgkhobzr184ecf72',4,1,'d14kta3sc8wryzz0bvkqio93','2025-06-11 23:16:05.407','2025-06-12 00:06:30.668');
/*!40000 ALTER TABLE `Estacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Evento`
--

DROP TABLE IF EXISTS `Evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Evento` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facturaId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estatus` enum('EN_PROGRESO','TERMINADO','PAGADO','CANCELADO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombreCliente` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estacionId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Evento_facturaId_key` (`facturaId`),
  KEY `Evento_estacionId_fkey` (`estacionId`),
  CONSTRAINT `Evento_estacionId_fkey` FOREIGN KEY (`estacionId`) REFERENCES `Estacion` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Evento_facturaId_fkey` FOREIGN KEY (`facturaId`) REFERENCES `Factura` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Evento`
--

LOCK TABLES `Evento` WRITE;
/*!40000 ALTER TABLE `Evento` DISABLE KEYS */;
INSERT INTO `Evento` VALUES ('ais7u7b51pycf4vt26s4zzzv','umi1d65gtb5sm5xcky50uf3g','PAGADO','cliente3','wz51mlp5sgkhobzr184ecf72','2025-06-11 23:24:54.802','2025-06-12 00:01:06.220'),('l8oie1v0pqrzhb9u5tb6pqj0','rkuo1sa3vwwro1suxo5p2x5v','PAGADO','cliente1','d76vqxzgnigk6fnjx16rrlgu','2025-06-11 23:19:13.477','2025-06-11 23:21:24.627'),('q7eji9rcx25q9nr2r0zlj60g','twu0i0rply3x162wkgn2g4x4','PAGADO','cliente2','n6egu52cvs7qz8pvppno5y14','2025-06-11 23:24:40.714','2025-06-12 00:01:37.032');
/*!40000 ALTER TABLE `Evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Factura`
--

DROP TABLE IF EXISTS `Factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Factura` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `folio` int NOT NULL AUTO_INCREMENT,
  `total` double NOT NULL DEFAULT '0',
  `descuento` double DEFAULT NULL,
  `estatus` enum('CREADA','PAGADA','CANCELADA') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Factura_folio_key` (`folio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Factura`
--

LOCK TABLES `Factura` WRITE;
/*!40000 ALTER TABLE `Factura` DISABLE KEYS */;
INSERT INTO `Factura` VALUES ('rkuo1sa3vwwro1suxo5p2x5v',1,150,NULL,'PAGADA','2025-06-11 23:19:13.477','2025-06-11 23:21:24.620'),('twu0i0rply3x162wkgn2g4x4',2,180,NULL,'PAGADA','2025-06-11 23:24:40.714','2025-06-12 00:01:37.025'),('umi1d65gtb5sm5xcky50uf3g',3,180,NULL,'PAGADA','2025-06-11 23:24:54.802','2025-06-12 00:01:06.212');
/*!40000 ALTER TABLE `Factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pago`
--

DROP TABLE IF EXISTS `Pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pago` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facturaId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `montoRecibido` double NOT NULL,
  `montoDevuelto` double DEFAULT NULL,
  `metodoPago` enum('TRANSFERENCIA','EFECTIVO','TARJETA_CREDITO','TARJETA_DEBITO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `estatus` enum('REALIZADO','PENDIENTE','CANCELADO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `comisionPagoTarjeta` double NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Pago_facturaId_key` (`facturaId`),
  CONSTRAINT `Pago_facturaId_fkey` FOREIGN KEY (`facturaId`) REFERENCES `Factura` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pago`
--

LOCK TABLES `Pago` WRITE;
/*!40000 ALTER TABLE `Pago` DISABLE KEYS */;
INSERT INTO `Pago` VALUES ('aix03cp1o9lj6jwj8wuc7mwo','umi1d65gtb5sm5xcky50uf3g',180,0,'TRANSFERENCIA','REALIZADO',0,'2025-06-12 00:01:06.194','2025-06-12 00:01:06.194'),('mo6ma39v0a5bqg7va0t7ublv','twu0i0rply3x162wkgn2g4x4',180,0,'TRANSFERENCIA','REALIZADO',0,'2025-06-12 00:01:37.007','2025-06-12 00:01:37.007'),('q2gd9bsvmyfgvt7glgd8ojwu','rkuo1sa3vwwro1suxo5p2x5v',500,350,'EFECTIVO','REALIZADO',0,'2025-06-11 23:21:24.589','2025-06-11 23:21:24.589');
/*!40000 ALTER TABLE `Pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Producto`
--

DROP TABLE IF EXISTS `Producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Producto` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidadDisponible` int NOT NULL,
  `cantidadVendida` int NOT NULL,
  `comisionEmpleado` double NOT NULL,
  `precioProveedor` double NOT NULL,
  `precioPublico` double NOT NULL,
  `ganancia` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Producto`
--

LOCK TABLES `Producto` WRITE;
/*!40000 ALTER TABLE `Producto` DISABLE KEYS */;
INSERT INTO `Producto` VALUES ('ab2anpw04pb8qcpzx82j5ui0','pomada cabello','Tambor',1,0,50,90,230,90,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('dh6zs4h8dhqf39u4e3rhrr4c','gabri polvo','',1,0,50,115,280,115,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('dvmpbhv1pr6kqqj976xzgfui','cera','Baregk',1,0,50,55,200,95,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('fn5j0zc2blfngmeo16dptxxj','gel cabello','Soavence',1,0,30,30,100,40,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('idah7uzxmg2yqc84amy5q6t1','wax gold','Nish man',1,0,50,130,300,120,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('kota50h5qtdysccmur6j5jjw','plasta barba','Barber Stoic',1,0,50,110,250,90,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('owwvmhc1tf2fuiwm95r8ssy6','polvo','Nish man',1,0,50,140,310,120,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('q44ijqeravk70t5yb1o42061','aceite barba','Bergamota',1,0,50,115,300,135,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('qg4fkyteokjqp541chptoa05','shampoo limpieza profunda','Soavence',1,0,50,170,340,120,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('qw5mdt6v0iybtwh90nnh8e5c','pomada cabello','Elegance',1,0,50,120,280,110,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('yjgp4twvp3wi0qtjvi43r5kk','telaraña','Nish man',1,0,50,160,350,140,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('zbvx8y3svz946gm847nozo1y','pasta cabello','Elegance',1,0,50,120,280,110,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('zo3q5ak7gxh7apx16acq4c7s','wax roja','Nish man',1,0,60,120,300,120,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('zy4hx57bvzafanf7msjqy44u','shampoo minoxidil','',1,0,70,190,420,160,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378');
/*!40000 ALTER TABLE `Producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Servicio`
--

DROP TABLE IF EXISTS `Servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Servicio` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` enum('BARBA','CORTE','FACIAL','GRECA','OTRO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double NOT NULL,
  `comisionBarbero` double NOT NULL,
  `ganancia` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Servicio`
--

LOCK TABLES `Servicio` WRITE;
/*!40000 ALTER TABLE `Servicio` DISABLE KEYS */;
INSERT INTO `Servicio` VALUES ('d143atnl0jgb9wxc14p6umxq','plus','FACIAL',200,100,100,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('el3y33moos3yiv0e8syvym48','niño','CORTE',140,70,70,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('hvdwwc58xh7ha7ui5961lvlk','ceja','OTRO',60,30,30,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('hytxcyetz8ga3y0mixbomv21','bigote','BARBA',70,35,35,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('m12nxpnjm3vgos4yk7jrvoea','afeitado plus','BARBA',200,100,100,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('pfgs0pma3iahvn21xbnydryh','black mask','OTRO',70,35,35,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('pvpbil5p8zmjwl6en9duakgm','tijera','CORTE',150,70,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('qr18y8gctoahwf2stdlx6l93','regular/escolar','CORTE',160,80,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('slndx45i8t3wn911j1fm5hh5','zona craneal (afeitado)','CORTE',150,70,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('so7h212ilwte44ego5a7tv1n','refinado','CORTE',60,30,30,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('t11scje3xst2n9cdtt5zb31v','desvanecido','CORTE',180,90,90,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('thlkutyvitez7az2wuyl6fy4','afeitado clásico','BARBA',150,80,70,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('zbb6t105w8l6tpvewxz27a56','premium','FACIAL',280,120,160,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378');
/*!40000 ALTER TABLE `Servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuario` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numeroTelefono` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Usuario_email_key` (`email`),
  UNIQUE KEY `Usuario_numeroTelefono_key` (`numeroTelefono`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES ('j144p2ns4unhxukk6mls4dzq','javier@email.com','2281570630',NULL,1,'2025-06-11 23:16:05.394','2025-06-11 23:16:05.394'),('jt1v37u52wbivjqhsjiadnjx','jimena@email.com','2283763445',NULL,1,'2025-06-11 23:16:05.407','2025-06-11 23:16:05.407'),('nd4uxhry1i4sh37twrfe9g6f','oswaldo@email.com','2281479279',NULL,1,'2025-06-11 23:16:05.400','2025-06-11 23:16:05.400'),('x4ochaio6ydr2uu6o3tzgxnt','uriel@email.com','2281434972',NULL,1,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378');
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-11 18:52:40
