<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 3", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-3", "date": "2026-06-22"}-->
## The Day It Finally Clicked

A few days ago, I opened ChatGPT with a simple goal: I just wanted someone to explain **why backpropagation works**.

I expected another wall of calculus. Instead, something unexpected happened. The math... was actually simple. Or at least, much simpler than I had spent four years imagining.

The problem wasn't that backpropagation required impossible mathematics. The problem was that I had been trying to learn it from the top down instead of from the bottom up.

So let's start from the beginning.

### A Single Neuron

Imagine the smallest neural network possible. Just a single neuron.

A neuron takes some input, multiplies it by a weight, adds a bias, and produces an output.

Mathematically, that's just:

```
output = input * weight + bias
```

Or, if we use variables:

```
y = wx + b
```

That's it. There's no AI or machine learning yet. It's just the equation of a straight line.

Suppose our input is `2`, our weight is `3`, and our bias is `1`.

```python
x = 2
w = 3
b = 1

y = x * w + b

print(y)
# 7
```

The neuron predicts `7`. Simple enough. But there's an obvious problem. What if the correct answer was supposed to be 10? How does the neuron know that its prediction is wrong? It doesn't. We have to tell it.

### Measuring Mistakes

To improve something, you first need to measure how wrong it is.

This is where the **loss function** comes in. A loss function simply gives us a number that represents how bad our prediction was.

One of the simplest loss functions is **Mean Squared Error (MSE)**.

For a single prediction, it's just:

```
loss = (prediction - target)²
```

Suppose our neuron predicted `7`, but the correct answer was `10`.

```
prediction = 7
target = 10

loss = (prediction - target) ** 2

print(loss)
# 9
```

A loss of `0` means the prediction was perfect. The larger the number, the worse the prediction.

So now our neuron knows something important. It made a mistake. But it still doesn't know **how to fix it**.

### Which Way Should We Move?

Imagine you're hiking through thick fog. You know your goal is somewhere lower down the mountain, but you can't see it. What do you do?

You don't magically know the fastest route. Instead, you look at the ground beneath your feet. If the ground slopes downward, you walk downhill. If it slopes upward, you turn around. You repeat that process over and over until you reach the bottom.

Training a neural network works almost exactly the same way.

The "height" of the mountain is the loss. Our goal is to make that loss as small as possible.

So the question becomes: If I change this weight just a tiny little bit, will the loss go up or down?

That's exactly what a derivative tells us. A derivative is simply a measure of **how quickly something changes**.

If changing a weight slightly causes the loss to increase, the derivative is positive. If changing the weight causes the loss to decrease, the derivative is negative.

Once you know the direction, the update becomes surprisingly simple.

```
weight -= learning_rate * gradient
```

That's the entire idea behind **gradient descent**. Move the weight a tiny step in the direction that reduces the loss. Repeat. Again. And again. And eventually, the neuron starts making much better predictions.

### But There's One Problem...

We don't have the gradient yet. Our weight doesn't directly affect the loss. Instead, something else happens first.

The weight changes the output. The output changes the prediction. The prediction changes the loss. It's a chain of events.

```
Weight
  │
  ▼
Output
  │
  ▼
Loss
```

So if we want to know how changing the weight affects the loss, we have to follow that entire chain.

This is exactly what the **chain rule** does.

Despite its intimidating name, the idea is surprisingly straightforward. We ask two simple questions:

**First:** If the output changes a tiny bit, how much does the loss change?

**Then:** If the weight changes a tiny bit, how much does the output change?

Multiply those two answers together, and we know how much the loss changes when we change the weight. That's all the chain rule is doing. It breaks one complicated question into several much simpler ones.

The same idea repeats throughout a neural network. Each neuron affects the next neuron. That neuron affects the next. And eventually, one of them affects the final prediction. Backpropagation simply walks backward through those connections, calculating how much each weight contributed to the final error.

It's just a long chain of small calculations. And somehow... That realization completely changed how I looked at neural networks. For four years, I had imagined backpropagation as this mysterious algorithm that only mathematicians could understand. But when I stripped away the notation, all that remained were ideas I already understood:

- Measure how wrong the prediction is.
- Figure out which direction reduces that error.
- Take a small step.
- Repeat.

That was it. So next question was obvious. If I finally understood the math... Could I actually derive it myself?

