# Texas Hold 'em Odds Calculator

## Background and Overview

Prior to studying software development, I made a living playing Texas Hold 'em. Both online and live, the odds of winning are something that any player needs to be able to calculate on the fly in order to ensure that they are getting their money in good against their opponents perceived range. To be sure that a user is calculating correctly, it is common to check the odds on a computer after the hand is over. What I intend to show here is simple and stramlined interface for users to quickly access in between hands.

## WireFrame: 

![wireframe](https://github.com/Speneki/Texas-Hold-em-odds-calculator/blob/master/wireframe.png)

Here we can see the way my proposal should look as a completed project. Each rectangle will be a clickable box that gives an option to place any of the remaining remaining card from the deck. It will claculate the odds of one hand against one opponent preflop, on the flop, on the turn and the river in a standard 52 card deck.

## Functionality: 
  - Users can place any hand against any other possible hand thier opponent could make
  - Users can quickly calculate their available remaining outs to see their change of winning
  - It opperates as soon as a calculation is possible
  
## MVPS
  - [ ] logic behind any hand vs any other hand calculation 
  - [ ] interface in which a user can decide thier hand and their opponents
  - [ ] cards, when selected, are removed from the possible selection of cards
  - [ ] percentage updates as soon as a calculation is available
  
## Development Timeline

  ### Day One: 
  - [ ] set up files and folders
  - [ ] find proper APIs for generating Hands, displaying cards
  - [ ] find proper API for calculating winner
  
  ### Day Two: 
  - [ ] On click, offer the option to fill any space with any card of their choosing
  - [ ] Remove the card when clicked from the deck of clickable cards
