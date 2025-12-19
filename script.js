let lastSemesterPage = 'home';
let selectedYear = '2023';

function showView(viewId) {
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));

    // Show the selected view
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

// STEP 1: Triggered when the user selects a semester (e.g., Semester 1)
function selectSemester(semId) {
    // Store the selected semester ID (e.g., 'semester1')
    lastSemesterPage = semId;

    // Navigate to the year selection view
    showView('years');
}

// STEP 2: Triggered when the user selects a year (e.g., 2023)
function selectYear(year) {
    // Store the selected year
    selectedYear = year;

    // Redirect back to the previously selected semester page
    showView(lastSemesterPage);
}

// Navigate back from the download page to the last semester view
function goBackFromDownload() {
    showView(lastSemesterPage);
}

// STEP 3: Generates the download link for the selected subject
function showDownload(subjectName, pdfFileName) {
    // Display the selected subject name
    document.getElementById('selected-subject').innerText = subjectName;
    
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        // File path structure: mca/semester/year/filename.pdf
        const filePath = "mca/" + lastSemesterPage + "/" + selectedYear + "/" + pdfFileName;

        // Assign the generated file path to the download button
        downloadBtn.href = filePath;
        downloadBtn.setAttribute('download', pdfFileName);

        // Log the generated file path for debugging
        console.log("Generated file path:", filePath);
    }

    // Navigate to the download view
    showView('download');
}

// Toggle the visibility of the support modal
function toggleSupport() {
    const modal = document.getElementById('support-modal');
    const overlay = document.getElementById('support-overlay');

    if (modal && overlay) {
        modal.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function toggleSupport() {
    const modal = document.getElementById('support-modal');
    modal.classList.toggle('active');
}