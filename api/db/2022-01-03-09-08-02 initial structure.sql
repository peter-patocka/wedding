SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES 'utf8';

CREATE TABLE `wedding-table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `table_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `wedding-table`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `wedding-table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
