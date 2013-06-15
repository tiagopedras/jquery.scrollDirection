/*
    jquery Scroll Direction event

    Copyright (C) 2013 TPWD, Web Design Studio, Portugal

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to 
    deal in the Software without restriction, including without limitation the 
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
    sell copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
*/
function handle(delta) {
    if (typeof window.pageXOffset != undefined && typeof window.pageXOffset != "undefined") {
        var offsetX = window.pageXOffset;
    } else {
        var offsetX = document.documentElement.scrollLeft;
    }
    
    //console.log(delta);
    
	if (delta < 0) {
        $.event.trigger({
        	type: "scrollDirection",
        	string: "down",
        	integer: -1,
        	delta: delta
        });
	} else {
        $.event.trigger({
        	type: "scrollDirection",
        	string: "up",
        	integer: 1,
        	delta: delta
        });
    }
}

function wheel(event) {
	var delta = 0;
	if (!event) event = window.event;

	if (event.axis == 2 || event.wheelDeltaY || event.y) {
	    
    	if (event.wheelDeltaY) {
    		delta = event.wheelDeltaY/120; 
    	} else if (event.wheelDelta) {
    		delta = event.wheelDelta/120; 
    	} else if (event.detail) {
    		delta = -event.detail/3;
    	}
    	
    	//DO THE ANIMATION
    	if (delta != 0) handle(delta);
    
    	//PREVENT DEFAULT
        if (event.preventDefault) event.preventDefault();
    	event.returnValue = false;
    }
}

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
