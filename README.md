# 16answers
### Do you know JS's weird edge cases? Can you get them right without using a computer?

This was inspired by a tech test on paper which was given to me in a job interview.
The test seems to be to assess whether we know Node's edge cases by heart without looking up the reference or using a computer for trial and error.
That test's questions are below.

## The challenge

Answering the test questions is one challenge. You can get the answers from this repo.
The main challenge though, is to work out the key `k` missing from the program, which will make it output the answers for you.
So make sure you have the right answers from ansers.json before starting that!

And remember, it's a paper challenge - using a computer to doublecheck those little details of how Node behaves is cheating!


## The original test

The answers to each question are a,b,c,d, etc. in order. I'm too lazy to pu those letters in - sorry :P

1. What language changes does the ‘use strict’ declaration introduce?
>
>Prevents functions with duplicate parameters (` function (a,a) {} `)
>
>Upgrades == comparisons to ===
>
>Prevents setting properties on primitive types (` false.true = ‘’ `)
>
>both a & b
>
>both a & c
>
>All of the above


2. What does `100 + 010 + 010` evaluate to?

>111
>
>109
>
>It depends if we’re in strict mode


3. What does 0.1 + 0.2 evaluate to?

>0.3
>
>'0.10.2'
>
>0.30000000000000004
>
>something else


4. Which of the following evaluate to true?

>`0+1 + 0.2 == 0.3`
>
>`0+1 + 0.2 === 0.3`
>
>both
>
>neither

5. Which of the following evaluate to true?

>`false == ‘0’`
>
>`false === ‘0’`
>
>both
>
>neither

6. What is typeof NaN?

>NaN
>
>null
>
>object
>
>number
>

7. What is typeof [ ] ?

>array
>
>object
>
>something else
>

8. What is typeof typeof 1 ?

>number 
>
>string
>

9. How do you add an element to the end of an array arr?

>push()
>
>unshift()
>
>append()
>
>something else

10. Write a function to add two numbers that can be invoked as either add(1,2) or add(1)(2) (both invocations return 3)

11. What will the following code output?
```
for (var i=0; i<5; i++ ) {
	setTimeout (function () { console.log(i); }, i *100)
}
```

>0,1,2,3,4
>
>1,2,3,4,5
>
>0,1,2,3,4,5
>
>5,5,5,5,5
>
>4,4,4,4,4
>
>something else

12. What will the following code output?
```
for (let i=0; i<5; i++ ) {
	setTimeout (function () { console.log(i); }, i *100)
}
```
>
>0,1,2,3,4
>
>1,2,3,4,5
>
>0,1,2,3,4,5
>
>5,5,5,5,5
>
>4,4,4,4,4
>
>something else


13. In what order will the numbers be output to the console?
```
(function () {
	console.log (1);
	setTimeout ( ()=> console.log (2), 1000);
	setTimeout ( ()=> console.log (3), 0);
	console.log (4);
}) ();
```
>
>1,2,3,4
>
>1,3,4,2
>
>1,4,3,2


14. What will the following code output to the console.log
```
(function () {
	var a = b = 3;
})();
console.log (typeof a);
console.log (typeof b);
```
>number, number
>number, undefined
>undefined, number
>undefined, undefined


15. What does the following function output?
```
var x = 21;
function log() {
	console.log(x);
	var x = 20;
};
log ();
```

>20
>
>21
>
>undefined


16. Do the following functions return the same value?
```
function a() {
	return {
		bar : ‘hello’
	};
}

function b() {
	return 
	{
		bar : ‘hello’
	};
}
```
>
>Yes
>
>No- a() returns the object and b() returns undefined
>
>No- b() returns the object and a() returns undefined
>
>No – Something else happens


______________________________________________________________________________________

This test wasn't written by me. Credit goes to the author, though I'm not sure whether the author or his company want to be identified.










