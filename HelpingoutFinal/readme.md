# Final Readme.md

## The Failed Attempt
Since a couple weeks before the final was even announced, I was mulling around ideas. Several of them, I found out later, did not fulfill the final's requirements, and so I settled on two ideas that I thought might: a notepad app or a to-do list. Eventually I settled on the to-do list, as I wanted to create something functional but also interesting to me, and I could find information on how to code a to-do list that I couldn't on a text editor. I was excited, and before proposals were even do, I was getting to work.

Fast forward a while and I realize my to-do list idea, or at least the version of one I'm trying to execute, doesn't quite fit the requirements of the final either. I'm pretty far in, what I've done so far has been fun and a great learning experience, and my coding grade is one of my highest, so I decided I'd continue the project as is and take whatever point loss may come. If need be, I was also willing to make my case as to why this project was beneficial to my learning, which I do still feel it was.

However, four days before the final is due and I'm pretty stressed out. Problems I haven't been able to fix in my code have arisen two days ago and I've psyched myself out about the final grade I quite like the grade I have and I have no idea how many points might be docked if I turn in a project that doesn't quite fulfill the most important requirement. I emailed the professor about a project change the night before and haven't heard anything back yet; I worked a decent portion of the day to fix the issues I was dealing with on my current project again, to no avail.

At this point, I'm saving what I have of the to-do list project to turn in, alongside a completely new, correct project that I'll be starting now, four days before the final is due.

## The New Proposal, Problems, and Plan
### The Proposal
The goal of the project is to utilize p5.js to make a game. I've got all fresh files ready to go and I'm leaning towards making something similar to Flappy Bird. My inspiration comes from the Coding Train YouTube channel we've used as a reference all year, which I've actually been subscribed to and deep-diving through since being introduced to it. I've seen several of the game-creation videos, including Snake, a Rubik's Cube, Flappy Bird, Clappy Bird, and a flower-watering version of Space Invaders, and I will be using the techniques and ideas I've witnessed--plus my own flare--to create a game of my own.
### The Problems
I imagine my biggest problem will be what little time I have to execute my final project and not knowing, really, how long said project will take. Other problems I expect to run into are learning how to create a game in general, as I've never done such a thing before, and my usual problem of missing small details and the like.
### The Plan
I have a little less then five hours of worktime left in day four, which I plan to use as best I can. After that, I'll see where I'm at and continue working if I feel awake enough to do so, or I'll use the entirety of day three to continue work, and so on until either the project is done or time to work on it is up. Essentially, my plan is energy drinks and burying myself up to my neck in the lagnuage of code for the next less than four days.

# The New Project Process
Here we go.

## Section One: Beginning
The first step was the basics, creating the canvas and adding a color to it to distinguish said canvas from the rest of the page. I made the canvas larger than a usual mobile game's would be, mainly out of curiosity. I have this idea of Flappy Bird, except the bird is a clown's nose that popped off and is now bouncing away (don't ask me why because I'm more clueless than you are); for this purpose, I made the background a sky blue, and I'd like to make the posts look like hills. If everything goes well, I'd like to rename the project "The Runaway Nose" as well.

Instead of using a class with the ball/nose, I learned from my to-do list project and The Coding Train (it was also mentioned briefly during the class assignment this semester) to create a separate sketch file, "nose.js", for construction; I also added this file to the index, so it could actually be called upon. Within this sketch, I create the object's starting position and draw the nose, then I go back to the main sketch and add a variable to allow this construction sketch to be called.

## Section Two: Movement
Now that the ball is created, I need to makeit move. I created the the falling motion variables and then the actual action within the nose sketch. After that, I added a command to call that action in the main sketch. I could have made the nose/ball stay on the screen after it dropped, but with the game's story line in mind, it amused me more to have it completely drop out of frame. That clown isn't getting his nose back now.

To control the nose, rather than it immediately falling to its doom, I added a function to allow pressing the '.' key to propel the nose upward. To do this, I also needed to add a variable that held the upward movement.

## Section Three: Obstacles
To make the obstacles, which I planned to be mountains or hills, I created another sketch called "mountain.js" and included it in the index. I created the initial information, such as x and y positions, speed, etc, then drew the objects themselves in a show funtion. While doing this, I realized that triangles (AKA the mountains) were difficult to piece together without proper coordinates, so I decided to make the obstacles circus-themed pillars. Unfortunately, while trying to make the obstacles appear in the overall sketch, I came across the issue of my array not working. I'm not sure what was the case for it, as it looked to me like everything was in order. After deleting and trying to rewrite it, as well as trying to find a different way to execute it, I eventually had to go back to past assignments and my reference codes to dissect a code that worked and figure out why mine wouldn't. 
