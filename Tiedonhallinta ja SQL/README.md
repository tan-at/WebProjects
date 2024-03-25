### Winter Olympics Database

This SQL database is designed to store information about athletes, countries, sports, events, and results for the Winter Olympics. It includes tables for countries, athletes, sports, events, and result data, along with sample data for demonstration purposes.

I originally made it as a project on Gitlab for my SQL-class, but ended up expanding and
cleaning it up afterwards.

## Tables

```SQL
Country
    CountryID (Primary Key)
    CountryName: Name of the country.

Athlete
    AthleteID (Primary Key)
    FirstName: First name of the athlete.
    LastName: Last name of the athlete.
    Birthdate: Birthdate of the athlete.
    CountryID (Foreign Key): References the Country table.

Sport
    SportID (Primary Key)
    SportName: Name of the sport.

Event
    EventID (Primary Key)
    EventName: Name of the event.
    SportID (Foreign Key): References the Sport table.
    StartDate: Start date of the event.
    EndDate: End date of the event.

Result
    ResultID (Primary Key)
    EventID (Foreign Key): References the Event table.
    AthleteID (Foreign Key): References the Athlete table.
    Rank: Ranking of the athlete in the event.
    Score: Score achieved by the athlete in the event.
```

## Sample Data

```SQL
Countries: USA, Canada, Norway
Athletes: John Doe, Emma Smith, Michael Johnson, Sophie Martin, Erik Olsen
Sports: Skiing, Ice Hockey, Figure Skating, Biathlon
Events: Ski Jumping, Ice Hockey, Biathlon 10km Sprint
Results: Sample results for Ski Jumping, Ice Hockey, and Biathlon events.
```

## Queries

### 1. Retrieve the names of all athletes in the database.

```SQL
SELECT FirstName, LastName FROM Athlete ORDER BY LastName, FirstName;
```

### 2. Retrieve the names and scores of athletes competing in Biathlon.

```SQL
SELECT Athlete.FirstName, Athlete.LastName, Result.Score
FROM Athlete
JOIN Result ON Athlete.AthleteID = Result.AthleteID
JOIN Event ON Result.EventID = Event.EventID
JOIN Sport ON Event.SportID = Sport.SportID
WHERE Sport.SportName = 'Biathlon';
```

### 3. Retrieve the days when Ice Hockey will be held.

```SQL
SELECT Event.EventName, Event.StartDate, Event.EndDate
FROM Event
JOIN Sport ON Event.SportID = Sport.SportID
WHERE Sport.SportName = 'Ice Hockey';
```

### 4. Retrieve the placements of athletes from the USA.

```SQL
SELECT Athlete.FirstName, Athlete.LastName, Event.EventName, Result.Rank
FROM Athlete
JOIN Result ON Athlete.AthleteID = Result.AthleteID
JOIN Event ON Result.EventID = Event.EventID
JOIN Country ON Athlete.CountryID = Country.CountryID
WHERE Country.CountryName = 'USA'
ORDER BY Event.StartDate, Result.Rank;
```

## Database Structure

```SQL
WinterOlympicsDB.sql: Contains the SQL statements to create the database schema and insert sample data.
```

## Usage

1. Import the database schema and sample data using the WinterOlympicsDB.sql script.
2. Execute the provided queries to retrieve specific information from the database.
