const { runtime, pageAction } = chrome;
runtime.onMessage.addListener(function(req, sender) {
  const { id } = sender.tab;
  if (req.isUsed) {
    pageAction.show(id);
    pageAction.setIcon({ tabId: id, path: "icons/icon128.png" });
    pageAction.setPopup({ tabId: id, popup: "popups/active.html" });
  } else {
    pageAction.show(id);
    pageAction.setIcon({ tabId: id, path: "icons/icon128-inactive.png" });
    pageAction.setPopup({ tabId: id, popup: "popups/inactive.html" });
  }
});
