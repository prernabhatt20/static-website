function checkStatus() {
    const status = document.getElementById("status");

    status.textContent = "✅ Website is running successfully inside Docker!";
    status.style.color = "green";
}

// Auto status update on load
window.onload = () => {
    document.getElementById("status").textContent =
        "🟢 Deployed via GitHub Actions and running in Docker container.";
};
