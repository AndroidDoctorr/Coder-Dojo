<h1 style="color: #16a34a;">Robot Track</h1>

<div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 1em 1.25em; border-radius: 0 6px 6px 0; margin-bottom: 1.5em;">

Welcome to the **Robot Track**.

This track is about using **Python** to make real hardware do things.

Instead of only making things happen on a screen, you will make code control **LEDs, buttons, buzzers, and other simple circuits** using a Raspberry Pi and a breadboard.

If you like building, testing, wiring, or making physical things react, this track is probably for you.

</div>

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">What you will do in this track</h2>

In this track, you will:
- learn basic physical computing ideas
- use Python to control outputs like LEDs or buzzers
- use inputs like buttons or switches
- build small breadboard circuits
- combine code and hardware into working mini-projects
- show your work to a teacher or mentor

You do **not** need to build a giant robot.
You do need to show that your code can make a real circuit do something useful.

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">What counts as progress?</h2>

Progress in this track should happen in **small steps**.

You should not wait until the end to prove you learned something. Each level should give you a working result.

There are three levels:
- **Bronze** - Make a simple circuit work with Python.
- **Silver** - Add interaction with buttons or more than one output.
- **Gold** - Build a more complete project that reacts to input and does something clear and useful.

Each level has:
- ideas to learn
- things to practice
- things to build
- a place for sign-off

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">What is physical computing?</h2>

**Physical computing** means writing code that affects things in the real world.

That could mean:
- turning a light on
- blinking an LED
- playing a sound
- checking if a button is pressed
- reacting to a sensor
- making a sequence happen automatically

The Raspberry Pi can run Python code, and that code can control simple electronics through its pins.

That may sound complicated, but the version you will do here starts small and stays practical.

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Safety and setup</h2>

Before you start, remember these rules:
- turn things off before changing wires if you are not sure what you are doing
- check your wiring carefully
- do not force parts into the breadboard
- ask for help if you are confused about where a wire goes
- keep your project neat enough that you can still understand it later

Some parts of this track may need help from a parent, teacher, or mentor, especially:
- finding the right GPIO pins
- setting up Python libraries
- checking wiring
- troubleshooting why a circuit is not responding

That is normal.

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Bronze Level</h2>

### Goal
Build a simple circuit and make Python control it.

### Learn
At Bronze level, you should understand these ideas:
- what a breadboard is
- what an input is
- what an output is
- what an LED does
- why resistors matter
- how Python can turn a pin on and off

### Practice
Try to do these things:
- connect an LED to the breadboard
- run a Python program that turns it on
- blink the LED on and off
- change the timing so it blinks faster or slower

### Example Python idea

```python
from gpiozero import LED
from time import sleep

red = LED(17)

while True:
    red.on()
    sleep(1)
    red.off()
    sleep(1)
```

### Bronze checkpoints
Complete these before asking for Bronze sign-off:
- [ ] I can explain what an output is.
- [ ] I can wire at least one LED correctly.
- [ ] I can run Python code that turns an LED on.
- [ ] I can make an LED blink.
- [ ] I changed the timing or behavior myself.
- [ ] I saved my code.
- [ ] I can point to the part of the code that controls the LED.

### Bronze mini-project ideas
Pick at least **one**:
- a blinking light
- a stoplight that cycles through colors
- a night light that stays on for a set amount of time
- a simple pattern using two LEDs

<div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Bronze sign-off
- Student name: __________________________
- Milestone: Bronze Robot Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Silver Level</h2>

### Goal
Make your project react to input or control more than one output.

### Learn
At Silver level, you should practice these ideas:
- what an input is
- how a button works
- how to use `if` statements
- how to use loops
- how to organize code with functions

### Practice
Try to do these things:
- wire a button
- make the program react when the button is pressed
- control two or more LEDs
- create a sequence or rule that depends on input

### Example Python idea

```python
from gpiozero import LED, Button
from time import sleep

light = LED(17)
button = Button(2)

while True:
    if button.is_pressed:
        light.on()
    else:
        light.off()
    sleep(0.1)
```

### Silver checkpoints
- [ ] I can explain what an input is.
- [ ] I wired a button or other simple input.
- [ ] My code reacts to input.
- [ ] I used an `if` statement.
- [ ] I used a loop.
- [ ] I used at least one function or clearly separated part of my code.
- [ ] I saved my code and tested it.

