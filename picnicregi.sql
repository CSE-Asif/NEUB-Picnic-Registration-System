-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2021 at 08:16 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `picnicregi`
--

-- --------------------------------------------------------

--
-- Table structure for table `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `lnk` varchar(2000) NOT NULL,
  `ttl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `img`
--

INSERT INTO `img` (`id`, `lnk`, `ttl`) VALUES
(1, 'https://scontent.fcgp7-1.fna.fbcdn.net/v/t31.18172-8/28337353_1683420868411299_3779317046060192533_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a83260&_nc_ohc=tqTo3EZSEK4AX_OR5Ds&_nc_ht=scontent.fcgp7-1.fna&oh=25ef249580ad0227e4cb49c34ba34db4&oe=60D9D9E7', 'Image-1'),
(2, 'https://scontent.fcgp7-1.fna.fbcdn.net/v/t31.18172-8/28423842_1683419401744779_6047597423601238078_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a83260&_nc_ohc=iIs_PhnSbF8AX90q7RD&_nc_ht=scontent.fcgp7-1.fna&oh=0f86138a23edbd220e28df9c1773506f&oe=60D8E0C7', 'Image-2'),
(3, 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/51502867_815440615460607_7547582360389156864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=llgqG2u8vGsAX9FiKvZ&_nc_ht=scontent.fzyl2-1.fna&oh=0c5f9e0f0e6e02f8a9c9aaf4a0d81279&oe=60D9CDBA', 'Buddho Sir singing');

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `txt` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`id`, `email`, `txt`) VALUES
(33, 'asif@ef', 'reeeeeeeee'),
(35, 'adf@gmail', 'hahahah'),
(36, 'adf@gmail', 'dffffffffff'),
(37, 'adf@gmail', 'asssssssss'),
(38, 'asifsami2000@gmail.com', 'Hello. I am Asif. I have completed the registration and payment. My student ID is 180103020042 & transaction ID is ashdg5556. Thanks.'),
(39, 'sdfffffff@fdg', 'hello hi'),
(40, 'asifsami2000@gmail.com', 'payment Done. ID= 180103020042'),
(41, 'sakib@hhh', 'kita re Asif'),
(42, 'asifsami2000@gmail.com', 'hello Sakib'),
(43, 'asifsami2000@gmail.com', 'Hello World');

-- --------------------------------------------------------

--
-- Table structure for table `p_admin`
--

CREATE TABLE `p_admin` (
  `id` int(11) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `headline` varchar(255) NOT NULL,
  `des` varchar(800) NOT NULL,
  `contactinfo` varchar(800) NOT NULL,
  `paymentinfo` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_admin`
--

INSERT INTO `p_admin` (`id`, `uname`, `password`, `email`, `headline`, `des`, `contactinfo`, `paymentinfo`) VALUES
(1, 'asif', 'asif', 'asifsami2000@gmail.com', 'NEUB Picnic-2021', 'এতদ্বারা নর্থ ইষ্ট বিশ্ববিদ্যালয়ের কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগের সকল ছাত্র-ছাত্রীদের অবগতির জন্য জানানো যাচ্ছে , বার্ষিক বনভোজন ২০১৯ এর জন্য আগামী 6th February, Wednesday ধার্য্য করা হয়েছে । বনভোজনের স্থানঃ Sripur Picnic Spot, Jaintapur, Sylhet. আগামী 3rd February, 2019 এর মধ্যে ৫০০ টাকা রেজিস্ট্রেশন ফি এবং যাবতীয় তথ্য সোসাইটির এক্সিকিউটিভ মেম্বারের কাছে দিয়ে রেজিস্ট্রেশন করার জন্য বলা হচ্ছে । বাসের আসন বিন্যাস রেজিস্ট্রেশন এর উপর নির্ভর করবে । সুতরাং সবাইকে  অতি সত্বর নিজ নিজ ব্যাচের এক্সিকিউটিভ মেম্বারের সাথে যোগাযোগ করার জন্য বলা হচ্ছে । প্রথম সেমিস্টারের ছাত্র-ছাত্রীদের তাদের ব্যাচের ক্লাস রিপ্রেজেন্টটিভদের সাথে অথবা সোসাইটির মেম্বারদের সাথে যোগাযোগ করার জন্য বলা হচ্ছে । ধন্যবাদ।।', '01929252671', 'Use Bkash, Rocket, Nogod for payment. Number- 01929252671. Please keep your transaction id for further proceedings. Thanks.');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `tname` varchar(255) NOT NULL,
  `advisor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`tname`, `advisor`) VALUES
('Food Team', 'Mahir Hasan Sir'),
('Game Team', 'Shahadat Parvez Sir'),
('Security Team', 'Noushad Sojib Sir'),
('Transportation Team', 'Saadat Sir');

-- --------------------------------------------------------

--
-- Table structure for table `teammem`
--

CREATE TABLE `teammem` (
  `uid` int(11) NOT NULL,
  `tname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teammem`
--

INSERT INTO `teammem` (`uid`, `tname`) VALUES
(2, 'Food Team'),
(2, 'Game Team'),
(2, 'Transportation Team'),
(7, 'Transportation Team'),
(18, 'Game Team'),
(22, 'Security Team');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sid` varchar(255) NOT NULL,
  `sem` varchar(255) NOT NULL,
  `sec` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `status` varchar(200) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `name`, `sid`, `sem`, `sec`, `email`, `phone`, `size`, `status`, `time`) VALUES
(2, 'Khadem Mohammad Asif-uz-zaman', '180103020042', '11th', 'B', 'asifsami2000@gmail.com', '01929252671', 'XL', 'Confirmed', '2021-05-23 09:47:56'),
(7, 'Md Johirul Hussen Mamun', '180103020052', '11th', 'B', 'mamun@gmail.com', '01625749549', 'M', 'Confirmed', '2021-05-26 18:12:43'),
(8, 'Taher Sayed', '180103020034', '11th', 'B', 'asifsami2000@gmail.com', '01929252671', 'L', 'Confirmed', '2021-05-26 18:12:55'),
(10, 'asc', '180103020042', '9th', 'B', 'asifsami2000@gmail.com', '01883738956', 'M', 'Not Confirmed', '2021-05-23 06:00:47'),
(13, 'dghhhhhh', '5455555555', '9th', 'none', 'as@hjska.com', '55455', 'M', 'Not Confirmed', '2021-05-23 06:00:47'),
(16, 'Mahadi Hasan', '180103020044', '11th', 'B', 'mahadi@gmail.com', '01929252672', 'XL', 'Not Confirmed', '2021-05-23 06:00:47'),
(17, 'Sakib Ahmed', '180103020021', '11th', 'A', 'as@hjska.com', '01666666666', 'XL', 'Confirmed', '2021-05-23 06:05:49'),
(18, 'Sobrul Karim', '180103020026', '11th', 'B', 'sobrul@gmail.com', '01555555555', 'XL', 'Confirmed', '2021-05-26 18:35:54'),
(22, 'Samia Munni', '180103020002', '11th', 'B', 'samia@gmail.com', '01222222222', 'XL', 'Confirmed', '2021-05-28 20:40:26'),
(23, 'shawon', '180103020036', '10th', 'B', 'sh@hja', '0188888888', 'M', 'Not Confirmed', '2021-05-23 07:50:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `p_admin`
--
ALTER TABLE `p_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`tname`);

--
-- Indexes for table `teammem`
--
ALTER TABLE `teammem`
  ADD PRIMARY KEY (`uid`,`tname`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `msg`
--
ALTER TABLE `msg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `p_admin`
--
ALTER TABLE `p_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
