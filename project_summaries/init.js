// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});
Reveal.addEventListener( 'ready', function( event ) {
  var note_logger = null;
  note_logger = function() {
    var current_slide = Reveal.getCurrentSlide();
    var aside_nodes = current_slide.getElementsByClassName('notes');
    var note_index = 0;
    var note_count = 0;
    for (note_index = 0, note_count = aside_nodes.length; note_index < note_count; ++note_index) {
      console.log(aside_nodes[note_index].innerHTML);
    }
  };
  note_logger();
  Reveal.addEventListener( 'slidechanged', note_logger);
} );

