CREATE TABLE henkilot (
id INT(11) NOT NULL AUTO_INCREMENT,
nimi VARCHAR(50),
puhelin VARCHAR(50),
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8 AUTO_INCREMENT=5 ;

INSERT INTO henkilot (id, nimi, puhelin) VALUES
(1, 'Ankka Aku', '040-2342342'),
(2, 'Hopo Hessu', '044-2342343'),
(3, 'Naamio Musta', '050-4234343'),
(4, 'Ankka Iines', '044-3434343');

SELECT * FROM henkilot;

CREATE OR REPLACE USER 'testUser'@'localhost' IDENTIFIED BY 'kt123456';
GRANT SELECT,INSERT,UPDATE,DELETE ON henkilot TO 'testUser'@'localhost';

DELIMITER $$
CREATE PROCEDURE `sp_get_henkilot`()
BEGIN
SELECT id, nimi, puhelin FROM henkilot;
END $$

GRANT EXECUTE ON PROCEDURE puhelinluettelo.sp_get_henkilot TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';



DELIMITER $$
CREATE PROCEDURE `sp_get_henkilon_tiedot`(
IN henkilo_id INT
)
BEGIN
SELECT nimi, puhelin FROM henkilot WHERE id = henkilo_id;
END $$

GRANT EXECUTE ON PROCEDURE puhelinluettelo.sp_get_henkilon_tiedot TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';



DELIMITER $$
CREATE PROCEDURE `sp_get_henkilon_puhelinnumero`(
IN henkilo_nimi INT
)
BEGIN
SELECT puhelin FROM henkilot WHERE id = henkilo_nimi;
END $$

GRANT EXECUTE ON PROCEDURE puhelinluettelo.sp_get_henkilon_puhelinnumero TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';



DELIMITER $$
CREATE PROCEDURE `sp_insert_henkilo`(
OUT henkilo_id INT,
IN henkilo_nimi VARCHAR(25),
IN henkilo_puhelin VARCHAR(25)
)
BEGIN
INSERT INTO henkilot(nimi, puhelin)
VALUES(henkilo_nimi, henkilo_puhelin);
SET henkilo_id = LAST_INSERT_ID();
END $$

GRANT EXECUTE ON PROCEDURE puhelinluettelo.sp_insert_henkilo TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';