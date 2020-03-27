const styles = document.querySelectorAll("style");
let isUsed = false;

[...styles].forEach(({ dataset }) => {
  if (isUsed) return;

  const { styled, styledComponents } = dataset;
  const [keys] = Object.keys(dataset);
  if (
    typeof styled === "string" ||
    typeof styledComponents === "string" ||
    keys?.match("styled")
  ) {
    isUsed = true;
  }
});

chrome.runtime.sendMessage({ isUsed: isUsed });
