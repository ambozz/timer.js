# timer.js
Simple JavaScript Script for a Timer.

# Usage:
Pattern:
%s = Second
%m = Minute
%h = Hour

How to start the Timer:
```javascript
timer.start("Pattern when running", "Id of HTML element, Text Element", bool if code automatically uses 2 digits, "Text when not running");
timer.start("%h:%m:%s", "id", true, "00:00:00");
```

How to pause the Timer:
```javascript
timer.pause();
```

How to resume the Timer:
```javascript
timer.resume();
```

How to stop & reset the Timer:
```javascript
timer.stop();
```
