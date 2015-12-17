videojs-utils
=============
Helper functions for Video.JS
## Local Storage
Persistent local storage support (with fallback to cookies) surviving page reloads.
```
var volume = videojs.utils.localStorage.getItem('volume');
if (volume!=null)
    player.volume(volume);
...
player.on('volumechange', function(){
    videojs.utils.localStorage.setItem('volume', player.volume());
});
```
