-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: transit_model
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `idtickets` int NOT NULL AUTO_INCREMENT,
  `expiration` date NOT NULL,
  `monthlypass` tinyint NOT NULL,
  `origin` varchar(10) NOT NULL,
  `destination` varchar(10) NOT NULL,
  `stored_on_idtransitcards` int DEFAULT NULL,
  UNIQUE KEY `idtickets_UNIQUE` (`idtickets`),
  KEY `origin_idx` (`origin`),
  KEY `destination_idx` (`destination`),
  KEY `FKbjwpdpqr1n6ook5jgv5ybr4eo` (`stored_on_idtransitcards`),
  CONSTRAINT `destination` FOREIGN KEY (`destination`) REFERENCES `zones` (`zone`),
  CONSTRAINT `FKbjwpdpqr1n6ook5jgv5ybr4eo` FOREIGN KEY (`stored_on_idtransitcards`) REFERENCES `transitcards` (`idtransitcards`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `origin` FOREIGN KEY (`origin`) REFERENCES `zones` (`zone`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'2022-07-31',1,'1A','3',1),(2,'2022-01-31',0,'9','1A',2),(3,'2022-04-30',1,'5','7',3),(4,'2022-02-14',0,'1A','6',1),(5,'2022-11-27',0,'1A','4',2),(6,'2022-03-16',0,'1A','1A',2);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-06 20:00:16
