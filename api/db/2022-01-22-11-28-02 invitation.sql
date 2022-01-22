ALTER TABLE `wedding-table`
  ADD invitation_code varchar(40) NOT NULL DEFAULT '',
  ADD invitation_accepted tinyint(1) NOT NULL DEFAULT 0
;

UPDATE `wedding-table` SET invitation_code = UPPER(SUBSTR(MD5(RAND()), 1, 5));

ALTER TABLE `wedding-table` ADD CONSTRAINT unique_invitation_code UNIQUE (invitation_code);
