export default {
  intro:
    'This track is about using Python to make real hardware do things. Instead of only making things happen on a screen, you will make code control LEDs, buttons, buzzers, and other simple circuits using a Raspberry Pi and a breadboard.',
  goodFor:
    'If you like building, testing, wiring, or making physical things react, this track is for you.',
  whatYouWillDo: [
    'Learn basic physical computing concepts',
    'Use Python to control outputs like LEDs or buzzers',
    'Use inputs like buttons or switches',
    'Build small breadboard circuits',
    'Combine code and hardware into working mini-projects',
    'Show your work to a teacher or mentor',
  ],
  context: {
    title: 'What is physical computing?',
    body: 'Physical computing means writing code that affects things in the real world. The Raspberry Pi runs Python code that controls simple electronics through its GPIO pins.',
    points: [
      'Turn a light on or off',
      'Blink an LED in a pattern',
      'Play a sound with a buzzer',
      'Check if a button is pressed',
      'React to a sensor reading',
      'Make a sequence happen automatically',
    ],
  },
  levels: {
    bronze: {
      goal: 'Build a simple circuit and make Python control it.',
      learn: [
        'What a breadboard is',
        'What inputs and outputs are',
        'What an LED does',
        'Why resistors matter',
        'How Python can turn a GPIO pin on and off',
      ],
      practice: [
        'Connect an LED to the breadboard',
        'Run a Python program that turns the LED on',
        'Make the LED blink on and off',
        'Change the timing so it blinks faster or slower',
      ],
      checkpoints: [
        'I can explain what an output is.',
        'I can wire at least one LED correctly.',
        'I can run Python code that turns an LED on.',
        'I can make an LED blink.',
        'I changed the timing or behavior myself.',
        'I saved my code.',
        'I can point to the part of the code that controls the LED.',
      ],
      miniProjects: [
        'A blinking light',
        'A stoplight that cycles through colors',
        'A night light that stays on for a set time',
        'A simple pattern using two LEDs',
      ],
      codeExamples: [
        {
          label: 'Blinking LED',
          language: 'python',
          code: `from gpiozero import LED
from time import sleep

red = LED(17)

while True:
    red.on()
    sleep(1)
    red.off()
    sleep(1)`,
        },
      ],
    },
    silver: {
      goal: 'Make your project react to input or control more than one output.',
      learn: [
        'What an input is and how a button works',
        'How to use if statements with hardware',
        'How to use loops to keep checking for input',
        'How to organize code with functions',
      ],
      practice: [
        'Wire a button to the breadboard',
        'Make the program react when the button is pressed',
        'Control two or more LEDs',
        'Create a sequence or rule that depends on input',
      ],
      checkpoints: [
        'I can explain what an input is.',
        'I wired a button or other simple input.',
        'My code reacts to input.',
        'I used an if statement.',
        'I used a loop.',
        'I used at least one function.',
        'I saved my code and tested it.',
      ],
      miniProjects: [
        'Button-controlled light',
        'Reaction timer',
        'Mini alarm with buzzer and button',
        'Stoplight with a pedestrian button',
        'Guessing game with LEDs and input',
      ],
      codeExamples: [
        {
          label: 'Button-controlled LED',
          language: 'python',
          code: `from gpiozero import LED, Button
from time import sleep

light = LED(17)
button = Button(2)

while True:
    if button.is_pressed:
        light.on()
    else:
        light.off()
    sleep(0.1)`,
        },
      ],
    },
    gold: {
      goal: 'Build a stronger physical project that combines code, input, and output in a clear and repeatable way.',
      learn: [
        'How to use functions to organize your code well',
        'How to make behavior that is easy for another person to test',
        'How to make a project that works clearly and repeatably',
      ],
      practice: [
        'Combine multiple inputs and outputs in one project',
        'Use functions to keep the code organized',
        'Test the project and make sure someone else can use it',
        'Document what each part does',
      ],
      checkpoints: [
        'I built a project with at least one input.',
        'I built a project with at least two outputs or one complex output pattern.',
        'My code uses loops.',
        'My code uses conditionals.',
        'My code is organized well enough that I can explain it.',
        'My wiring is neat enough to follow.',
        'I saved my code and showed the project working.',
      ],
      miniProjects: [
        'A working stoplight with button control',
        'A reaction game',
        'A simple alarm system',
        'A lock or access system with buttons and lights',
        'A timer with visual signals',
        'Your own original project idea',
      ],
    },
  },
  resources: [
    {
      label: 'Raspberry Pi Physical Computing Projects',
      url: 'https://projects.raspberrypi.org/en/pathways/physical-computing',
    },
    {
      label: 'GPIO Zero Documentation',
      url: 'https://gpiozero.readthedocs.io/en/stable/',
    },
    {
      label: 'GPIO Zero — Basic Recipes',
      url: 'https://gpiozero.readthedocs.io/en/stable/recipes.html',
    },
    {
      label: 'Python Official Tutorial',
      url: 'https://docs.python.org/3/tutorial/',
    },
    {
      label: 'W3Schools Python Tutorial',
      url: 'https://www.w3schools.com/python/',
    },
  ],
}
