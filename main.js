setTimeout(function () {
  var frameDoc = document.querySelector('frame[name="contentFrame"]').contentWindow.document;

  var content = frameDoc.querySelector('.paywall-content');
  var contentParent = content.parentElement;
  content.style.height = null;
  contentParent.removeChild(content.nextSibling);

  var container = frameDoc.getElementById('paywall-container');
  var containerParent = container.parentElement;
  containerParent.removeChild(container);

}, 8000);
