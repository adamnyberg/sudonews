removeTrash = function () {

  var header = document.querySelector('.di_header');
  if(header) {
    header.parentElement.removeChild(header);
  }

  var content = document.querySelector('.paywall-content');
  if (content) {
    content.style.height = null;
  }

  var paywallMask = document.querySelector('.paywall-mask');
  if (paywallMask) {
    paywallMask.parentElement.removeChild(paywallMask);
  }

  var paywall = document.getElementById('serviceplusPaywallpaywall-container');
  if (paywall) {
    paywall.parentElement.removeChild(paywall);
  }

}

for (time of [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 10000]) {
  setTimeout(removeTrash, time);
}
