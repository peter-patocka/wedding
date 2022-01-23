ALTER TABLE `wedding-table`
  ADD deleted tinyint(11) NOT NULL DEFAULT 0;

UPDATE `wedding-table` SET deleted = 1 WHERE id IN("14","28","56","57","58","59","60","61","74","75");