'use strict';


// Reassign tooltip handler
// after every significant page render
//
N.wire.on('navigate.done', function () {
  $('._tip').tooltip();
});


// Social buttons defered load - after all
//
N.wire.once('navigate.done', function () {
  setTimeout(function () {
    function injectScript(src, async, id) {
      var el, script;

      if (id && document.getElementById(id)) {
        return;
      }

      el = document.createElement('script');

      el.id    = id;
      el.type  = 'text/javascript';
      el.async = async;
      el.src   = src;

      script = document.getElementsByTagName('script')[0];
      script.parentNode.insertBefore(el, script);
    }

    // Twitter buttons
    injectScript('//platform.twitter.com/widgets.js', false, 'twitter-wjs');

    // Google +1
    injectScript('https://apis.google.com/js/plusone.js', true);
  }, 2000);
});
