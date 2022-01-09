# User account demo

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
The project uses BeautifulSoup and Python to scrape a website for data, in this case Jimms.fi for GPU prices, formats the scraped data into a more readable form, and 
stores it in an csv file with the columns Brand, Product, Price and Date (of when the data was scraped). The CSV file can be easily accessed with an SQL program, and then displayed on a graphical platform like Tableau, like I have done in 
my COVID data exploration project.

In the future it could be interesting to scrape a website more thoroughly for data, and then port it to 
Made with the help of Alex Frebergs's tutorial (https://www.youtube.com/watch?v=HiOtQMcI5wg).
	
## Technologies
Project is created with:
* Python
* Jupiter Notebook
* BeautifulSoup
	
## Setup
To run this project, copy-paste the code onto a Jupiter Notebook, and replace the 'headers' value with the User-Agent of the browser youre using (underlined with 
blue in the picture below).

![GPU-web-scraper-user-agent-replace-pic](https://user-images.githubusercontent.com/94180117/148689113-ba03b059-ed28-48dc-9afb-6f185644bb4d.png)

You can get it by going to https://httpbin.org/get and choosing copying the section highlighted in green in the picture below.

![GPU-web-scraper-user-agent-pic](https://user-images.githubusercontent.com/94180117/148688979-c5c2ea82-d1ae-421f-b600-4bc288b6610c.png)


Then run the code. It should create the datafile under '/Users/username/JimmsWebScraperDataSet.csv'.
The resulting CSV file opened in Excel should look like the one below (in this case I ran the code 3 times, so the data is written thrice).

![GPU-web-scraper-csv-pic](https://user-images.githubusercontent.com/94180117/148688639-5275df77-71b6-4dd4-9ada-4ab0910aaeb7.png)
