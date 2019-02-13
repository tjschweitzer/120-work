# Week 5 Review

## What Happened This Week

  - This week we got in to what I am more comferable with when it comes to this class the coding portion
  - After watching all the videos  and reading all the content for the week I dove in to the p5 resouce webpage to see what else I could learn and do for this project.
  - When watching one of the videos they talked about conditional statements (If statements) to make the circle no just keep going after it got to the end of the screen. This make me think of the dvd screen saver that used to come up on most dvd players where it would change colors every time it hit a edge of the screen.


 # Problems
 ##### Oh so many where to start

1. It took some thought initially to figure out how to make the square change directions when it reached any of the borders. Initially I used an if else if statement
2. Then this statement didn’t have the desired effect when it hit the corner exactly so I had to break it up in to separate if statements in case it hit the exact corner
3. Making the cube change colors wasn’t tricky but I had to figure out how to make it co through the majority of the spectrum and not just a single color This took one if statement for each color transition and a nested if statement for when if finished that color range and what was essentially a counter for each type of transition
4. Then I decided to make the cube rotate Initially I tied this to frame count but I decided to tie the rotation to the mouse’s Y position so that needed to be recoded so the change in rotation speed was smooth
5. Finally I tied the speed of the color rotation to the mouse’s X position I had to add a lot of extra handles in this so the variables for Red Green and Blue didn’t go outside of the 0-255 range.
