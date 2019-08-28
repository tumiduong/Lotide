# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tumiduong/lotide`

**Require it:**

`const _ = require('@tumiduong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: assertion to compare two equal values
* `assertArraysEqual`: assertion to compare two equal arrays
* `assertObjectsEqual`: assertion to compare two equal objects
* `eqArrays`: determines if two arrays are equal
* `eqObjects`: determines if two objects are equal
* `countLetters`: counts amount of times letters appear
* `countOnly`: count only the value passed
* `findKey`: find the key of an object by the value using a callback
* `findKeyByValue`: find the key of an object by the value
* `flatten`: flattens nested arrays into one array
* `head`: retrieves first element of array
* `letterPositions`: finds position of each letter in a string
* `map`: return new array based on callback function
* `middle`: finds middle values of array
* `tail`: retrieves all elements but the first
* `takeUntil`: slice array from beginning using a callback
* `without`: remove unwanted elements from array
