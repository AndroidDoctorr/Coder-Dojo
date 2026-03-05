# Import statements (or using statements)
import time
import random

doDebug = True

print("Hello World!")

print(random.random()*4 + 1)
print(random.randint(1, 10))

message = "Hello NPI!"
print(message)

print("What is your name?")
name = input()
print("Hello,", name)

for i in range(5):
    print("Count: ", i)

def wait(seconds):
    randomTime = random.randint(0, seconds)
    if (doDebug): print("wait", randomTime, "seconds")
    time.sleep(randomTime)

# camelCase
# PascalCase
# kebab-case
# snake_case
def runStoplight():
    showRed()
    wait(5)
    showGreen()
    wait(5)
    showYellow()
    wait(1)

def showRed():
    print("RED")

def showYellow():
    print("YELLOW")

def showGreen():
    print("GREEN")


while True:
    runStoplight()