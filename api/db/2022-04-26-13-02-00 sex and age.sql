
ALTER TABLE `wedding-table`
    ADD invitation_sent tinyint(1) NOT NULL DEFAULT 0,
    ADD sex varchar(1) NULL,
    ADD age tinyint(4) NULL
;
