
CREATE TABLE `absent-person` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `absent-person`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `absent-person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
