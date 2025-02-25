// Function to highlight repository visibility
function highlightParentSpanBorder() {
	document.querySelectorAll("body *").forEach((el) => {
		// Check if the element has exactly the text "public" or "private" with no other content
		const hasOnlyDirectText =
			el.childNodes.length === 1 &&
			el.childNodes[0].nodeType === Node.TEXT_NODE;
		const text = el.textContent.trim().toLowerCase();

		if (hasOnlyDirectText && (text === "public" || text === "private")) {
			if (text === "public") {
				el.style.border = "1px solid #97fd30"; // vivid green border
			} else if (text === "private") {
				el.style.border = "1px solid #fd532f"; // vivid red border
			}
		}
	});
}

// Initial execution
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", highlightParentSpanBorder);
} else {
	highlightParentSpanBorder();
}

// Add MutationObserver to handle dynamic content loading
const observer = new MutationObserver((mutations) => {
	highlightParentSpanBorder();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
	childList: true,
	subtree: true,
});
