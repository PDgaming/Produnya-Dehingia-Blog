<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 2", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-2", "date": "2026-06-22"}-->
## Four Years of Not Understanding

My first attempts at building a neural network were... not very successful.

For anyone unfamiliar with MNIST, it is a dataset of thousands of handwritten digits, each represented as a 28x28 grid of grayscale pixels. It has become something of a rite of passage in machine learning. If you're learning neural networks, chances are you'll encounter MNIST sooner of later.

I certainly did. I followed tutorials line by line. The models trained. The accuracy numbers went up. The demonstrations looked impressive. But i wasn't learning. Every tutorial seemed to expect me to accept a leap of faith. A variable would suddenly appear, a gradient would be calculated, a weight would be updated, and somehow the network became better at recognizing numbers.

Why? Nobody seemed to answer the question.

Instead, I kept seeing pages of calculus, matrices, and symbols that looked completely foreign to me. The code felt more like a magic spell than something I actually understood.

So I tried a different approach. If I couldn't understanding someone's else's neural network, maybe I could build a simpler one myself.

Instead of using handwritten digits, I created my own tiny dataset.

Each image was just a 5x5 grid of black and white pixels. Every pixel could only be either 0 or 1, making the problem dramatically simpler than MNIST.

```
0 1 1 1 0
0 0 0 1 0
0 1 1 1 0
0 1 0 0 0
0 1 1 1 0
```

My idea was simple. Instead of letting a neural network discover patterns, I would manually check whether the correct pixels were turned on. If they were, I'd predict the corresponding number. And I proudly called the project: [Number Guessing Neural Network (3×3 Grid) CNN](https://github.com/PDgaming/Number-guessing-Neural-Network-3X3-grid--CNN)

Looking back... It wasn't a neural network. And it definitely wasn't a convolution neural network. It was mostly a collection of nested `if` statements spread across several files. Something like this:
```python
if node2_1_1 and node2_1_2 and node2_1_3 == True:
    print("Guess: The number is one")
elif node2_0_1 and node2_0_2 and node2_0_3 and node2_0_4 == True:
    print("Guess: The number is zero")
elif node2_2_1 and node2_2_2 and node2_2_3 and node2_2_4 and node2_2_5 == True:
    print("Guess: The number is two")
elif node2_3_1 and node2_3_2 and node2_3_3 and node2_3_4 == True:
    print("Guess: The number is three")
elif node2_4_1 and node2_4_2 and node2_4_3 == True:
    print("Guess: The number is four")
elif node2_5_1 and node2_5_2 and node2_5_3 and node2_5_4 and node2_5_5 == True:
    print("Guess: The number is five")
elif node2_6_1 and node2_6_2 and node2_6_3 and node2_6_4 and node2_6_5 == True:
    print("Guess: The number is six")
elif node2_7_1 and node2_7_2 == True:
    print("Guess: The number is seven")
elif node2_8_1 and node2_8_2 and node2_8_3 and node2_8_4 and node2_8_5 == True:
    print("Guess: The number is eight")
elif node2_9_1 and node2_9_2 and node2_9_3 and node2_9_4 == True:
    print("Guess: The number is nine")
else:
    print("Guess: Can't identify number")
```

By today's standards, it was terrible. But I don't regret building it. Because for the first time, I was thinking about how information flowed through a system. Pixels came in, calculations happened, and eventually a prediction came out. It wasn't learning, but it was the first project that made me stop thinking about AI as "magic" and start thinking about it as a sequence of computations.

That tiny project taught me something every tutorial had failed to teach. Complex systems are just lots of simple steps connected together.

Unfortunately, it also showed me how limited that approach was. Every new pattern meant writing more code. Every new digit meant adding more conditions. There was no learning, only more programming.

Eventually, I hit another wall. I didn't know how to make the computer improve by itself.

Over time, I drifted back toward web development, which had been my original interest. I built websites, learned frameworks, and spent far less time thinking about neural networks.

But the curiosity never really disappeared. Every now and then, I'd come across another video by creators like 3Blue1Brown or Veritasium explaining machine learning. I'd watch it, understand a little more than before, and immediately feel the urge to try building another model.

Every attempt followed the same pattern: I could usually implement the forward pass. I could even get the activation function like ReLU working.

But the moment I reached **backpropagation**, everything fell apart. That single word became my biggest obstacle.

It wasn't that I couldn't copy the code. I could. It was that I couldn't explain _why_ the code worked.

The tutorials would suddenly explode into derivatives, partial derivatives, gradients, and chain rules. To someone who hadn't even learnt quadratic equations yet, it felt impossible.

The notation alone was intimidating. And for a long time, I convinced myself that backpropagation was simply beyond me.

Then, about two years ago, I decided to fix one of the biggest gaps in my knowledge. I started learning calculus.

I'm still far from an expert, but learning derivatives changed something. The symbols slowly stopped looking like hieroglyphics and the equations became less frightening.

I still couldn't derive backpropagation myself and I still couldn't explain why it worked. But for the first time, it no longer felt impossible. I just didn't realize how close I was to finally understanding it.