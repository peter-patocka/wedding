ALTER TABLE `wedding-table`
  ADD group_id int(11) NOT NULL;

UPDATE `wedding-table` SET group_id = '1' WHERE id='1';
UPDATE `wedding-table` SET group_id = '1' WHERE id='2';