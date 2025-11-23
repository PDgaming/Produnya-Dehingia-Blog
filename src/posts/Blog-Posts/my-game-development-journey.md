<!-- {"title": "My Game Development Journey", "slug": "my-game-development-journey", "date": "2025-07-31"}-->

I have always had a keen interest in game development. But for some reason, i have always found it to be a really hard subject. And despite trying to learn it on many occasions, and even making a few games, whether in Unity, Godot or Pygame by following tutorials online. I never quite really grasped it... It just always seemed like a really hard thing to do.

But i was quite good at web development. So naturally i shifted my focus completely on that, and forgot about game development entirely. I thought that, i have my own set of skill set, and i would be fine with just web development. But somewhere inside me, there was a fire. A fire set by the challenge that i was not able to understand game development. You see, whenever i don't understand something, it feels like that thing is challenging me in a way, so there ignites a deep passion to understand that thing until i am satisfied.

So when i finally got some of that 3AM motivation in the middle of the day during the last weeks of our summer vacations, i wasn't going to let that go to waste. So i sat down and started learning graphics programming.

I probably spent ours looking for the right tutorials, and reading documentations trying to get at least something showing on my screen.

I already had some intuitive understanding of the core concepts behind how graphics works in a computer from watching videos by [Branch Education](https://www.youtube.com/@BranchEducation) and [Sebastian Lague](https://www.youtube.com/@SebastianLague/videos), primary from this video: [How do Video Game Graphics Work?](https://www.youtube.com/watch?v=C8YtdC8mxTU) by Branch Education. So having the small knowledge i had, i looked for tutorials, and finally found this series on YouTube by [Victor Gordan](https://www.youtube.com/@VictorGordan) [OpenGL Tutorials](https://www.youtube.com/playlist?list=PLPaoO-vpZnumdcb4tZc4x5Q-v7CkrQ6M-), where he teaches how to use OpenGL(which is an API that is used to render 2D or 3D graphics) in C++. Although i only watched till the 7th video of the series(till Textures). But i will complete the whole series, as there is much more to learn.

From this, i was able to understand how graphics is rendered in a computer, and also clarify the core concepts about graphics programming. But that was pretty much it. I had learnt about how to render graphics using this library. But i didn't look much into anything else.

Until, the other day, when I overheard two of my classmates talking about making a game; or perhaps it was something else.. i am not quite sure, but i got the idea that i would learn game development!

So i came home, and my first intuition was to ask Gemini how the graphics pipeline, that draws stuff on the screen interacts with other components of a complete game. I had already learnt how to draw basic shapes on the screen with OpenGL, but i was doing so by manually defining the positions of each vertex. But obviously that's not be a proper way of doing things at scale in a complete game.

After much back forth with Gemini, i was finally able to understand that we can just update the position of the objects drawn in the game on various events such as keyboard inputs.

So after quick googling, i was finally able to get a simple OpenGL program running in python:

```python
import OpenGL

from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *

def square():
	glBegin(GL_QUADS)
	glVertex2f(100, 100)
	glVertex2f(200, 100)
	glVertex2f(200, 200)
	glVertex2f(100, 200)
	glEnd()

def iterate():
	glViewport(0, 0, 500, 500)
	glMatrixMode(GL_PROJECTION)
	glLoadIdentity()
	glOrtho(0.0, 500, 0.0, 500, 0.0, 1.0)
	glMatrixMode(GL_MODELVIEW)
	glLoadIdentity()

def showScreen():
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
	glLoadIdentity()
	iterate()
	glColor3f(1.0, 0.0, 3.0)
	square()
	glutSwapBuffers()

glutInit()
glutInitDisplayMode(GLUT_RGBA)
glutInitWindowSize(500, 500)
glutInitWindowPosition(0, 0)
wind = glutCreateWindow("OpenGL Coding Practice")
glutDisplayFunc(showScreen)
glutIdleFunc(showScreen)
glutMainLoop()
```

This is a simple program that renders a window, and draws a simple square on it. This was all i could do on my own. And as you can see, i am still manually defining each of the four vertex of the square in order to draw it.

Then i thought that instead of using a primitive shape, why not use a sprite instead?

That's exactly what i did, after getting a simple player sprite from the internet, cropping it, and removing the background and everything, and even more googling, and a little bit of prompting, i was finally able to get the player sprite on the screen.

But even then, it was just a still image on the screen. It didn't move, nor could it be moved.

So the next step was to implement some keyboard controls.

I didn't use any library to do this, which was my first intuition.. but instead i used the `glutKeyboardFunc` function to initialize a `keyboard_down` and `keyboard_up` function, which would handle all the keyboard inputs.

And after some more trial and error, we had W, A, S, D working!!!

My next goal was to convert the player into a class. I didn't really have a reason to do this, apart from i have seen other people do this, and i just thought it was good practice..

So i made a player class, with it's `init`, `draw`, and, `update` functions.

At this point i just wanted to see how far i could push this small project. So i tried to implement gravity next. My goal was to implement the physics as much like real life as well. Learning equations at school about gravitation and motion at that time, i was really excited to just plop the formulas into my program.. But it wasn't going to be that simple.

I implemented a naive gravity solution, that simply reduced the y position of the player object at each calculation, and that seemed to work just fine at first, but i soon realized that since it's bringing the player down all the time, jump was not going to work....

After some time thinking about it, i just turned to AI, and found out that we should instead be using velocity instead of directly changing the x or y position. Just like real life i guess..

So again, after much back and forth, and using velocity and a value of g as 980(cause 9.8 was having a very small effect for some reason..), We finally had gravity! And jump as well!

At this point, i had decided that i would make a platformer game. I started this project as a way to test out how things worked, and see what i could do with OpenGL, which turned out was a lot! But now i had ideas forming in my mind about how i would be making this platformer game.

So, i started working towards that. It's always fun, more engaging and more rewarding when you are working towards a goal instead of just doing random stuff...

Anyway, after even more back and forth with google, gemini and my editor, i finally had a "platform", which just another sprite image that i was loading as the ground.

I even added a small feature to rotate the player sprite based on the direction it was moving towards to add a little bit of vibe to the game.

Now came the collision detection part.

So before i had just manually set the minimum y value of the player object to be above the ground, so that it always appeared above it, but now it was time to implement some real collision detection.

So, first i went to implement a way to generate platforms. I created another class like the player class that i used to generate multiple platforms. For this i just manually had a bunch of lines that were initializing a new platform object with different position and size values.

Now, i had already known a little about how collisions work in a video game. I don't exactly remember how, but i saw a video about the bounding box collision method, so i used that for collision and finally implement a proper collision with the ground and the platforms as well.

Some debugging later, that was done as well.

And after adding a few more platforms, i had a complete level.

And that was the whole thing. I know it's a little underwhelming, but i have a lot in pocket for this one. I woke up the next day and i had this crazy lore and game idea for this game. I don't really want to hype it up too much or set crazy expectations.. cause that often back fires for me... So i won't talk about it much here.. But in the future i think this project will turn out pretty nice.

For the future, i definitely have some plans such as:
1. 3D implementation.
2. My own sprites.
3. Enemy system.
4. Combat system.
5. A better Level system.
6. And much more!!