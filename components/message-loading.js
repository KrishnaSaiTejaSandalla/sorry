function createMessageLoading() {
    const container = document.createElement("div");

    container.className = "message-loading";

    container.innerHTML = `
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="message-loader"
        >
            <circle cx="4" cy="12" r="2" fill="currentColor">
                <animate
                    begin="0"
                    attributeName="cy"
                    dur="0.6s"
                    values="12;6;12"
                    repeatCount="indefinite"
                />
            </circle>

            <circle cx="12" cy="12" r="2" fill="currentColor">
                <animate
                    begin="0.1s"
                    attributeName="cy"
                    dur="0.6s"
                    values="12;6;12"
                    repeatCount="indefinite"
                />
            </circle>

            <circle cx="20" cy="12" r="2" fill="currentColor">
                <animate
                    begin="0.2s"
                    attributeName="cy"
                    dur="0.6s"
                    values="12;6;12"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    `;

    return container;
}

export { createMessageLoading };
