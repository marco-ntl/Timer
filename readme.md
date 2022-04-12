# Simple Timer

A simple node.js timer.

## Usage
Index.js starts a web server on port 3456, which only serves two files (index.html & beep.mp3)

```bash
node index.js
```

The actual timer logic is contained in index.html, and the alarm sound is in beep.mp3

## UX
Simply write the time in the format mmss (Eg. 5m30s -> 530).

The timer starts by itself after a second of inactivity or if the time is set through URL arguments

If the first input is bigger than 6, the timer assumes it's supposed to be a number of minutes (Eg. if you type "8", the timer will automatically be at 8m00s)
## Premade timers with url arguments

There's *two* arguments you can specify through the url :

1. The *name* argument controls the text that shows up on the website header (default "Timer")

2. The *time* (or *t*) argument lets you set the time in seconds (eg. 600 -> 10m0s) 

Example custom url : index.html?*name=Pizza*&*time=442*

## Screenshot
![Screenshot](https://i.imgur.com/dGSxkwt.png?raw=true "Timer")