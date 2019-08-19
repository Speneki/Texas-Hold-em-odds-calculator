# Texas Hold 'em Odds Calculator

## Background and Overview

Prior to studying software development, I made a living playing Texas Hold 'em. Both online and live, the odds of winning are something that any player needs to be able to calculate on the fly in order to ensure that they are getting their money in good against their opponents perceived range. To be sure that a user is calculating correctly, after the hand is over it is common for players to discuss or list out the possible cards that could fall as they articulate the mental math they went through in the hand. What I intend to show here is simple and stramlined interface for users to quickly access in between hands.

## WireFrame: 

![wireframe](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/wireframe.png)

Here we can see the way my proposal should look as a completed project. Each rectangle will be a clickable box that gives an option to place any of the remaining remaining card from the deck. It will claculate the odds of one hand against one opponent preflop, on the flop, on the turn and the river in a standard 52 card deck.


![functioningApp](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/Screen%20Shot%202019-08-19%20at%209.25.39%20AM.png)

![percentages](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/src/assets/Screen%20Shot%202019-08-19%20at%209.33.36%20AM.png)
## Functionality: 
  - Users can place any hand against any other possible hand thier opponent could make
  - Users can quickly calculate their available remaining outs to see their change of winning
  - It opperates as soon as a calculation is possible
  
## MVPS
  - [x] logic behind any hand vs any other hand calculation 
  - [x] interface in which a user can decide thier hand and their opponents
  - [ ] cards, when selected, are removed from the possible selection of cards
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
  - [ ] Add more flair to the look of the site
