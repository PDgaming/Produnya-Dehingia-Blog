<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 4", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-4", "date": "2026-06-22"}-->
## Doing the Math by Hand

The next day at school, we had Physics. Or at least, we were supposed to.. The teacher was absent..

Meanwhile, I couldn't stop thinking about backpropagation. ChatGPT had explained the math to me the previous day, and for the first time, it actually made sense.

But there was one problem. Watching someone else solve a problem isn't the same as solving it yourself.  I could follow every step ChatGPT took. I could understand every explanation. But if you took the screen away from me and handed me a blank sheet of paper... Could I still do it? I wasn't sure. So I opened my notebook and decided to find out.

### Building the Simplest Possible Problem

I wanted to remove every unnecessary complication. No hidden layers. No activation functions. Just one neuron.

I picked some simple numbers.

```
x = 2          # input
w = 3          # weight
b = 1          # bias

target = 10
learning_rate = 0.1
```

Our neuron is simply:

```
y = wx + b
```

Substituting the values gives us:

```
y = (3 x 2) + 1
  = 7
```

So our model predicts **7**.

Unfortunately, the correct answer is **10**. Now we know the model is wrong. The next step is to measure _how wrong_.

### Calculating the Loss

I used the Mean Squared Error loss function.

```
L = (target - prediction)²
```

Substituting our values:

```
L = (10 - 7)²
  = 3²
  = 9
```

So our current loss is **9**.

If the loss ever becomes **0**, we'll know our neuron is making perfect predictions. So now comes the interesting part. How do we reduce that loss?

### The Question That Matters

If increasing the weight makes the loss smaller, then we should increase the weight. If increasing the weight makes the loss larger, then we should decrease it. So all we really need is one number: How quickly the loss change when the weight changes?

That's exactly what this derivative represents:

```
∂L
──
∂w
```

But we can't compute it directly because the weight doesn't affect the loss immediately. It first changes the output. The output changes the loss. Like dominoes falling. So we calculate each step separately.

#### Step 1

How much does the loss change if the output changes?

Our loss is

```
L = (target - y)²
```

Differentiate it with respect to **y**.

```
∂L
── = 2(y - target)
∂y
```

Substitute our values.

```
2(7 - 10)
= -6
```

That tells us something important: Increasing the output would decrease the loss.

#### Step 2

Now we ask another question: How much does the output change if the weight changes?

Our neuron is

```
y = wx + b
```

The input `x` is just a constant. The bias is also a constant. Only the weight is changing. The derivative is therefore simply:

```
∂y
── = x
∂w
```

Since

```
x = 2
```

we get

```
∂y
── = 2
∂w
```

#### Step 3

Now we combine the two using the chain rule.

```
∂L   ∂L   ∂y
── = ── x ──
∂w   ∂y   ∂w
```

Substituting the numbers:

```
(-6) x (2)
= -12
```

That number is called the **gradient**. It tells us the direction we should move.

### Updating the Weight

Gradient descent uses one simple rule.

```
new_weight = old_weight - learning_rate × gradient
```

Substituting our values:

```
new_weight = 3 - (0.1 × -12)
= 3 + 1.2
= 4.2
```

Our weight has changed from

```
3
↓
4.2
```

That might not seem exciting. But let's see what happens.

### Running the Neuron Again

Using our new weight,

```
y = 4.2 × 2 + 1
= 9.4
```

Before updating the weight, our neuron predicted `7`, but now it predicts `9.4`. Much closer to our target of **10**.

The new loss becomes:

```
(10 - 9.4)²
= 0.36
```

The loss dropped from `9` to `0.36`. Just by updating a single number.

I remember staring at those calculations in my notebook for a few seconds. It had actually worked. And this time it wasn't because i copied someone's code, or a library did it for me, but because I understood every single step.

It took me nearly three class periods to derive those few lines of mathematics. But I don't regret spending those three periods. Because for the first time in four years, backpropagation wasn't something I could memorize. It was something I could derive. And that meant there was only one thing left to do. Go home. Open my editor. And see if I could teach a computer to do the exact same calculations.

