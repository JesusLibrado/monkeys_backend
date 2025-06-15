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
INSERT INTO `ConceptoFactura` VALUES ('baofjozq1vxtjdpcgjhbbqte','wd55165cb1jqcnze9vrpvw14',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-14 00:42:59.076','2025-06-14 00:42:59.076'),('bkpdn8n2p7yv0bpyjjzji7ks','u11amb17aix5kuours5208df',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-13 00:46:21.982','2025-06-13 00:46:21.982'),('es7hxx2o1y1h9mfvyfuudxut','oa6qs5d8odt23kwztrfr29nf',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-13 23:26:57.154','2025-06-13 23:26:57.154'),('f21spc1di3hwrr8e8i6mofmn','p8jt8ecjgmbptsnny9up1oub',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-14 00:11:34.619','2025-06-14 00:11:34.619'),('f8enb4oola3ggp34m9t37szg','pt15w41qyqrx55rnvrgedwkz',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-12 23:41:01.337','2025-06-12 23:41:01.337'),('fdkb2vze1yesdz4vkj947pbo','twu0i0rply3x162wkgn2g4x4',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 00:01:31.532','2025-06-12 00:01:31.532'),('htabgdss8xhqx08i3rpfg1lq','fhvu55wju8wq4avc1m2iyhil',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-13 01:38:09.399','2025-06-13 01:38:09.399'),('jr1vbo2qbkrym9m53cb9oex6','vzbzdrx45u3n65q0gkaac7hr',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-14 01:09:39.972','2025-06-14 01:09:39.972'),('jyojae3qyg6uj4aol5gj7hfv','ee9gur5vbvczq91bfk1j3cdq',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-14 00:52:15.477','2025-06-14 00:52:15.477'),('lboknifevvxqvazmss8lc09r','zj28axx64y1hzucoy2bp3pbm',1,NULL,'hytxcyetz8ga3y0mixbomv21',70,'2025-06-13 01:31:16.148','2025-06-13 01:31:16.148'),('lxtf36ec0mwsttglbdidgv3n','rkuo1sa3vwwro1suxo5p2x5v',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-11 23:20:08.702','2025-06-11 23:20:08.702'),('nrmu76x91rrb8i989k9heklv','cl8726xjvzyb83qn3jhljxlq',1,NULL,'qr18y8gctoahwf2stdlx6l93',160,'2025-06-13 00:32:29.052','2025-06-13 00:32:29.052'),('oip56c4ny6cmgk593ir87hme','fhvu55wju8wq4avc1m2iyhil',1,NULL,'thlkutyvitez7az2wuyl6fy4',150,'2025-06-13 01:38:15.469','2025-06-13 01:38:15.469'),('p1031j7axn3sn78x8oymi7td','zj28axx64y1hzucoy2bp3pbm',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-13 01:31:09.768','2025-06-13 01:31:09.768'),('rxqdqdsy5ntd19ross6gtfe7','yinlhzilzvqvxrm8ud731a36',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-13 01:18:29.396','2025-06-13 01:18:29.396'),('so7sv402km8b4iiheu8g0adf','o2z229e1gprdt60sqqr118hz',1,NULL,'pvpbil5p8zmjwl6en9duakgm',150,'2025-06-13 01:18:04.012','2025-06-13 01:18:04.012'),('so8zfr1oa2hw9uow8apu72pz','umi1d65gtb5sm5xcky50uf3g',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 00:00:58.708','2025-06-12 00:00:58.708'),('taun1ycc1cbfka1vjbctag4b','brekpgkq6xmxrg7a242bmayo',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 23:43:59.552','2025-06-12 23:43:59.552'),('tyf9wih7sv8m0jv50r8m7wmo','zyz241fwb1oot99uywwaox18',1,NULL,'d143atnl0jgb9wxc14p6umxq',200,'2025-06-13 01:25:55.770','2025-06-13 01:25:55.770'),('u5gbol159s934qmth2k7gdct','vzbzdrx45u3n65q0gkaac7hr',1,NULL,'hytxcyetz8ga3y0mixbomv21',60,'2025-06-14 01:09:45.318','2025-06-14 01:09:45.318'),('ulmpnejejgd9e1nie9h9m6ka','cl8726xjvzyb83qn3jhljxlq',1,NULL,'hytxcyetz8ga3y0mixbomv21',70,'2025-06-13 00:36:29.302','2025-06-13 00:36:29.302'),('v7359n0r8ay81m6x3lvn4k53','cc9libhfgdxi24frzmqv2l9b',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-12 23:27:13.323','2025-06-12 23:27:13.323'),('z6v1rabcn7j658zt2ln2dzt0','vq5gzihxxa1od60rgo2xscnq',1,NULL,'t11scje3xst2n9cdtt5zb31v',180,'2025-06-13 00:40:01.410','2025-06-13 00:40:01.410');
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
INSERT INTO `Estacion` VALUES ('d76vqxzgnigk6fnjx16rrlgu',3,1,'qgrx1gg2c89lye9yhditmkqc','2025-06-11 23:16:05.400','2025-06-14 01:09:55.372'),('e6mgn0x0pchwwlgsm12qc9fs',1,1,'c26ez0hpm0nywjx1khazro7m','2025-06-11 23:16:05.378','2025-06-13 01:38:27.555'),('n6egu52cvs7qz8pvppno5y14',2,1,'i11hm0vyuyksve4bku6anlv3','2025-06-11 23:16:05.394','2025-06-14 00:43:21.536'),('wz51mlp5sgkhobzr184ecf72',4,1,'d14kta3sc8wryzz0bvkqio93','2025-06-11 23:16:05.407','2025-06-14 00:52:25.169');
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
INSERT INTO `Evento` VALUES ('ais7u7b51pycf4vt26s4zzzv','umi1d65gtb5sm5xcky50uf3g','PAGADO','cliente3','wz51mlp5sgkhobzr184ecf72','2025-06-11 23:24:54.802','2025-06-12 00:01:06.220'),('cczj2rrbpo7mtpmqe2dselhr','vq5gzihxxa1od60rgo2xscnq','PAGADO','cliente8','wz51mlp5sgkhobzr184ecf72','2025-06-12 23:43:03.066','2025-06-13 00:40:29.521'),('cs2hely3nqsvntenk4evg1h1','u11amb17aix5kuours5208df','PAGADO','cliente9','e6mgn0x0pchwwlgsm12qc9fs','2025-06-13 00:15:11.242','2025-06-13 00:46:35.107'),('cyxt5nsu0ulfcbwvle66r7aq','cl8726xjvzyb83qn3jhljxlq','PAGADO','cliente7','d76vqxzgnigk6fnjx16rrlgu','2025-06-12 23:44:40.118','2025-06-13 00:37:29.757'),('ip1ofqh5dl74iwsmxoyxghm9','pt15w41qyqrx55rnvrgedwkz','PAGADO','cliente6-1','wz51mlp5sgkhobzr184ecf72','2025-06-12 23:27:03.441','2025-06-12 23:41:35.789'),('itfzjxb64akq7ccmx8arg4qb','wd55165cb1jqcnze9vrpvw14','PAGADO','cliente17','n6egu52cvs7qz8pvppno5y14','2025-06-14 00:15:04.796','2025-06-14 00:43:21.536'),('kl1ghxlwj342u1h3ra0w5c99','oa6qs5d8odt23kwztrfr29nf','PAGADO','cliente15','wz51mlp5sgkhobzr184ecf72','2025-06-13 23:06:52.362','2025-06-13 23:27:10.685'),('kmprixy1j3jxt0h2axcan7an','ee9gur5vbvczq91bfk1j3cdq','PAGADO','cliente18','wz51mlp5sgkhobzr184ecf72','2025-06-14 00:17:21.466','2025-06-14 00:52:25.169'),('l8oie1v0pqrzhb9u5tb6pqj0','rkuo1sa3vwwro1suxo5p2x5v','PAGADO','cliente1','d76vqxzgnigk6fnjx16rrlgu','2025-06-11 23:19:13.477','2025-06-11 23:21:24.627'),('m53wsbp83ih2v0l4qzd4rddx','zj28axx64y1hzucoy2bp3pbm','PAGADO','cliente10','d76vqxzgnigk6fnjx16rrlgu','2025-06-13 00:43:32.126','2025-06-13 01:34:49.062'),('mj9wa7mboalt98zb3nggvdo2','yinlhzilzvqvxrm8ud731a36','PAGADO','cliente11','n6egu52cvs7qz8pvppno5y14','2025-06-13 00:44:52.518','2025-06-13 01:18:38.409'),('om5y7ugcygskoj1i6h1a6yl4','vzbzdrx45u3n65q0gkaac7hr','PAGADO','cliente19','d76vqxzgnigk6fnjx16rrlgu','2025-06-14 00:23:28.235','2025-06-14 01:09:55.372'),('q11eaejg12gje5rmrkk7m9ve','o2z229e1gprdt60sqqr118hz','PAGADO','cliente12','wz51mlp5sgkhobzr184ecf72','2025-06-13 00:47:06.357','2025-06-13 01:18:15.160'),('q7eji9rcx25q9nr2r0zlj60g','twu0i0rply3x162wkgn2g4x4','PAGADO','cliente2','n6egu52cvs7qz8pvppno5y14','2025-06-11 23:24:40.714','2025-06-12 00:01:37.032'),('t686m7iyk1qlmxz26mlr5aio','cc9libhfgdxi24frzmqv2l9b','PAGADO','cliente4','n6egu52cvs7qz8pvppno5y14','2025-06-12 23:10:08.081','2025-06-12 23:27:19.774'),('tmc4wo8j54doq8e8uyqhi8ww','fhvu55wju8wq4avc1m2iyhil','PAGADO','cliente13','e6mgn0x0pchwwlgsm12qc9fs','2025-06-13 00:50:06.339','2025-06-13 01:38:27.555'),('tnx01c8k2oztdzma0mlhopcp','zyz241fwb1oot99uywwaox18','PAGADO','cliente14','wz51mlp5sgkhobzr184ecf72','2025-06-13 01:25:25.736','2025-06-13 01:26:07.309'),('ujtm1cnhmjpfz4ba2hvcxlst','brekpgkq6xmxrg7a242bmayo','PAGADO','cliente5','d76vqxzgnigk6fnjx16rrlgu','2025-06-12 23:10:20.680','2025-06-12 23:44:12.643'),('ycq8wb1uhrs5x9sjvfirbswr','p8jt8ecjgmbptsnny9up1oub','PAGADO','cliente16','d76vqxzgnigk6fnjx16rrlgu','2025-06-13 23:17:09.445','2025-06-14 00:11:50.745');
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Factura`
--

LOCK TABLES `Factura` WRITE;
/*!40000 ALTER TABLE `Factura` DISABLE KEYS */;
INSERT INTO `Factura` VALUES ('brekpgkq6xmxrg7a242bmayo',6,180,NULL,'PAGADA','2025-06-12 23:10:20.680','2025-06-12 23:44:12.631'),('cc9libhfgdxi24frzmqv2l9b',5,180,NULL,'PAGADA','2025-06-12 23:10:08.081','2025-06-12 23:27:19.766'),('cl8726xjvzyb83qn3jhljxlq',10,230,NULL,'PAGADA','2025-06-12 23:44:40.118','2025-06-13 00:37:29.747'),('ee9gur5vbvczq91bfk1j3cdq',20,160,NULL,'PAGADA','2025-06-14 00:17:21.466','2025-06-14 00:52:25.158'),('fhvu55wju8wq4avc1m2iyhil',15,300,NULL,'PAGADA','2025-06-13 00:50:06.339','2025-06-13 01:38:27.545'),('o2z229e1gprdt60sqqr118hz',14,150,NULL,'PAGADA','2025-06-13 00:47:06.357','2025-06-13 01:18:15.150'),('oa6qs5d8odt23kwztrfr29nf',17,180,NULL,'PAGADA','2025-06-13 23:06:52.362','2025-06-13 23:27:10.674'),('p8jt8ecjgmbptsnny9up1oub',18,160,NULL,'PAGADA','2025-06-13 23:17:09.445','2025-06-14 00:11:50.735'),('pt15w41qyqrx55rnvrgedwkz',8,160,NULL,'PAGADA','2025-06-12 23:27:03.441','2025-06-12 23:41:35.779'),('rkuo1sa3vwwro1suxo5p2x5v',1,150,NULL,'PAGADA','2025-06-11 23:19:13.477','2025-06-11 23:21:24.620'),('twu0i0rply3x162wkgn2g4x4',2,180,NULL,'PAGADA','2025-06-11 23:24:40.714','2025-06-12 00:01:37.025'),('u11amb17aix5kuours5208df',11,160,NULL,'PAGADA','2025-06-13 00:15:11.242','2025-06-13 00:46:35.097'),('umi1d65gtb5sm5xcky50uf3g',3,180,NULL,'PAGADA','2025-06-11 23:24:54.802','2025-06-12 00:01:06.212'),('vq5gzihxxa1od60rgo2xscnq',9,180,NULL,'PAGADA','2025-06-12 23:43:03.066','2025-06-13 00:40:29.509'),('vzbzdrx45u3n65q0gkaac7hr',21,240,NULL,'PAGADA','2025-06-14 00:23:28.235','2025-06-14 01:09:55.362'),('wd55165cb1jqcnze9vrpvw14',19,160,NULL,'PAGADA','2025-06-14 00:15:04.796','2025-06-14 00:43:21.526'),('yinlhzilzvqvxrm8ud731a36',13,150,NULL,'PAGADA','2025-06-13 00:44:52.518','2025-06-13 01:18:38.399'),('zj28axx64y1hzucoy2bp3pbm',12,220,NULL,'PAGADA','2025-06-13 00:43:32.126','2025-06-13 01:34:49.052'),('zyz241fwb1oot99uywwaox18',16,200,NULL,'PAGADA','2025-06-13 01:25:25.736','2025-06-13 01:26:07.299');
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
INSERT INTO `Pago` VALUES ('aix03cp1o9lj6jwj8wuc7mwo','umi1d65gtb5sm5xcky50uf3g',180,0,'TRANSFERENCIA','REALIZADO',0,'2025-06-12 00:01:06.194','2025-06-12 00:01:06.194'),('b2ruaytv6g77yjbhgv9iow8e','vzbzdrx45u3n65q0gkaac7hr',500,260,'EFECTIVO','REALIZADO',0,'2025-06-14 01:09:55.341','2025-06-14 01:09:55.341'),('bwup8apf4n0pvtblkwo6hzvp','o2z229e1gprdt60sqqr118hz',200,50,'EFECTIVO','REALIZADO',0,'2025-06-13 01:18:15.120','2025-06-13 01:18:15.120'),('c10432nu3bxs6tpre3xnztxo','fhvu55wju8wq4avc1m2iyhil',300,0,'EFECTIVO','REALIZADO',0,'2025-06-13 01:38:27.516','2025-06-13 01:38:27.516'),('cclk0jri5f8rg36b1xwl71gz','pt15w41qyqrx55rnvrgedwkz',170,10,'EFECTIVO','REALIZADO',0,'2025-06-12 23:41:35.758','2025-06-12 23:41:35.758'),('gjuay2mh2df2h0v4elf1qk4q','oa6qs5d8odt23kwztrfr29nf',200,20,'EFECTIVO','REALIZADO',0,'2025-06-13 23:27:10.641','2025-06-13 23:27:10.641'),('h13yfszmud9uufuth7nvhdm0','cl8726xjvzyb83qn3jhljxlq',230,0,'EFECTIVO','REALIZADO',0,'2025-06-13 00:37:29.731','2025-06-13 00:37:29.731'),('k11h50sa7bykas0xj27hsfxe','vq5gzihxxa1od60rgo2xscnq',200,20,'EFECTIVO','REALIZADO',0,'2025-06-13 00:40:29.495','2025-06-13 00:40:29.495'),('l2ueipf2vo2t4xmtsxycebu2','cc9libhfgdxi24frzmqv2l9b',200,20,'EFECTIVO','REALIZADO',0,'2025-06-12 23:27:19.746','2025-06-12 23:27:19.746'),('ls7iae3oynbr86527y7zchdr','brekpgkq6xmxrg7a242bmayo',180,0,'EFECTIVO','REALIZADO',0,'2025-06-12 23:44:12.619','2025-06-12 23:44:12.619'),('mo6ma39v0a5bqg7va0t7ublv','twu0i0rply3x162wkgn2g4x4',180,0,'TRANSFERENCIA','REALIZADO',0,'2025-06-12 00:01:37.007','2025-06-12 00:01:37.007'),('n41bblvh9mqmn661vb8m1ngy','u11amb17aix5kuours5208df',500,340,'EFECTIVO','REALIZADO',0,'2025-06-13 00:46:35.076','2025-06-13 00:46:35.076'),('n97g6qr6haw463p6e6ycfxlh','yinlhzilzvqvxrm8ud731a36',150,0,'EFECTIVO','REALIZADO',0,'2025-06-13 01:18:38.361','2025-06-13 01:18:38.361'),('nsnmzrxxdx9svs2npc9rj2d5','ee9gur5vbvczq91bfk1j3cdq',200,40,'EFECTIVO','REALIZADO',0,'2025-06-14 00:52:25.123','2025-06-14 00:52:25.123'),('q2gd9bsvmyfgvt7glgd8ojwu','rkuo1sa3vwwro1suxo5p2x5v',500,350,'EFECTIVO','REALIZADO',0,'2025-06-11 23:21:24.589','2025-06-11 23:21:24.589'),('qrdv3xhearaqievqvu98jxjh','zj28axx64y1hzucoy2bp3pbm',220,0,'TRANSFERENCIA','REALIZADO',0,'2025-06-13 01:34:49.032','2025-06-13 01:34:49.032'),('rj82ijv51212wx4k3mi70i2a','wd55165cb1jqcnze9vrpvw14',200,40,'EFECTIVO','REALIZADO',0,'2025-06-14 00:43:21.503','2025-06-14 00:43:21.503'),('scj3o3lxjf0zi0bncn3rl0u0','p8jt8ecjgmbptsnny9up1oub',200,40,'EFECTIVO','REALIZADO',0,'2025-06-14 00:11:50.712','2025-06-14 00:11:50.712'),('zr87uo7lqg21ko4bwzekh22f','zyz241fwb1oot99uywwaox18',200,0,'EFECTIVO','REALIZADO',0,'2025-06-13 01:26:07.286','2025-06-13 01:26:07.286');
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
INSERT INTO `Servicio` VALUES ('d143atnl0jgb9wxc14p6umxq','plus','FACIAL',200,100,100,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('el3y33moos3yiv0e8syvym48','niño','CORTE',140,70,70,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('hvdwwc58xh7ha7ui5961lvlk','ceja','OTRO',60,30,30,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('hytxcyetz8ga3y0mixbomv21','bigote','BARBA',60,30,30,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('m12nxpnjm3vgos4yk7jrvoea','afeitado plus','BARBA',200,100,100,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('pfgs0pma3iahvn21xbnydryh','black mask','OTRO',70,35,35,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('pvpbil5p8zmjwl6en9duakgm','tijera','CORTE',150,70,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('qr18y8gctoahwf2stdlx6l93','regular/escolar','CORTE',160,80,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('slndx45i8t3wn911j1fm5hh5','zona craneal (afeitado)','CORTE',150,70,80,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('so7h212ilwte44ego5a7tv1n','refinado','CORTE',60,30,30,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('t11scje3xst2n9cdtt5zb31v','doble cero (desvanecido)','CORTE',180,90,90,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('thlkutyvitez7az2wuyl6fy4','afeitado clásico','BARBA',150,80,70,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378'),('zbb6t105w8l6tpvewxz27a56','premium','FACIAL',280,120,160,'2025-06-11 23:16:05.378','2025-06-11 23:16:05.378');
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

-- Dump completed on 2025-06-15 14:19:33
