(function ($) {
	$('#article').find('.content-article').each(function () {
		$(this).find('img').each(function () {
			if($(this).parent().prop('tagName') !== 'A') {
				$(this).wrap(`<a href="${this.src}" class="highslide-image" onclick="return hs.expand(this);"></a>`)
				$(this).parent().wrap(`<p class="gal-image"></p>`)
				$(this).parent().parent('.gal-image').wrap(`<div class="gal-image-container"></div>`)
				$(this).attr('width', 650);
				$(this).attr('title', '点击放大');
				$(this).attr('alt', '');
			}
		})
	})
})($)

<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn/?c=b');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitokoto = document.getElementById('hitokoto');
	  var hitokotofrom = document.getElementById('hitokotofrom');
      hitokoto.innerText = data.hitokoto;
	  hitokotofrom.innerText = "                     -"data.from;
    }
  }
  xhr.send();
</script>