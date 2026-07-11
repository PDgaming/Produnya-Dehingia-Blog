<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 7", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-7", "date": "2026-06-22"}-->
## A Slightly Bigger Challenge

Until now, I had mostly been testing individual pieces of the framework. A forward pass here. A backpropagation step there. But a neural network isn't useful because each individual component works. It's useful because everything works together.

So I gave it a simple task: learn the function

```
y = 3x + 2
```

I generated a small dataset where every input followed that relationship.

```python
x = np.array([
    [1],
    [2],
    [3],
    [4],
    [5]
])

y = np.array([
    [5],
    [8],
    [11],
    [14],
    [17]
])
```

To us, the pattern is obvious. Every time `x` increases by one, `y` increases by three, and the intercept being two. A human can recognize that, but the neural network starts with no idea. Its weights are initialized randomly. Its predictions are essentially random. Its loss is high. Everything it "knows" has to be learned from the data.

### Training

This is where all the pieces finally came together.

```python
model = Sequential([
    Dense(1, 16),
    ReLU(),
    Dense(16, 16),
    ReLU(),
    Dense(16, 1)
])

trainer.train(
    model,
    x,
    y,
    epochs=100000
)
```

### The Moment of Truth

Eventually, training finished. And now came the real test. I gave the model an input it hadn't explicitly memorized during the calculations.

```python
prediction = model.predict([[12]])

print(prediction)
```

The output was

```
Data: [12]
Prediction: [38.00945893]
```

The correct answer is

```
3 × 12 + 2 = 38
```

My model predicted `38.00945893`. Not exactly `38`. But close enough that the difference is almost negligible.

Seeing that number appear on my terminal was one of the most satisfying moments I've ever had while programming. Not because it was an impressive prediction. Any calculator can compute `3 × 12 + 2`. But that wasn't the point. The point was that **I never told the model the rule**. I never wrote `return 3 * x + 2`. The only information I gave it was a collection of example inputs and outputs. Everything else, the weights, the biases, the internal representations, was learned. Watching that happen in code that I had written myself was surreal.

## Looking Back

Four years earlier, I wanted to understand how ChatGPT worked. I thought I needed to understand impossible mathematics. I thought neural networks were full of mysterious algorithms that only researchers could comprehend.

I couldn't have been more wrong. At their core, neural networks are built from surprisingly simple ideas.

Multiply. Add. Apply an activation function. Measure the error. Compute a gradient. Update the weights. Repeat.

Of course, modern models are vastly more sophisticated. They contain billions of parameters, advanced optimization algorithms, attention mechanisms, normalization layers, and countless engineering improvements. But underneath all of that complexity, the foundation is still built on the same principles.

The equations I struggled to understand for years are the same equations that allowed my tiny network to learn a simple function. That realization completely changed how I think about machine learning.

## What's Next?

As proud as I am of this project, I don't consider it finished. In many ways, I think it's just the beginning. The original goal I set for myself four years ago still hasn't been completed. I still haven't conquered the MNIST dataset.

Back then, it felt impossibly difficult. Now, it feels like the natural next step.

But before I tackle handwritten digits, I want to revisit the tiny synthetic dataset I built years ago, the one I jokingly called a "CNN" even though it was really just a collection of `if` statements.

But this time, instead of hard-coding the answers, I want my neural network to learn them. Only then will I return to MNIST.

And after that? Who knows.. Four years ago, I wanted to understand how AI worked. Today, I have something much more valuable than a working neural network. I have confidence that, given enough time, I can understand the next thing too.