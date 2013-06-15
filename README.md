jquery.scrollDirection
======================

Custom jQuery event that detects upward and downward scrolling

####Version 0.1

* Detects scroll event and direction of scroll,
* Triggers a custom event called "scrollDirection" with "string": (up | down), "integer": (-1 | 1), "delta": (a float between -1 and 1 according to the speed of the scroll movement)