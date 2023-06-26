# GildedRose-test
Mock interview tech test

A refactoring challenge originally created by Terry Hughes (http://twitter.com/TerryHughes) and translated into Ruby by Emily Bache [here](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/README.md).

# GildedRose Summary

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:
```
Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
```
We have recently signed a supplier of conjured items. This requires an update to our system:
```
“Conjured” items degrade in Quality twice as fast as normal items
```
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

## The brief
Choose legacy code (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

## Design

This project contains a set of classes for managing a shop's inventory. The main classes include Item, Items, and Shop. 

The Item class represents an item in the inventory with properties like name, sellIn, and quality. 

The Items class handles different item types and has methods for updating their quality. 

The Shop class represents the shop and contains an array of items. It provides a method to update the quality of all items in the shop. Refer to the usage instructions below for more details.

## Installation instructions
make sure you are on the correct version of node
```
; nvm use node
```
Next, initialise the NPM project
```
; npm init -y
```
Then, add the jest package to our project and intall globally
```
; npm add jest
; npm install -g jest
```
you can now run the tets by entering 'jest' into the command line

## Demonstration

![Some foo](./images/Screenshot%202023-06-26%20at%2011.17.49.png)
![Some foo and conjured](./images/Screenshot%202023-06-26%20at%2011.19.32.png)
