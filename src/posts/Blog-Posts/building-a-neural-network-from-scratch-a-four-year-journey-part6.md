<!-- {"title": "Building A Neural Network From Scratch: A Four Year Journey Part 6", "slug": "building-a-neural-network-from-scratch-a-four-year-journey-6", "date": "2026-06-22"}-->
## Scaling Up with NumPy

Getting a single neuron to learn felt incredible. After four years, I had finally written a neural network that could adjust its own weight and improve its predictions. But it also exposed a new problem. My entire program was built around **one neuron**. Real neural networks don't just have one neuron. They have layers. And each layer contains many neurons, each with its own weights and biases. Those neurons produce outputs that become the inputs for the next layer, and so on until the network finally produces a prediction.

There was no way I was going to write separate variables for every neuron. So I needed a better approach.

### The Limits of Plain Python

Suppose we wanted three inputs instead of one.

Instead of

```
y = wx + b
```

our neuron now becomes

```
y = w₁x₁ + w₂x₂ + w₃x₃ + b
```

You _could_ write that manually.

```
output = (
    w1 * x1 +
    w2 * x2 +
    w3 * x3 +
    bias
)
```

But what if you had ten inputs? Or one hundred? Or seven hundred and eighty-four, like an MNIST image? Manually writing every multiplication becomes ridiculous. There had to be a better way.

That better way was **vectors**.

### Meeting Numpy

Until this point, I had barely used Numpy. I knew it existed. I knew everyone doing machine learning seemed to use it. But I had never really understood why.

Using Numpy, instead of storing inputs like this:

```
x1 = 2
x2 = 5
x3 = 8
```

I could store them together.

```python
import numpy as np

inputs = np.array([2, 5, 8])
```

The weights could be stored the same way.

```python
weights = np.array([3, 1, -2])
```

Instead of multiplying each pair individually, Numpy could do all of them at once.

```python
output = np.dot(inputs, weights) + bias
```

That single line replaced an entire collection of manual multiplications.

### Then Came Matrices...

Unfortunately, vectors were only the beginning. The moment I tried to add multiple neurons to a layer, everything broke. There were matrices, shapes, dimensions, transposes, matrix multiplication, broadcasting. It felt like I had run straight into another brick wall.

I spent hours trying to understand why Numpy kept throwing errors like:

```
ValueError: shapes (1,3) and (4,2) are not aligned
```

At first, those messages felt completely meaningless. How could two arrays full of numbers possibly have the "wrong shape"? But eventually(and after watching a few YouTube videos), I realized something. A matrix is just a table of numbers.

For example,

```
Input
[2 5 8]
```

A layer of neurons is another table.

```
Weights
[1 2 3]
[4 5 6]
[7 8 9]
```

Matrix multiplication simply combines those tables according to a set of rules. And those rules exist for one reason: to make sure every neuron receives every input exactly once.

### Learning to Think in Layers

With matrices working, I could finally build something more interesting than a single neuron. I could write an entire layer.

``` python
class Dense:
    def __init__(self, input_size, output_size):
        self.weights = np.random.randn(input_size, output_size)
        self.biases = np.zeros((1, output_size))

    def forward(self, inputs):
        return np.dot(inputs, self.weights) + self.biases
```

That felt like a huge milestone because every neural network, no matter how large, is ultimately made from layers like this.

### Breaking Everything Apart

As the project grew, another problem appeared: My code had become a mess. The forward propagation, backpropagation, loss calculation, activation functions, and training, all lived in one file. It worked, but every time I wanted to change one part, I risked breaking three others.

So I started refactoring.

The activation functions became their own classes:

```python
relu = ReLU()
```

The loss function became another class:

```python
loss = MSE()
```

Then the layer itself.

```python
layer = Dense(1, 8)
```

Then a trainer responsible for the training loop.

```python
trainer.train(model, x_train, y_train)
```

Eventually, I realized I could separate the architecture of the network from the training process entirely. That's when I built my own `Sequential` class. Instead of manually calling every layer, I could describe the entire model like this:

``` python
model = Sequential([
    Dense(1, 16),
    ReLU(),
    Dense(16, 16),
    ReLU(),
    Dense(16, 1)
])
```

### Making It Feel Like a Real Library

At this point, my program had an actual interface, where I could train a model.

```python
trainer.train(model, x_train, y_train)
```

Save the learned parameters.

```python
model.save("weights.npz")
```

Load them back later.

```python
model.load("weights.npz")
```

And finally, make predictions.

```python
prediction = model.predict([[12]])
```

That last feature felt strangely satisfying. The model no longer needed to relearn everything every time I ran the program. It could remember. Just like any real machine learning framework.

Of course, it was still tiny compared to PyTorch or TensorFlow. But that wasn't the point. The point was that every line of code made sense to me. There were no mysterious functions or black boxes. If something broke, I knew where to look. If I wanted to add a feature, I knew how the pieces fit together.

And with that framework finally working, there was only one thing left to answer. Could it actually learn something meaningful?
