setTimeout(function () {
  var contentDoc = document.querySelector('frame[name="contentFrame"]').contentWindow.document;
  var headerDoc = document.querySelector('frame[name="headerFrame"]').contentWindow.document;

  var overlayConntent = contentDoc.getElementById('message_modal');
  overlayConntent.style.display = 'none';
  contentDoc.documentElement.style.overflow = '';

  var content = contentDoc.querySelector('.paywall-content');
  var contentParent = content.parentElement;
  content.style.height = null;
  contentParent.removeChild(content.nextSibling);

  var container = contentDoc.getElementById('paywall-container');
  var containerParent = container.parentElement;
  containerParent.removeChild(container);

  // remove modal
  headerDoc.getElementById('close-popup').click();

}, 10000);
