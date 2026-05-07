document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const digits = document.querySelectorAll('.digit');
    const backspaceBtn = document.getElementById('backspaceBtn');

    // Helper function to toggle backspace visibility
    const updateUI = () => {
        if (display.textContent.length > 0) {
            backspaceBtn.classList.add('visible');
        } else {
            backspaceBtn.classList.remove('visible');
        }

        // Adjust font size for long numbers
        display.style.fontSize = display.textContent.length > 10 ? "1.8rem" : "2.5rem";
    };

    // Number button clicks
    digits.forEach(button => {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            updateUI();
        });
    });

    // Backspace button click
    backspaceBtn.addEventListener('click', () => {
        display.textContent = display.textContent.slice(0, -1);
        updateUI();
    });

    // Call button (Still does nothing)
    document.getElementById('callBtn').addEventListener('click', () => {
        console.log("Calling...", display.textContent);
        display.textContent = "";
    });
});