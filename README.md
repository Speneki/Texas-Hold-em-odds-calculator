# Texas Hold 'em Odds Calculator

[Live link]( https://speneki.github.io/Texas-Hold-em-odds-calculator/)

## Background and Overview

Prior to studying software development, I spent the majority of my time playing Texas Hold 'em. Both online and live, the hands equity is something that any player needs to be able to calculate on the fly in order to ensure that they are getting their money in good against their opponents perceived range. To be sure that a user is calculating correctly, after the hand is over it is common for players to discuss or list out the possible cards that could fall as they articulate the mental math they went through in the hand. What I intend to show here is simple and streamlined interface for users to quickly access and calculate that math in between hands.

## WireFrame: 

![wireframe](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/wireframe.png)

Here we can see the way my proposal should look as a completed project. Each rectangle will be a clickable box that gives an option to place any of the remaining remaining card from the deck. It will claculate the odds of one hand against one opponent preflop, on the flop, on the turn and the river in a standard 52 card deck.


![functioningApp](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/readme-display.gif)

## Functionality: 
  Upon entering the page, a user is immediately prompted to enter the cards in their hand, then the cards in their opponents. When each hand is filled, the odds are displayed before any cards fall. Equity is calculated using a Monte Carlo system that randomly plays through 10,000 poker boards and asserts statistics within ~0.85%. As each community card is selected, up to 10,000 more poker hands are played out, or however many are possible with the cards remaining in the deck. By the last card falling, one player has reached 100%, and the other 0% chance of winning.
  
![percentages](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/Screen%20Shot%202019-08-19%20at%209.33.36%20AM.png)

  
## Architecture and Technologies:
Texas Hold 'Em Odds Calculator is built with:

- ```Vanilla JavaScript``` for data retrieval and computation
- ```d3.js``` + ```HTML5``` + ```SVG``` + ```CSS3``` for visualization and interactivity
- ```Webpack``` + ```Babel``` for bundling js files
- ```Deck Of Cards API``` for card photos and values
- ```poker-odds API``` for calculating poker odds

Enjoy!

## MVPS
  - [x] logic behind any hand vs any other hand calculation 
  - [x] interface in which a user can decide thier hand and their opponents
  - [x] cards, when selected, are removed from the possible selection of cards
  - [x] percentage updates as soon as a calculation is available
  
## Development Timeline

  ### Day One: 
  - [x] set up files and folders
  - [x] find proper APIs for generating Hands, displaying cards
  - [x] find proper API for calculating winner
  - [x] Research D3 data visualization
  - [x] fetch and receive json from APIs in console
  
  ### Day Two: 
  - [x] reseatch how to place anything on the screen using DOM manipulation
  - [x] Get my files to interact properlly 
  
  ### Day Three:
  - [x] render cards on the screen
  - [x] have cards fill on click
  
  ### Day Four
  - [x] Live update on wach card click the percentages of win/tie
  - [x] Add more flair to the look of the site
