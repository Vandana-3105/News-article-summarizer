document.addEventListener('DOMContentLoaded', () => {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, validation would happen here
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (email && phone) {
                // Simulate login success
                window.location.href = 'language.html';
            }
        });
    }

    // Upload Form Handling
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameDisplay.textContent = e.target.files[0].name;
            } else {
                fileNameDisplay.textContent = "No file chosen";
            }
        });
    }

    if (uploadForm) {
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate upload and summarization
            const summaryOutput = document.getElementById('summary-output');
            const submitBtn = uploadForm.querySelector('.btn');

            submitBtn.textContent = 'Summarizing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                summaryOutput.style.display = 'block';
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;

                // Scroll to summary
                summaryOutput.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        });
    }
});

// Language Selection Handling
function selectLanguage(language) {
    // Store selected language if needed (e.g., localStorage)
    console.log(`Selected Language: ${language}`);
    window.location.href = 'upload.html';
}
