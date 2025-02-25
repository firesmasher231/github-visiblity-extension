// Function to highlight repository visibility
function highlightParentSpanBorder() {
	document.querySelectorAll("body *").forEach((el) => {
		const text = el.textContent.trim().toLowerCase();
		if (text === "public" || text === "private") {
			const parentSpan = el.closest("span");
			if (parentSpan) {
				if (text === "public") {
					parentSpan.style.border = "1px solid #97fd30"; // vivid green border
				} else if (text === "private") {
					parentSpan.style.border = "1px solid #fd532f"; // vivid red border
				}
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
