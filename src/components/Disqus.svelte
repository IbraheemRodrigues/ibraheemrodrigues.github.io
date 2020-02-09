<script>
  export let identifier;

  var disqus_config = function() {
    // TODO: fix this, will not work if a post has more than 1 url

    this.page.url = window.location.toString();
    this.page.identifier = identifier;
  };

  (function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    s.src = "https://ibraheemrodrigues-com.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>

<div id="disqus_thread" />
<noscript>
  Please enable JavaScript to view the
  <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
</noscript>
