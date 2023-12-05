-- CREATE TABLE statements
CREATE TABLE Country (
    CountryID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    CountryName VARCHAR(50) NOT NULL
);

CREATE TABLE Athlete (
    AthleteID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Birthdate DATE NOT NULL,
    CountryID INT NOT NULL,
    FOREIGN KEY (CountryID) REFERENCES Country(CountryID)
);

CREATE TABLE Sport (
    SportID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    SportName VARCHAR(50) NOT NULL
);

CREATE TABLE Event (
    EventID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    EventName VARCHAR(100) NOT NULL,
    SportID INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    FOREIGN KEY (SportID) REFERENCES Sport(SportID)
);

CREATE TABLE Result (
    ResultID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    EventID INT NOT NULL,
    AthleteID INT NOT NULL,
    Rank INT,
    Score DECIMAL(8,2),
    FOREIGN KEY (EventID) REFERENCES Event(EventID),
    FOREIGN KEY (AthleteID) REFERENCES Athlete(AthleteID)
);


-- Inserting countries
INSERT INTO Country (CountryName) VALUES ('USA'), ('Canada'), ('Norway');

-- Inserting athletes
INSERT INTO Athlete (FirstName, LastName, Birthdate, CountryID) VALUES ('John', 'Doe', '1990-05-15', 1);
INSERT INTO Athlete (FirstName, LastName, Birthdate, CountryID) VALUES ('Emma', 'Smith', '1988-12-20', 2);
INSERT INTO Athlete (FirstName, LastName, Birthdate, CountryID) VALUES ('Michael', 'Johnson', '1992-08-25', 3);
INSERT INTO Athlete (FirstName, LastName, Birthdate, CountryID) VALUES ('Sophie', 'Martin', '1995-04-10', 4);
INSERT INTO Athlete (FirstName, LastName, Birthdate, CountryID) VALUES ('Erik', 'Olsen', '1993-11-03', 5);

-- Inserting sports
INSERT INTO Sport (SportName) VALUES ('Skiing'), ('Ice Hockey'), ('Figure Skating');
INSERT INTO Sport (SportName) VALUES ('Biathlon');

-- Inserting events
INSERT INTO Event (EventName, SportID, StartDate, EndDate) VALUES ('Ski Jumping', 1, '2023-02-15', '2023-02-20');
INSERT INTO Event (EventName, SportID, StartDate, EndDate) VALUES ('Ice Hockey', 2, '2023-02-10', '2023-02-25');
INSERT INTO Event (EventName, SportID, StartDate, EndDate) VALUES ('Biathlon 10km Sprint', 3, '2023-02-18', '2023-02-18');

-- Inserting results
INSERT INTO Result (EventID, AthleteID, Rank, Score) VALUES (1, 1, 2, 92.5); -- Ski Jumping score for John Doe
INSERT INTO Result (EventID, AthleteID, Rank, Score) VALUES (2, 2, 1, NULL); -- Ice Hockey Score for Jane Doe. Can be dull due to not participating or getting disqualified
INSERT INTO Result (EventID, AthleteID, Rank, Score) VALUES (3, 4, 3, 28.5); -- Biathalon score for Michael Johnson
INSERT INTO Result (EventID, AthleteID, Rank, Score) VALUES (3, 5, 1, 26.2); -- Biathalon score for Sophie Martin
INSERT INTO Result (EventID, AthleteID, Rank, Score) VALUES (3, 6, 2, 27.0); -- Biathalon score for Erik Olsen


-- The names of all athletes in the database
SELECT FirstName, LastName
FROM Athlete
ORDER BY 
    LastName, 
    FirstName;


-- The names and scores of athletes competing in Biathlon
SELECT Athlete.FirstName, Athlete.LastName, Result.Score
FROM Athlete
JOIN Result ON Athlete.AthleteID = Result.AthleteID
JOIN Event ON Result.EventID = Event.EventID
JOIN Sport ON Event.SportID = Sport.SportID
WHERE Sport.SportName = 'Biathlon';


-- Days when Ice Hockey will be held
SELECT Event.EventName, Event.StartDate, Event.EndDate
FROM Event
JOIN Sport ON Event.SportID = Sport.SportID
WHERE Sport.SportName = 'Ice Hockey';


-- Placements of athletes from USA
SELECT Athlete.FirstName, Athlete.LastName, Event.EventName, Result.Rank
FROM Athlete
JOIN Result ON Athlete.AthleteID = Result.AthleteID
JOIN Event ON Result.EventID = Event.EventID
JOIN Country ON Athlete.CountryID = Country.CountryID
WHERE Country.CountryName = 'USA'
ORDER BY Event.StartDate, Result.Rank;



-- Printouts of all databases and their contents
DESC Country

DESC Athlete

DESC Sport

DESC Event

DESC Result