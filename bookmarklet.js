(function(){
  var d = window.document,
      el= d.createElement('div'),
      getWH = function(){var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight; return [x,y];},
      wh = getWH();
  el.setAttribute('style', 'position:fixed; top:0; left:0; background:#fff; opacity:0.9; font-size:18px; z-index:1000; padding:10px;');
  el.innerHTML = ('width: ' + wh[0] + 'px, height: ' + wh[1] + 'px');
  d.body.appendChild(el);
  window.addEventListener('resize', function(){
    var wh = getWH();
    el.innerHTML = ('width: ' + wh[0] + 'px, height: ' + wh[1] + 'px');
  });
})();
