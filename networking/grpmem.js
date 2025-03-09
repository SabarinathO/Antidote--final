// Show popup on clicking the group name
document.getElementById("groupName").addEventListener("click", function () {
    document.getElementById("groupDetailsPopup").style.display = "block";
});

// Close popup when clicking the "X" button
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("groupDetailsPopup").style.display = "none";
});

// Close popup when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("groupDetailsPopup")) {
        document.getElementById("groupDetailsPopup").style.display = "none";
    }
});
