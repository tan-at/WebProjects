CREATE TABLE `urheilijat` (
	`id` INT(11) NULL DEFAULT NULL,
	`nimi` CHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`syntymavuosi` DATE NULL DEFAULT NULL,
	`paino` INT(11) NULL DEFAULT NULL,
	`kuvaLinkki` CHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`urheilulaji` CHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`saavutukset` CHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci'
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

INSERT INTO urheilijat (id, nimi, syntymavuosi, paino, kuvaLinkki, urheilulaji, saavutukset) VALUES
(1, 'Jukka Keskisalo', '1981', '66', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jukka_Keskisalo_Ruotsiottelu_2014.jpg', 'estejuoksu', '2006 EM-mestari'),
(2, 'Teemu Pukki', '1990', '-', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Norwich_2_Chelsea_3_-_Teemu_Pukki.jpg', 'jalkapallo', 'Englannin Valioliigan kuukauden pelaaja, elokuu 2019'),
(3, 'Kaisa Mäkäräinen', '1983', '-', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kaisa_M%C3%A4k%C3%A4r%C3%A4inen_%28FIN%29_with_Crystal_Globe_IBU_2018_%28cropped%29.jpg', 'ampumahiihto', '2011 hiihdon MM-kultaa ja -hopeaa');

SELECT * FROM urheilijat;

CREATE OR REPLACE USER 'testUser'@'localhost' IDENTIFIED BY 'kt123456';
GRANT SELECT,INSERT,UPDATE,DELETE ON urheilijat TO 'testUser'@'localhost';




DELIMITER $$
CREATE PROCEDURE `sp_get_urheilijat`()
BEGIN
SELECT id, nimi, syntymavuosi, paino, kuvaLinkki, urheilulaji, saavutukset FROM henkilot;
END $$

GRANT EXECUTE ON PROCEDURE urheilijaDatabase.sp_get_urheilijat TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';



DELIMITER $$
CREATE PROCEDURE `sp_get_urheilijan_tiedot`(
IN urheilija_id INT
)
BEGIN
SELECT nimi, syntymavuosi, paino, kuvaLinkki, urheilulaji, saavutukset FROM urheilijat WHERE id = urheilija_id;
END $$

GRANT EXECUTE ON PROCEDURE urheilijaDatabase.sp_get_urheilijan_tiedot TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';



-- DELIMITER $$
-- CREATE PROCEDURE `sp_get_henkilon_puhelinnumero`(
-- IN henkilo_nimi INT
-- )
-- BEGIN
-- SELECT puhelin FROM henkilot WHERE id = henkilo_nimi;
-- END $$
-- 
-- GRANT EXECUTE ON PROCEDURE puhelinluettelo.sp_get_henkilon_puhelinnumero TO 'testUser'@'localhost' IDENTIFIED
-- by 'kt123456';



DELIMITER $$
CREATE PROCEDURE `sp_insert_urheilija`(
OUT urheilija_id INT,
IN urheilija_nimi VARCHAR(25),
IN urheilija_syntymavuosi DATE,
IN urheilija_paino INT(11),
IN urheilija_kuvaLinkki CHAR(255),
IN urheilija_urheilulaji CHAR(255),
IN urheilija_saavutukset CHAR(255)
)
BEGIN
INSERT INTO urheilijat(nimi, syntymavuosi, paino, kuvaLinkki, urheilulaji, saavutukset)
VALUES(urheilija_nimi, urheilija_syntymavuosi, urheilija_paino, urheilija_kuvaLinkki, urheilija_urheilulaji, urheilija_saavutukset);
SET urheilija_id = LAST_INSERT_ID();
END $$

GRANT EXECUTE ON PROCEDURE urheilijaDatabase.sp_insert_urheilija TO 'testUser'@'localhost' IDENTIFIED
by 'kt123456';
