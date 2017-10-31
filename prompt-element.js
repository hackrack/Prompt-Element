function newEle() {
  var openTag = window.prompt("Please type your Opening tag");
  var text = window.prompt("Please type your text");
  var closeTag = window.prompt("Please type your Closing tag");
  document.getElementById("user").innerHTML = openTag + text + closeTag;
}
newEle();
