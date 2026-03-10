"""
Raspberry Pi Stoplight (3 LEDs)

Wiring:
- RED    LED: GPIO17 -> resistor -> LED -> GND
- YELLOW LED: GPIO27 -> resistor -> LED -> GND
- GREEN  LED: GPIO22 -> resistor -> LED -> GND
"""

from gpiozero import LED
from time import sleep

DO_DEBUG = True

red = LED(17)
yellow = LED(27)
green = LED(22)


def debug(*args) -> None:
    if DO_DEBUG:
        print("[debug]", *args)


def all_off() -> None:
    red.off()
    yellow.off()
    green.off()


def show(color: str) -> None:
    """
    Turn on exactly one light based on a string name.
    This is a great “why functions help” moment:
    you can change the inside later without changing the rest of the program.
    """
    all_off()

    if color == "red":
        red.on()
    elif color == "yellow":
        yellow.on()
    elif color == "green":
        green.on()
    else:
        debug("Unknown color:", color)


def wait(seconds: float) -> None:
    sleep(seconds)


def do_red() -> None:
    print("RED")
    show("red")
    wait(2.0)


def do_green() -> None:
    print("GREEN")
    show("green")
    wait(2.0)


def do_yellow() -> None:
    print("YELLOW")
    show("yellow")
    wait(0.8)


def run_cycle() -> None:
    do_red()
    do_green()
    do_yellow()


# Main
for _ in range(10):
    run_cycle()

all_off()
print("Done!")