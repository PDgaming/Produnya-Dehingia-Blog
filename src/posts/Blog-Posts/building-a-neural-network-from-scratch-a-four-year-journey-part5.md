<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 5", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-5", "date": "2026-06-22"}-->
## Turning the Math into Code

I got home that day with one question on my mind: If I can do this with a pencil, can I teach a computer to do the exact same thing? At this point, I wasn't trying to build a state-of-the-art neural network, I had a much smaller goal: Given an input `x` and a desired output `y`, could I write a program that automatically learned the correct weight?

In other words, could the computer solve this equation on its own?

```
xw + b = y
```

Not by rearranging the equation or by solving it algebraically. But by repeatedly making tiny improvements using gradient descent. If that worked, then I knew the mathematics in my notebook were actually correct.

### Starting With the Forward Pass

The first step was the easiest. A neuron simply computes

```
y = wx + b
```

So I turned that directly into Python.

``` python
def forward_pass(x, weight, bias):
    return x * weight + bias
```

I tested it with the same values from my notebook.

``` python
x = 2
w = 3
b = 1

print(forward_pass(x, w, b))
# 7
```

The computer agreed with my handwritten calculations. That was a good start.

### Measuring the Error

Next came the loss function. Since I had already used Mean Squared Error on paper, I wrote exactly the same thing in code.

``` python
def mse(prediction, target):
    return (prediction - target) ** 2
```

Testing it again:

``` python
prediction = 7
target = 10

print(mse(prediction, target))
# 9
```

Again, it matched my notebook perfectly. But so far, the program wasn't learning anything. So, we needed backpropagation.

### Turning the Derivatives Into Code

Backpropagation sounded intimidating for years. But once I had worked through the derivatives myself, writing the code became surprisingly straightforward.

We already know

```
∂L
── = 2(y - target)
∂y
```

and

```
∂y
── = x
∂w
```

The chain rule tells us to multiply those together. In Python, that became:

``` python
gradient = 2 * (prediction - target) * x
```

That single line represented everything I had spent three physics periods deriving.

### Updating the Weight

Once the gradient had been calculated, updating the weight was only one more line.

``` python
weight -= learning_rate * gradient
```

That was it. The famous "learning" step of a neural network was literally one subtraction.

At that moment, something finally clicked. For years, I had imagined neural networks as these impossibly complicated systems. But underneath everything; the layers, the activation functions, the matrices, the fancy diagrams, they were all built on incredibly simple operations.

Multiply. Add. Measure the error. Calculate the gradient. Take a small step. Repeat.

### The Training Loop

Of course, one update isn't enough. Gradient descent doesn't usually find the perfect answer immediately. Instead, it improves the weights a little bit every iteration.

So I wrapped everything inside a loop.

``` python
for epoch in range(epochs):
    prediction = forward_pass(x, weight, bias)
    loss = mse(prediction, target)
    gradient = 2 * (prediction - target) * x
    weight -= learning_rate * gradient
```

Looking back, it's amazing how little code was actually required.

Each iteration followed exactly the same sequence:

```
Input
  ↓
Forward Pass
  ↓
Prediction
  ↓
Loss
  ↓
Gradient
  ↓
Update Weight
  ↓
Repeat
```

Every time the loop ran, the weight moved a little closer to the correct value. The prediction became a little more accurate. The loss became a little smaller. And eventually, the neuron learned.

### Watching It Learn

One of the most satisfying parts of the project was watching the numbers change. The first prediction was `7.0`. After updating the weight once, it became `9.4`. Then `9.88`. Then `9.976`. Then `9.9952`. 

Each iteration was a little better than the last. The neuron was following the slope of the loss function, taking tiny steps toward the minimum. Exactly like hiking downhill in thick fog. That was the moment everything finally came together. The mathematics worked. The code worked. And, most importantly, I understood _why_ it worked.

It had taken me four years to reach this point. But I had finally built my first neural network from scratch.

Well... Almost. Because this little program had one very obvious limitation: It only knew how to learn a single number. Real neural networks don't have one weight. They have thousands. Sometimes millions. And now even Billions! And my little Python script wasn't going to scale very far. If I wanted to build something that looked like a real neural network, I needed to stop thinking in terms of individual numbers and start thinking in vectors and matrices.

