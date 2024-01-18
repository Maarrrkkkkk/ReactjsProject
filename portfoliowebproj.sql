-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 06:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfoliowebproj`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `activitiesLink` varchar(255) NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `firstName`, `lastName`, `imageUrl`, `activitiesLink`, `about`) VALUES
(1, 'Ernesto', 'Abarienttos', 'http://localhost/portfolio/images/abar.jpg', 'https://drive.google.com/drive/folders/1zUVyDi4B3sP25etD6dz91nMcgRZOMYEr?usp=drive_link', 'I\'m Ernesto M. Abarientos III, residing in Tacloban City. I graduated from Dulag National High School, and I\'m currently studying Information Technology at EVSU. In my free time, I indulge in my hobby of playing the guitar, fueled by the dream of becoming a lead guitarist in a renowned band.'),
(2, 'Mary Joy', 'Abayare', 'http://localhost/portfolio/images/ABAYARE.JPG', 'https://drive.google.com/drive/folders/106vs5RyptVdtyLtEYpPeiV4atibUzPAf?usp=drive_link', 'I am Mary Joy A. Abayare, a BSIT student. I lived in Hinabangan, Samar. I graduated high school from Hinabangan National High School. After graduating from college, I will be eager to obtain the crucial first role which lets me demonstrate competence while translating theoretical training into hands-on expertise. The workplace insights and new skills I will gain will make an entry-level software developer or network administrator role a key step toward reaching my long-term career development goals.'),
(3, 'Jamiel', 'Abo-abo', 'http://localhost/portfolio/images/abo-abo.jpg', 'https://drive.google.com/drive/folders/1MTTzLnstOqSuzgbOUqR2TG_rYL69Ue-T?usp=drive_link', 'Hello! I\'m Jamiel B. Abo-abo, residing in Brgy. 103, Palanog Tacloban City. I graduated from Leyte National High School, and I am currently studying for a Bachelor of Science in Information Technology in Eastern Visayas State University (EVSU). I love making handcrafts accessories and selling them for my future business because i want to be a successful entrepreneur one day.'),
(4, 'Jarwin', 'Acedillo', 'http://localhost/portfolio/images/jarwin.jpg', 'https://drive.google.com/drive/folders/1_a7-PCquOpZHtPvHjCZPkqKzpaxKR_mT?usp=drive_link', 'I\'m Jarwin Acedillo from Palo,Leyte. I graduated from ACLC College of Tacloban, 23 years of age, I want to be a freelancer years after i graduated..'),
(5, 'Ivan', 'Agbay', 'http://localhost/portfolio/images/agbay.jpg', 'https://drive.google.com/drive/folders/1xuy1q1Kow7ekogQBdSJqA5omUAY7Z2C0?usp=drive_link', 'I am Ivan P. Agbay. My Hometown is Calbiga, Samar and I graduated from Calbiga National High School. After graduating in college, I am planning to get a job related to software development.'),
(6, 'Mark Anthony', 'Aguirre', 'http://localhost/portfolio/images/aguirre.jpg', 'https://drive.google.com/drive/folders/1zUVyDi4B3sP25etD6dz91nMcgRZOMYEr?usp=drive_link', 'A driven, forward-thinking, and ambitious individual who demands autonomy to do tasks in my own unique way.'),
(7, 'Carl Justin', 'Alota', 'http://localhost/portfolio/images/alota.jpg', 'https://drive.google.com/drive/folders/1-Icr3VRt_ZCkbwNLJkA5MMxSDcRDdP__?usp=drive_link', 'I am Carl Justin Alota. I am from Llorente, Eastern Samar. I completed my high school education in Llorente National High School. After I graduate, I want to work as an IT project manager or in any other non-programming capacity within the IT industry.'),
(8, 'Rose Ann', 'Bohol', 'http://localhost/portfolio/images/bohol.jpg', 'https://drive.google.com/drive/folders/1QkMxVyFh3TNFy6ebnV8ZxVm5PiUhLIgt?usp=drive_link', 'Hello! I\'m Rose Ann Bohol from Tolosa, Leyte. I graduated from Daniel Z. Romualdez State Comprehensive School of Fisheries, completing both high school and senior high school. I aspire to work abroad as a receptionist, if fortunate. Additionally, I dream of becoming a singer-songwriter someday.'),
(9, 'Reanne', 'Clamosa', 'http://localhost/portfolio/images/clamosa.jpg', 'https://drive.google.com/drive/folders/1sjN4QkHYnu7k4LYHtlnqiNrPNoFPicg-?usp=drive_link', 'Hello there! I\'m Reanne Q. Clamosa. I am from Tacloban City, Leyte. I proudly graduated high school from Saint Michael\'s College of Laguna. After completing my degree, I\'m eager to venture into the IT industry, refining my skills in diverse roles. My ambition is to excel in the field, envisioning a master\'s in Information Technology for continued growth. I aspire to pursue this path with unwavering dedication.'),
(10, 'Kurt', 'Dacaymat', 'http://localhost/portfolio/images/dacaymat.webp', 'https://drive.google.com/drive/folders/1xpYyxe-OTVnk4JkeBHG3KNSpvSp0v2iW?usp=drive_link', 'Hello, I\'m Kurt L. Dacaymat from Botoc Pinabacdao, Samar. I successfully graduated from Calbiga National High School in Calbiga, Samar. I am currently pursuing a degree in Bachelor of Science in Information Technology (BSIT) with the goal of becoming a front-end developer for a reputable company upon completing my college education.'),
(11, 'Aldwayne Paul', 'Delmo', 'http://localhost/portfolio/images/delmo.jpg', 'https://drive.google.com/drive/folders/1-KF2JYrt4eA5-tlq9K-JV_StA4R2q-hW?usp=drive_link', 'I\'m Aldwayne Paul Delmo, from Tacloban City, and I graduated from ACLC College of Tacloban. After graduating from Evsu, I intend to enroll in aviation school for another two years.'),
(12, 'Tricia Mae', 'Edloy', 'http://localhost/portfolio/images/edloy.jpg', 'https://drive.google.com/drive/folders/1-KF2JYrt4eA5-tlq9K-JV_StA4R2q-hW?usp=drive_link', 'I\'m Tricia Mae C. Edloy, a graduate of Alangalang National High School. Currently, I\'m pursuing BSIT with the goal of securing a good job in that field, building on the skills and foundation I am currently gaining. If fortunate, I also aspire to pursue teaching as part of my future endeavors.'),
(13, 'Tom Jordan', 'Esmale', 'http://localhost/portfolio/images/jordan.jpg', 'https://drive.google.com/drive/folders/1nPIVRTQPCXLyaLrg4wMhFhN7-Sff_Bi3?usp=drive_link', 'I am Tom Jordan Esmale, a BSIT student at EVSU, residing in Tacloban. I graduated from Leyte National High School\'s programming track and wish to build on those web development skills. Upon earning my degree, I hope to start a career in full-stack development, continue learning, and contribute to creating useful web applications.'),
(14, 'Samuel', 'Falguera', 'http://localhost/portfolio/images/falguera.jpg', 'https://drive.google.com/drive/folders/1-68dhy81L-9HJXW758HhDnlXHVLvTaxt?usp=drive_link', 'Hello, my name is Samuel Falguera, and I reside in Tacloban City. I completed high school at Leyte National High School. My post-graduation plan is to pursue another degree and explore opportunities abroad.'),
(15, 'Benedicto', 'Niegos', 'http://localhost/portfolio/images/niegos.jpg', 'https://drive.google.com/drive/folders/1-6WwpEH28Ukt0_XlyJKyqUAmIWvd_XZa?usp=drive_link', 'I am Benedicto T. Niegos Jr. from Brgy. District II, Pastrana, Leyte. I graduated from JUAN VILLABLANCA MEMORIAL HIGHSCHOOL. After I graduate from college (even if it\'s a bit late), I plan to pursue a job related to game development. However, if that doesn\'t work out, I want to start my own business and focus on becoming a dance instructor, specifically in Zumba, in Tacloban and other places. I also aspire to perform at Disneyland.'),
(32, '', '', '', '', ''),
(34, '', '', '', '', ''),
(37, '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
