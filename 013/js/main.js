document.addEventListener('mousemove', function(ev) {
  document.getElementById('cursor').style.transform = 'translate('+(ev.clientX-50)+'px, '+(ev.clientY-50)+'px)';
},false);