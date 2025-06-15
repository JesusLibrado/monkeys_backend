-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: 172.17.0.2    Database: monkeys
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.22.04.1

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
INSERT INTO `ConceptoFactura` VALUES ('mb3cmb8ndxtmmg9w2iaio3n7','awsxbv82el50kvwew1guq60w',1,NULL,'htydpwyqrtt8k6hidu33h96i',180,'2025-06-12 06:03:00.459','2025-06-12 06:03:00.459');
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
INSERT INTO `Empleado` VALUES ('j5qgg2hfu7udnxrefy4kp0er','Uriel','Velasco Galvan','odxafwvtfi9nx81v40vo8fig',NULL,NULL,'BARBERO','2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('saj41912bg1peki1432qknke','Jimena','Landa Hernandez','amtiqpji3yhw57iimmgragkd',NULL,NULL,'BARBERO','2025-06-12 05:17:20.180','2025-06-12 05:17:20.180'),('uk06birzvgr588xpk1ikllhr','Oswaldo','Ruiz Hernandez','k147oaphl38r0md5z1pyznz3',NULL,NULL,'BARBERO','2025-06-12 05:17:19.696','2025-06-12 05:17:19.696'),('yc7dvo3z54vne2qhkwn6urx1','Javier','Gonzalez Hernandez','lhwbryc0t65xl43r24f7wlqj',NULL,NULL,'BARBERO','2025-06-12 05:17:19.367','2025-06-12 05:17:19.367');
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
INSERT INTO `Estacion` VALUES ('f31off6meqaujc9dig6cno1p',4,1,'saj41912bg1peki1432qknke','2025-06-12 05:17:20.180','2025-06-12 05:17:20.180'),('n2phbl38gw3wxeaglhga00jm',1,0,'j5qgg2hfu7udnxrefy4kp0er','2025-06-12 05:17:18.738','2025-06-12 06:02:50.092'),('pmsyduxz8y71i8kx8bhp446g',2,1,'yc7dvo3z54vne2qhkwn6urx1','2025-06-12 05:17:19.367','2025-06-12 05:17:19.367'),('ykhdc8hur3unkhuwgbsm7y43',3,1,'uk06birzvgr588xpk1ikllhr','2025-06-12 05:17:19.696','2025-06-12 05:17:19.696');
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
INSERT INTO `Evento` VALUES ('xokdo2w96t6n5oaq7z752hkd','awsxbv82el50kvwew1guq60w','TERMINADO','Luis','n2phbl38gw3wxeaglhga00jm','2025-06-12 06:02:49.865','2025-06-13 23:02:10.976');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Factura`
--

LOCK TABLES `Factura` WRITE;
/*!40000 ALTER TABLE `Factura` DISABLE KEYS */;
INSERT INTO `Factura` VALUES ('awsxbv82el50kvwew1guq60w',1,180,NULL,'CREADA','2025-06-12 06:02:49.865','2025-06-13 23:02:10.691');
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
INSERT INTO `Producto` VALUES ('hdt4paal38f86e0rwqh1v725','pomada cabello','Elegance',1,0,50,120,280,110,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('hk0htgt6yqi061a4l7ycju0k','wax gold','Nish man',1,0,50,130,300,120,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('iwp16zcvs0re8rviuzvkov90','gel cabello','Soavence',1,0,30,30,100,40,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('ixbfphr9iyxfqej1xoor2k47','aceite barba','Bergamota',1,0,50,115,300,135,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('k7sxet0vxisylrzr8aiiwrtj','shampoo minoxidil','',1,0,70,190,420,160,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('mgj9a1o54k0m3znj2spyacyk','wax roja','Nish man',1,0,60,120,300,120,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('nz93uq7vqxf6ocsckrhruj7j','cera','Baregk',1,0,50,55,200,95,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('oni8jw8rzsnmqm8s65c4tg2r','gabri polvo','',1,0,50,115,280,115,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('onych1an7xhgmkl6ljton1aj','telaraña','Nish man',1,0,50,160,350,140,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('p4m88tm27mnmw0olntgaxb3d','plasta barba','Barber Stoic',1,0,50,110,250,90,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('r11isz5bdzoi19hwkbmxr665','shampoo limpieza profunda','Soavence',1,0,50,170,340,120,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('rfdgay7v8tn8cm5gb6rm2wj7','pasta cabello','Elegance',1,0,50,120,280,110,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('st0ahe6p2j4lhscbqhp1ora3','pomada cabello','Tambor',1,0,50,90,230,90,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('ujv0ah0jo0t2gfd5geygzzfb','polvo','Nish man',1,0,50,140,310,120,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738');
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
INSERT INTO `Servicio` VALUES ('cktfejrzvbxts7fvcp69mbfd','afeitado clásico','BARBA',150,80,70,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('e10kowgqypkamb9s5apb0kx1','black mask','OTRO',70,35,35,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('fr0q733rw50io9vfd59aesub','refinado','CORTE',60,30,30,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('htydpwyqrtt8k6hidu33h96i','doble cero (desvanecido)','CORTE',180,90,90,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('mzgow2it7omfnwqstpa9kttl','premium','FACIAL',280,120,160,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('n9ywzgvwt8a4zlvfrokj4axj','zona craneal (afeitado)','CORTE',150,70,80,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('prfj4xg81iqwll2r8u50fijr','afeitado plus','BARBA',200,100,100,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('qv6mj2r8e0ztq916sickuhbf','regular/escolar','CORTE',160,80,80,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('rc4dfd2ghr6u82t8r1sk22du','ceja','OTRO',60,30,30,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('rvwmx3hme8cy71s02m2xu8gx','plus','FACIAL',200,100,100,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('ux43vv1eojkn1p3an2sq7pxq','niño','CORTE',140,70,70,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('xbs1a43uzagdpcuhim7yju8h','tijera','CORTE',150,70,80,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738'),('zbowb90kdtt5ouo9dtfo960w','bigote','BARBA',70,35,35,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738');
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
INSERT INTO `Usuario` VALUES ('amtiqpji3yhw57iimmgragkd','jimena@email.com','2283763445',NULL,1,'2025-06-12 05:17:20.180','2025-06-12 05:17:20.180'),('k147oaphl38r0md5z1pyznz3','oswaldo@email.com','2281479279',NULL,1,'2025-06-12 05:17:19.696','2025-06-12 05:17:19.696'),('lhwbryc0t65xl43r24f7wlqj','javier@email.com','2281570630',NULL,1,'2025-06-12 05:17:19.367','2025-06-12 05:17:19.367'),('odxafwvtfi9nx81v40vo8fig','uriel@email.com','2281434972',NULL,1,'2025-06-12 05:17:18.738','2025-06-12 05:17:18.738');
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

-- Dump completed on 2025-06-15  0:40:06
