<!-- {"title": "An Unexpected Discovery in the Middle of Assamese Class", "slug": "an-unexpected-discovery-in-the-middle-of-assamese-class", "date": "2025-11-23"}-->

Today in school, I found myself drifting away from the class and into my own thoughts. I’d been thinking a lot about what subjects I want to take in 11th grade. PCMB has been on my mind, but the part that kept bothering me is whether I’ll be able to keep up with the math. I’m not exactly _that_ good at math. But I want to study Computer Science in the future, and I’ve heard that discrete math is essential for CS. That’s what really pushed these thoughts forward.

So there I was, sitting in Assamese class, thinking about what discrete math even contains. I remembered bits from random videos I must’ve watched ages ago, especially something about graphs. Out of boredom, I started drawing random nodes and edges on my desk, just connecting points for no reason. One thing led to another, and suddenly I was sketching a 2D grid, like a 3×3 plane, with nodes connected by straight edges.

This triggered another memory: something about finding the quickest way through a graph. I couldn’t recall the exact problem, but I decided to recreate it. I took two opposite corners of the grid and labeled them A and B. Then I started manually counting the number of edges in different routes between them. I tried going along the side, then diagonally, trying to think of the shortest path in my mind and tracing it along the edges, and every single time, the total count came out the same. That was weirdly exciting. I realized that whether I moved purely horizontally/vertically along the sides or took diagonal-like paths (stair-step paths), the distance was always the same.

Class was boring anyway, so I kept experimenting. I changed the grid from 3×3 to 3×4, then 4×4, then more. Each time, the diagonal route and the side route ended up having the same total number of edges. That’s when I started noticing a pattern.

If the length of the grid had 4 nodes, there were 3 edges between them. Same idea for the width. Always one less. That relation hit me because it reminded me of the way I visualize area and perimeter formulas of a rectangle for some reason, the numbers were behaving similarly. So I tried forming a formula for the distance between opposite corners of the grid. It came out as:

**d = (l − 1) + (w − 1)**

Where _d_ is the distance, and _l_ and _w_ are the number of nodes, basically a form of length.

I tested it by putting in the values. It worked! I changed the values. Still worked! And each time I counted the edges by hand, a perfect match every time! It felt like I’d just discovered something.

To make it look cooler, I converted the inputs into a vector:  
**v = [l w]**
Representing length and width.

So the formula became:  
**d(v) = (v₁ − 1) + (v₂ − 1)**

It worked exactly the same.

Then just for fun, I changed the straight rectangular pattern into a zig-zag one. It still worked! Changed it again. Worked _again_! At this point, the idea felt crazy.

Then I wondered: what about **3D**?

What if instead of a flat 2D plane, I made a cube of nodes? I drew a cube with nodes only at the vertices. I counted the edges from one corner of the cube to the opposite corner. It followed the exact same logic!

I immediately extended the formula by adding another term:
**(v₁ − 1) + (v₂ − 1) + (v₃ − 1)**

I tested it on a simple 2×2×2 cube:
**(2−1) + (2−1) + (2−1) = 3**

I counted the edges.
And It was _exactly_ 3!

At that moment I knew I was onto something. I copied everything from the desk to my notebook, and showed it to my friend. He was surprised to see how the formula calculated the perfect value each time.

Then, I tried a bigger 3D example: a cuboid with dimensions **[5 4 4]**. I drew it front of my friend, and put the values in the formula. The formula gave 10.
I counted the edges in front of my friend.
10.
Exactly 10!

My friend was surprised, and honestly, so was I. My friend even told me to show our math teacher in the next class. He clearly understood it enough to see it was something cool and was excited about it. But I got nervous and didn’t end up showing sir hehe..

So yeah… somehow, completely by accident, I’d discovered this weird pattern and formula.

After class ended and the day wrapped up, I went home still thinking about it. I opened ChatGPT, as one does to talk about these things, and explain the whole story exactly as it happened, every step, every thought, everything I tried, and asked what this even _was_ and whether it was useful.

And that’s when I learned the truth:  
I had accidentally rediscovered the formula for the **shortest path on an axis-aligned grid graph**, also known as the **Manhattan Distance formula**, or in 3D, the **taxicab metric**, or simply the **L1 norm**.

A formula mathematicians have known for years, something fundamental in computer science, geometry, graph theory, pathfinding, robotics, networking, and AI.

And I figured it out on a boring school day out of pure curiosity.