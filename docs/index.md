<div style="text-align: center; margin-bottom: 1em;">
<img src="assets/qr.png" alt="QR Code" />
</div>

<h1 style="color: #4338ca; text-align: center;">Coder Dojo</h1>

<p style="text-align: center; color: #6b7280; font-style: italic;">Coding Resources — This is a living document, updated periodically with new links and whatnot.</p>

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Instructor</h2>

Andrew Torr, Software Developer - NineStar Connect

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Meeting Info</h2>

Wednesdays 2:15–4:15

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Bonus Tracks</h2>

If you want to continue learning to code on your own (or with your parents' help, or a mentor, or your favorite LLM), you can pick one of these "bonus tracks" to follow:

<div style="background: #dc2626; color: white; border-radius: 8px; padding: 0.75em 1em; margin: 0.5em 0;">
<strong><a href="./gaming-track.html" style="color: white;">🎮 Gaming Track</a></strong> — Learn how to make and publish games using Godot
</div>

<div style="background: #7c3aed; color: white; border-radius: 8px; padding: 0.75em 1em; margin: 0.5em 0;">
<strong><a href="./data-track.html" style="color: white;">📊 Data Track</a></strong> — Learn how to manage databases using SQL
</div>

<div style="background: #16a34a; color: white; border-radius: 8px; padding: 0.75em 1em; margin: 0.5em 0;">
<strong><a href="./robot-track.html" style="color: white;">🤖 Robot Track</a></strong> — Learn how to control machines with code
</div>

<div style="background: #2563eb; color: white; border-radius: 8px; padding: 0.75em 1em; margin: 0.5em 0;">
<strong><a href="./web-track.html" style="color: white;">🌐 Web Track</a></strong> — Learn how to publish websites to the Web
</div>

Not sure where to start? Read the **[Bonus Track Guide](./bonus-tracks.md)** first.

<div style="background: #fffbeb; border: 1px solid #fcd34d; border-radius: 6px; padding: 0.75em 1em; margin-top: 1em;">
🪙 Complete any track to earn a <strong>Challenge Coin</strong>. Collect all four and you'll earn an extra <strong>Gold Challenge Coin</strong>!
</div>

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Rough Schedule</h2>

| Week | Topic |
|------|-------|
| Week 1 | Introduction, coding fundamentals, set up computers, HTML? |
| Week 2 | HTML and JS |
| Week 3 | Python |
| Week 4 | Raspberry Pi + breadboards |
| Week 5 | Start project |
| Week 6 | Finish & demo projects |

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Terminal Commands</h2>

These commands work in the terminal on Mac, Linux, and Raspberry Pi. On Windows, use **PowerShell** or **Git Bash** — most of these work the same way.

| Command | What it does | Example |
|---------|-------------|---------|
| `pwd` | Print working directory — shows where you are | `pwd` |
| `ls` | List files and folders in the current directory | `ls` |
| `ls -la` | List everything, including hidden files, with details | `ls -la` |
| `cd` | Change directory — move into a folder | `cd Documents` |
| `cd ..` | Go up one folder | `cd ..` |
| `cd ~` | Go to your home directory | `cd ~` |
| `mkdir` | Make a new folder | `mkdir my-project` |
| `touch` | Create a new empty file | `touch index.html` |
| `rm` | Remove a file (careful — no undo!) | `rm old-file.txt` |
| `clear` | Clear the terminal screen | `clear` |
| `code .` | Open the current folder in VS Code | `code .` |
| `code` | Open a file or folder in VS Code | `code index.html` |
| `python` | Run a Python file | `python script.py` |
| `python3` | Same as above on some systems | `python3 script.py` |

> **Tip:** Press the **up arrow** to re-run your last command. Press **Tab** to autocomplete a file or folder name.

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Coding Vocabulary</h2>

### Core concepts

**Variable**
A named container that stores a value. The value can change.
```python
score = 0
name = "Alex"
```

**Expression**
Any piece of code that produces a value.
```python
2 + 2          # produces 4
score * 10     # produces some number
```

**Statement**
A complete instruction that does something — like assigning a variable, calling a function, or running a loop.

**Conditional**
Code that only runs if a condition is true. Uses `if`, `else`, and `elif` (or `else if` in some languages).
```python
if score > 10:
    print("You win!")
else:
    print("Keep trying.")
```

**For loop**
Repeats a block of code a set number of times, or once for each item in a list.
```python
for i in range(5):
    print(i)
```

**While loop**
Repeats a block of code as long as a condition stays true.
```python
while lives > 0:
    play_game()
```

**Function**
A named, reusable block of code. You define it once and call it whenever you need it.
```python
def greet(name):
    print("Hello, " + name)

greet("Alex")
```

**Argument / Parameter**
The values you pass into a function. The parameter is the name inside the function definition; the argument is the actual value you pass in when calling it.

**Return value**
What a function gives back after it runs.
```python
def add(a, b):
    return a + b

result = add(3, 4)  # result is 7
```

**Boolean**
A value that is either `True` or `False`. Used in conditions.
```python
is_running = True
game_over = False
```

**String**
A piece of text. Written inside quotes.
```python
message = "Hello, world!"
```

**Integer / Float**
`int` is a whole number. `float` is a number with a decimal.
```python
lives = 3        # int
speed = 1.5      # float
```

**List / Array**
A collection of values stored in order.
```python
colors = ["red", "green", "blue"]
```

**Index**
The position of an item in a list. Starts at **0**, not 1.
```python
colors[0]   # "red"
colors[2]   # "blue"
```

**Loop / Iteration**
Going through a list or repeating a block of code. Each pass through is one *iteration*.

**Bug**
An error or mistake in code that causes it to behave incorrectly.

**Debug**
The process of finding and fixing bugs.

**Comment**
A note in the code that the computer ignores. Used to explain what the code does.
```python
# This is a comment
score = score + 1  # Add 1 to the score
```

**Syntax**
The rules for how code must be written. A syntax error means something was typed incorrectly.

**Library / Module**
A collection of pre-written code you can import and use in your own programs.
```python
from gpiozero import LED
```

---

<h2 style="color: #4338ca; border-bottom: 2px solid #a5b4fc; padding-bottom: 0.25em;">Links to Stuff</h2>

### Best Beginner Coding Websites

- **[W3Schools: HTML Tutorial](https://www.w3schools.com/html/)** — Very simple, step-by-step HTML lessons with live examples you can edit.
- **[W3Schools: CSS Tutorial](https://www.w3schools.com/css/)** — Good for colors, fonts, borders, spacing, and layout basics.
- **[W3Schools: JavaScript Tutorial](https://www.w3schools.com/js/)** — A simple place to practice variables, functions, buttons, and events.
- **[W3Schools: Python Tutorial](https://www.w3schools.com/python/)** — A beginner-friendly way to review Python syntax and examples.
- **[Raspberry Pi Projects](https://projects.raspberrypi.org/)** — Free step-by-step coding projects for kids, including web projects and Python.
- **[Code Club Projects](https://projects.raspberrypi.org/en/codeclub)** — Beginner projects from the Raspberry Pi Foundation for websites, games, and Python.
- **[Code.org App Lab](https://code.org/en-US/tools/app-lab)** — A friendly way to build simple apps and practice JavaScript ideas.
- **[Python.org: Python for Beginners](https://www.python.org/about/gettingstarted/)** — Official Python beginner page with tutorials and getting-started help.

### Helpful Sites for Raspberry Pi and Breadboard Projects

- **[Raspberry Pi Python Projects](https://projects.raspberrypi.org/en/collections/python)** — Good beginner Python projects from the Raspberry Pi Foundation.
- **[Intro to Python Path](https://projects.raspberrypi.org/en/pathways/python-intro)** — A structured beginner path for learning Python step by step.
- **[GPIO Zero Basic Recipes](https://gpiozero.readthedocs.io/en/stable/recipes.html)** — Simple examples for LEDs, buttons, buzzers, and other Raspberry Pi hardware.