### Silver mini-project ideas
Pick at least **one**:
- button-controlled light
- reaction timer
- mini alarm with buzzer and button
- stoplight with a pedestrian button
- guessing game with LEDs and input

<div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Silver sign-off
- Student name: __________________________
- Milestone: Silver Robot Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Gold Level</h2>

### Goal
Build a stronger physical project that combines code, input, and output in a clear way.

### Learn
At Gold level, the big idea is this:

> Good hardware projects do not just work once. They work clearly, repeatably, and for a reason.

Your project should feel like a complete build, not just a quick test.

### Build
Create your own project using one of these ideas:
- a working stoplight with button control
- a reaction game
- a simple alarm system
- a lock or access system with buttons and lights
- a timer with visual signals
- your own project idea

Your Gold project should include:
- at least **one input**
- at least **two outputs** or a more complex output pattern
- Python code with loops and conditionals
- clear wiring on a breadboard
- code you can explain

Better version:
- use functions well
- organize the code clearly
- make the behavior easy for another person to test

### Gold checkpoints
- [ ] I built a project with at least one input.
- [ ] I built a project with at least two outputs or one clearly complex output.
- [ ] My code uses loops.
- [ ] My code uses conditionals.
- [ ] My code is organized well enough that I can explain it.
- [ ] My wiring is neat enough to follow.
- [ ] I saved my code and showed the project working.

### Gold project examples
- Press a button to start a timed light sequence.
- Use a button to arm or disarm an alarm.
- Build a reaction game that measures how fast someone responds.
- Build a traffic light that changes based on input.
- Build your own small breadboard gadget with a clear purpose.

<div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Gold sign-off
- Student name: __________________________
- Milestone: Gold Robot Track
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Final Robot Track approval</h2>

To complete the full **Robot Track**, you should be able to show all of these:

- [ ] I built at least one working Bronze project.
- [ ] I built at least one working Silver project.
- [ ] I completed a Gold project.
- [ ] My final project uses real hardware.
- [ ] My final project uses Python code I can explain.
- [ ] I showed my work to a teacher or mentor.
- [ ] I answered simple questions about how it works.

A teacher or mentor may ask questions like:
- What part is the input?
- What part is the output?
- What does this function do?
- What happens when you press the button?
- What problem did you have to fix?

You do **not** need to explain everything perfectly.
You do need to show that the project is really yours and that you understand the main parts.

<div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 1em 1.25em; margin-top: 0.5em;">

### Final approval sign-off
- Student name: __________________________
- Track: Robot
- Teacher / Mentor: ______________________
- Date: __________________________________
- Approved for completion: Yes / No
- Notes: _________________________________

</div>

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">Helpful resources</h2>

### Beginner Raspberry Pi and physical computing
- [Raspberry Pi Projects](https://projects.raspberrypi.org/en/pathways/physical-computing)
- [Raspberry Pi GPIO Zero Docs](https://gpiozero.readthedocs.io/en/stable/)
- [Python Official Tutorial](https://docs.python.org/3/tutorial/)
- [W3Schools Python Tutorial](https://www.w3schools.com/python/)

### Good things to practice
- turning LEDs on and off
- blinking with timing
- using buttons
- writing `if` statements
- making functions
- combining multiple parts into one project

### Repo note
The repo may include starter files for this track, such as:
- simple LED example code
- stoplight code
- button input example code
- reaction timer starter code

If those files exist, use them to help you get started, then change them and make them your own.

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">If you get stuck</h2>

That will happen. Hardware does that because it enjoys causing drama.

When something does not work, check these things:
- Is the wiring correct?
- Is the LED facing the right direction?
- Is the button wired correctly?
- Did you use the right pin number?
- Did you save the file before running it?
- Is the code actually reaching the line you think it is?

Change **one thing at a time**.
That makes bugs much easier to find.

---

<h2 style="color: #16a34a; border-bottom: 2px solid #86efac; padding-bottom: 0.25em;">What next?</h2>

If you finish this track and want more, you could try:
- adding buzzers or sensors
- making cleaner reusable Python functions
- combining several circuits into one project
- making a game controller or interactive device
- connecting your hardware project to a web page later

For now, the goal is simple:

**Write code. Build circuits. Make something real happen.**
