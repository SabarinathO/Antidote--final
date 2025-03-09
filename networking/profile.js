document.addEventListener('DOMContentLoaded', function () {
    // Theme button & modal
    const themeBtn = document.querySelector('#theme'); 
    const themeModal = document.querySelector('.customize-theme');

    // Font size selection
    const fontSizes = document.querySelectorAll('.choose-size span');
    const root = document.documentElement; 

    // Color selection
    const colorPalette = document.querySelectorAll('.choose-color span');

    // Background selection
    const Bg1 = document.querySelector('.bg-1');
    const Bg2 = document.querySelector('.bg-2');
    const Bg3 = document.querySelector('.bg-3');

    // ========== OPEN & CLOSE THEME MODAL ==========
    const openThemeModal = () => {
        themeModal.style.display = 'grid';
    };

    const closeThemeModal = (e) => {
        if (e.target.classList.contains('customize-theme')) {
            themeModal.style.display = 'none';
        }
    };

    
    // Add event listeners
    themeBtn.addEventListener('click', openThemeModal);
    themeModal.addEventListener('click', closeThemeModal);

    // ========== CHANGE FONT SIZE ==========
    fontSizes.forEach(size => {
        size.addEventListener('click', () => {
            document.querySelector('.choose-size .active')?.classList.remove('active');
            size.classList.add('active');

            let fontSize;
            if (size.classList.contains('font-size-1')) {
                fontSize = '10px';
                root.style.setProperty('--sticky-top-left', '5.4rem');
                root.style.setProperty('--sticky-top-right', '5.4rem');
            } else if (size.classList.contains('font-size-2')) {
                fontSize = '13px';
                root.style.setProperty('--sticky-top-left', '5.4rem');
                root.style.setProperty('--sticky-top-right', '-7rem');
            } else if (size.classList.contains('font-size-3')) {
                fontSize = '15px';
                root.style.setProperty('--sticky-top-left', '-2rem');
                root.style.setProperty('--sticky-top-right', '-17rem');
            } else if (size.classList.contains('font-size-4')) {
                fontSize = '17px';
                root.style.setProperty('--sticky-top-left', '-5rem');
                root.style.setProperty('--sticky-top-right', '-25rem');
            } else if (size.classList.contains('font-size-5')) {
                fontSize = '18px';
                root.style.setProperty('--sticky-top-left', '-10rem');
                root.style.setProperty('--sticky-top-right', '-33rem');
            }

            document.querySelector('html').style.fontSize = fontSize;
        });
    });

    // ========== CHANGE PRIMARY COLOR ==========
    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            document.querySelector('.choose-color .active')?.classList.remove('active');
            color.classList.add('active');

            let primaryColor;
            if (color.classList.contains('color-1')) {
                primaryColor = "hsl(255,75%,60%)";
            } else if (color.classList.contains('color-2')) {
                primaryColor = "hsl(52,75%,60%)";
            } else if (color.classList.contains('color-3')) {
                primaryColor = "hsl(352,75%,60%)";
            } else if (color.classList.contains('color-4')) {
                primaryColor = "hsl(152,75%,60%)";
            } else if (color.classList.contains('color-5')) {
                primaryColor = "hsl(202,75%,60%)";
            }

            root.style.setProperty('--color-primary', primaryColor);
        });
    });

    // ========== CHANGE BACKGROUND THEME ==========
    let lightColorLightness;
    let darkColorLightness;
    let whiteColorLightness;

    const changeBg = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
    };

    Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        lightColorLightness = '15%';
        whiteColorLightness = '20%';

        Bg2.classList.add('active');
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBg();
    });

    Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        lightColorLightness = '10%';
        whiteColorLightness = '0%';

        Bg2.classList.remove('active');
        Bg1.classList.remove('active');
        Bg3.classList.add('active');
        changeBg();
    });

    Bg1.addEventListener('click', () => {
        Bg2.classList.remove('active');
        Bg1.classList.add('active');
        Bg3.classList.remove('active');
        window.location.reload(); // Reloads the page to reset to default light mode
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const notifications = document.querySelector('#notifications');
    const notificationPopup = document.querySelector('.notification-popup');

    if (!notifications || !notificationPopup) {
        console.error("Notification elements not found!");
        return;
    }

    // Function to remove active class
    const changeActiveItem = () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');

            if (item.id !== "notifications") {
                notificationPopup.style.display = 'none';
            } else {
                notificationPopup.style.display = notificationPopup.style.display === 'block' ? 'none' : 'block';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const messageSearch = document.querySelector("#message-search");
    const messages = document.querySelectorAll(".message");

    // Search Messages
    const searchMessages = () => {
        let val = messageSearch.value.toLowerCase();
        messages.forEach((chat) => {
            let name = chat.querySelector("h5").textContent.toLowerCase();
            chat.style.display = name.includes(val) ? "flex" : "none";
        });
    };

    messageSearch.addEventListener("input", searchMessages);
});


document.addEventListener("DOMContentLoaded", function () {
    const editProfileBtn = document.querySelector(".profile-actions .btn");
    const modal = document.getElementById("editProfileModal");
    const closeBtn = document.querySelector(".close");

    const usernameField = document.getElementById("username");
    const bioField = document.getElementById("bio");
    const profilePictureInput = document.getElementById("profilePicture");

    const profileUsername = document.querySelector(".profile-info .username");
    const profileBio = document.querySelector(".bio b");
    const profileImage = document.querySelector(".profile-picture img");

    // Open Modal
    editProfileBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        usernameField.value = profileUsername.textContent;
        bioField.value = profileBio.textContent;
    });

    // Close Modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle Profile Picture Change (Live Preview)
    profilePictureInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                console.log("New Image URL:", e.target.result); // Debugging Step
                profileImage.src = e.target.result; // ✅ Set new image
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle Form Submission
    document.getElementById("editProfileForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const newUsername = usernameField.value;
        const newBio = bioField.value;

        profileUsername.textContent = newUsername;
        profileBio.textContent = newBio;

        alert("Profile Updated Successfully!");
        modal.style.display = "none";
    });
});

