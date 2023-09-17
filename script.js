// Mock file data (you would replace this with actual file data from your server)
const files = [
    { name: "file1.txt", size: "10 KB" },
    { name: "image.jpg", size: "500 KB" },
    { name: "document.pdf", size: "2 MB" },
];

// Function to populate the file list
function populateFileList() {
    const fileList = document.getElementById("file-list-ul");
    fileList.innerHTML = "";

    files.forEach((file) => {
        const li = document.createElement("li");
        li.textContent = `${file.name} (${file.size})`;
        fileList.appendChild(li);
    });
}

// Function to handle file upload (simulated)
function uploadFile() {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (file) {
        // Simulate uploading the file to the server
        // In a real application, you would send the file to your server using AJAX or a form submission
        // After successfully uploading, you would add it to the `files` array and update the file list
        setTimeout(() => {
            files.push({ name: file.name, size: (file.size / 1024).toFixed(2) + " KB" });
            populateFileList();
        }, 1000);
    }
}

// Initial population of file list
populateFileList();
