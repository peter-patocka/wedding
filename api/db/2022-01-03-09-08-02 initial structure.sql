SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `learnhunter` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `learnhunter` (`id`, `name`, `email`, `created_at`) VALUES
(1, 'sobuz', 'sobuz@gmail.com', '2019-01-30 08:00:00'),
(2, 'mmr', 'mmr@gmail.com', '2019-01-30 08:00:00');

ALTER TABLE `learnhunter`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `learnhunter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

-- wedding tables
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
