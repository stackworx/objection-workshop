// https://github.com/facebook/docusaurus/issues/2394#issuecomment-630638096
if (
  window &&
  window.location &&
  window.location.pathname.endsWith("/") &&
  window.location.pathname !== "/"
) {
  window.history.replaceState(
    "",
    "",
    window.location.pathname.substr(0, window.location.pathname.length - 1)
  );
}
