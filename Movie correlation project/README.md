# Movie correlation project

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
In the project I explore the correlations between values in a data set, and then displays them using various graphs using Pandas, Numpy and Seaborn. 
The project uses Daniel Grijalva's dataset on movies released in the last four decades from https://www.kaggle.com/danielgrijalvas/movies

The project was made with the help of Alex Frebergs's tutorial (https://www.youtube.com/watch?v=iPYVYBtUTyE).
	
## Technologies
Project is created with:
* Python
* Jupiter Notebook
* Pandas
* Numpy
* Seaborn
	
## Setup
To run this project, copy-paste the code onto a Jupiter Notebook, and download the dataset from the link provided above. Then replace the filepath with the 
directory you downloaded the dataset to; for example 'df = pd.read_csv(r'C:\Downloads\movies.csv')'

![filepath-pic](https://user-images.githubusercontent.com/94180117/148690000-8d375b21-672c-4a69-b876-904d8fa5fc58.png)

Then run the code. It should show you different graphs based on the data in the Jupiter Notebook, some of them pictured below.


This one checks if there are any outliers in the data as a subplot:
![graph2](https://user-images.githubusercontent.com/94180117/148690162-8f4fc4b5-888e-4f68-9dee-95224b6092c0.png)

This one shows the movies' gross revenue and its correlation on the budget of the movie as a scatterplot:

![graph3](https://user-images.githubusercontent.com/94180117/148690245-107f56fb-3dcd-4ac3-ac44-6d9a3016809e.png)

This one makes a correlation matrix from all the values provided in the dataset. We can see that gross revenue and budget have the highest positive
correlation out of all of them:

![graph4](https://user-images.githubusercontent.com/94180117/148690353-35570828-71a3-4ed3-9a51-ceae8b98770e.png)
