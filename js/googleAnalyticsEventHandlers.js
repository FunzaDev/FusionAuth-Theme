function gaEvent(action) {
  gtag("event", action, {
    event_category: "Auth",
  });
}

function onLinkClick(event, eventName, url) {
  event.preventDefault();
  gtag("event", eventName, {
    event_category: "Auth",
    event_label: url,
    transport_type: "beacon",
    event_callback: function () {
      document.location = url;
    },
  });
}
function onButtonClick(actionName) {
  gaEvent(actionName);
  return true;
}
