var loadResource = function(resource, onload) {
        debugger;
        var x = new XMLHttpRequest();
        x.open('GET', resource);
        x.onload = onload;
        x.send();
    },
    evalScript = function(){ 
        eval(this.responseText);
    },
    applyStyleSheet = function() {
        chrome.devtools.panels.applyStyleSheet(this.responseText);
    };

loadResource('predawn.css', applyStyleSheet);