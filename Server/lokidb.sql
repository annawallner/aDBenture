-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2020 at 03:14 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lokidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `verdaechtiger`
--

CREATE TABLE `verdaechtiger` (
  `VerdID` int(15) DEFAULT NULL,
  `Groesse` int(15) DEFAULT NULL,
  `Pseudonym` varchar(30) DEFAULT NULL,
  `Bandenname` varchar(30) DEFAULT NULL,
  `Beruf` varchar(30) DEFAULT NULL,
  `Haarfarbe` varchar(30) DEFAULT NULL,
  `Schuhgroesse` int(30) DEFAULT NULL,
  `Augenfarbe` varchar(30) DEFAULT NULL,
  `Blutgruppe` varchar(10) DEFAULT NULL,
  `Foto` varchar(10) DEFAULT NULL,
  `Fingerabdruck` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `verdaechtiger`
--

INSERT INTO `verdaechtiger` (`VerdID`, `Groesse`, `Pseudonym`, `Bandenname`, `Beruf`, `Haarfarbe`, `Schuhgroesse`, `Augenfarbe`, `Blutgruppe`, `Foto`, `Fingerabdruck`) VALUES
(11111, 170, 'Shorty', 'Banditos', 'Elektriker', 'braun', 41, 'blau', '0+', 'www.foto.a', 'www.finger'),
(11112, 176, 'Brigi', 'Kalimeros', 'Tischler', 'schwarz', 42, 'grün', '0+', 'www.fotos.', 'www.finger'),
(11113, 180, 'Klumpi', 'Lucky Dragons', 'Maurer', 'braun', 43, 'braun', '0-', 'www.fotos.', 'www.finger');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
