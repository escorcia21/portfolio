document.addEventListener("DOMContentLoaded", () => {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(btn => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();

            const block = btn.parentElement.parentElement.querySelector("pre code");
            if (!block) return;

            const codeText = block.innerText;

            try {
                await navigator.clipboard.writeText(codeText);
                const iconClipboard = btn.querySelector(".icon-clipboard");
                const iconSuccess = btn.querySelector(".icon-clipboard-success");
                iconClipboard.classList.remove("opacity-100");
                iconClipboard.classList.add("opacity-0");
                iconSuccess.classList.remove("opacity-0");
                iconSuccess.classList.add("opacity-100");

                setTimeout(() => {
                    iconClipboard.classList.remove("opacity-0");
                    iconClipboard.classList.add("opacity-100");
                    iconSuccess.classList.remove("opacity-100");
                    iconSuccess.classList.add("opacity-0");
                }, 2000);
            } catch (err) {
                console.error("Failed to copy text: ", err);
            }
        });
    });
});
