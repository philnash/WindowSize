# WindowSize v0.1

A bookmarklet to get the current height and width of the viewport.

Copy the following to a bookmark in order to use it.

    javascript:(function(){var d=window.document,el=d.createElement('div'),getWH=function(){var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;return[x,y];},wh=getWH();el.setAttribute('style','position:fixed; top:0; left:0; background:#fff; opacity:0.9; font-size:18px; z-index:1000; padding:10px;');el.innerHTML=('width: '+wh[0]+'px, height: '+wh[1]+'px');d.body.appendChild(el);window.addEventListener('resize',function(){var wh=getWH();el.innerHTML=('width: '+wh[0]+'px, height: '+wh[1]+'px');});})();

## Why?

I was creating a responsive layout and needed to keep a track of the page width so that I could create a media query breakpoint. Seeing the current width and height of the page seemed like it would be of use.

## Support

This is quite new, so I haven't really tested it around a bunch of browsers. It works fine on my development browsers, currently Firefox 13 and Chrome 21. It might work for you!

## Thanks

Thank you to Andy Langton and [this blog post](http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/) with some good cross browser methods of finding the viewport size.

## Changelog

0.1 - Initial release
