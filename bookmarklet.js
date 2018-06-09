var redirect = "https://youtubemp3api.com/@api/button/mp3/"+window.location.href;
$(location).attr('href',redirect);

function downloadmp3(url) {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
  window.location.href = ("https://youtubemp3api.com/@api/button/mp3/"+(match[2]))
  }
}
