-- CREATE TABLE statements
CREATE TABLE Maa
(
    MaaID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    MaaNimi VARCHAR(56) NOT NULL
);

CREATE TABLE Urheilija
(
    UrheilijaID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Etunimi VARCHAR(20) NOT NULL,
    Sukunimi VARCHAR(25) NOT NULL,
    Paino DECIMAL(6,2) NOT NULL,
    Syntymapaiva DATE NOT NULL,
    Urheilulaji VARCHAR(20) NOT NULL,
    KotimaaID INT(15) NOT NULL,
    FOREIGN KEY(KotimaaID) REFERENCES Maa(MaaID)
);

CREATE TABLE VanhatMitalit
(
    VanhaMitaliID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Urheilulaji VARCHAR(20) NOT NULL,
    Vuosi INT(4) NOT NULL,
    Kilpailu VARCHAR(30) NOT NULL,
    Mitali VARCHAR(8) NOT NULL
);

CREATE TABLE Kilpailu
(
    KilpailuID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    KilpailuPaiva DATE NOT NULL,
    UrheiluLajiID INT(15) NOT NULL,
    FOREIGN KEY(UrheiluLajiID) REFERENCES UrheiluLaji(UrheiluLajiID)
);

CREATE TABLE Tulokset
(
    TulosID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    UrheilijaID INT(15) NOT NULL,
    UrheilijaNimi VARCHAR(45) NOT NULL,
    Aika TIME,
    KilpailuID INT(15) NOT NULL,
    FOREIGN KEY(UrheilijaID) REFERENCES Urheilija(UrheilijaID),
    FOREIGN KEY(KilpailuID) REFERENCES Kilpailu(KilpailuID)
);

CREATE TABLE UrheiluLaji
(
    UrheiluLajiID INT(15) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    UrheiluLajiNimi VARCHAR(45) NOT NULL
);

-- INSERT INTO statements to add contents to database
INSERT INTO Kilpailu (KilpailuPaiva, UrheiluLajiID) VALUES ('2008-11-11', 1);
INSERT INTO Kilpailu (KilpailuPaiva, UrheiluLajiID) VALUES ('2008-11-12', 2);
INSERT INTO Kilpailu (KilpailuPaiva, UrheiluLajiID) VALUES ('2008-11-13', 3);

INSERT INTO Tulokset (Aika, KilpailuID, UrheilijaID) VALUES ('0:30:10', 1, 1);
INSERT INTO Tulokset (Aika, KilpailuID, UrheilijaID) VALUES ('0:41:57', 1, 2);
INSERT INTO Tulokset (Aika, KilpailuID, UrheilijaID) VALUES ('0:34:17', 1, 3);

INSERT INTO VanhatMitalit (Urheilulaji, Vuosi, Kilpailu, Mitali) VALUES ('Hiihto', 1999, 'Hiihdon-MM', 'Hopea');
INSERT INTO VanhatMitalit (Urheilulaji, Vuosi, Kilpailu, Mitali) VALUES ('Hiihto', 2001, 'Hiihdon-MM', 'Kulta');
INSERT INTO VanhatMitalit (Urheilulaji, Vuosi, Kilpailu, Mitali) VALUES ('Hiihto', 1999, 'Hiihdon-MM', 'Kulta');

INSERT INTO Urheilija (Etunimi, Sukunimi, Paino, Syntymapaiva, Urheilulaji, VanhaMitaliID, MaaID) VALUES ('Kaisa', 'Makarainen', 61, '1980-01-01', 'Hiihto', 1, 1);
INSERT INTO Urheilija (Etunimi, Sukunimi, Paino, Syntymapaiva, Urheilulaji, VanhaMitaliID, MaaID) VALUES ('Maisa', 'Kakarainen', 65, '1981-02-02', 'Hiihto', 2, 2);
INSERT INTO Urheilija (Etunimi, Sukunimi, Paino, Syntymapaiva, Urheilulaji, VanhaMitaliID, MaaID) VALUES ('Aisa', 'Akarainen', 63, '1979-03-03', 'Hiihto', 3, 3);

