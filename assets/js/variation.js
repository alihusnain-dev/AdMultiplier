document.addEventListener('DOMContentLoaded', () => {
    // Profile Menu Logic
    const profileIcon = document.getElementById('profileIcon');
    const profileMenu = document.getElementById('profileMenu');

    profileIcon.addEventListener('click', () => {
        profileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.add('hidden');
        }
    });

    // Progress Bar and Variation Display Logic
    const innerBar = document.querySelector('.inner-bar');
    const percentageText = document.querySelector('.percentage');
    const downloadFiles = document.getElementById('downloadFiles');

    // Retrieve data from localStorage
    const variations = JSON.parse(localStorage.getItem('variations')) || [];
    const totalVariations = parseInt(localStorage.getItem('totalVariations')) || 0;
    let completedVariations = 0;

    function updateProgress() {
        const percentage = (completedVariations / totalVariations) * 100;
        innerBar.style.width = `${percentage}%`;
        percentageText.textContent = `${completedVariations}/${totalVariations} completed`;
    }

    // Function to truncate file name to first 16 characters with extension
    function truncateFileName(fullName) {
        const extension = fullName.includes('.mp4') ? '.mp4' : '';
        const baseName = fullName.replace(extension, '');
        const truncatedBaseName = baseName.substring(0, 26);
        return `${truncatedBaseName}${extension}`;
    }

    // Function to add variations one by one
    function addVariationsSequentially() {
        if (completedVariations < variations.length) {
            setTimeout(() => {
                const variation = variations[completedVariations];
                const truncatedName = truncateFileName(variation.name);
                const newFile = document.createElement('div');
                newFile.classList.add('file', 'completed'); // Add 'completed' class immediately
                newFile.innerHTML = `
                    <p class="file-name">${truncatedName}</p>
                    <a href="" class="download-btn">
                        <img src="../assets/images/download-icon.svg" alt="">
                    </a>
                `;
                downloadFiles.appendChild(newFile);

                completedVariations += 1;
                updateProgress();
                addVariationsSequentially(); // Recurse to add the next variation
            }, 2000); // 2-second delay between each variation
        }
    }

    // Initial update (start at 0%)
    updateProgress();

    // Start adding variations one by one
    addVariationsSequentially();

    // Clear localStorage after processing (optional)
    window.onunload = () => {
        localStorage.removeItem('variations');
        localStorage.removeItem('totalVariations');
    };
});