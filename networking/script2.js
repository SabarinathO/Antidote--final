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
            } else if (size.classList.contains('font-size-2')) {
                fontSize = '13px';
            } else if (size.classList.contains('font-size-3')) {
                fontSize = '15px';
            } else if (size.classList.contains('font-size-4')) {
                fontSize = '17px';
            } else if (size.classList.contains('font-size-5')) {
                fontSize = '18px';
            }

            document.querySelector('html').style.fontSize = fontSize;

            // Save to localStorage
            localStorage.setItem('fontSize', fontSize);
            localStorage.setItem('activeFontSize', size.classList[0]);
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

            // Save to localStorage
            localStorage.setItem('primaryColor', primaryColor);
            localStorage.setItem('activeColor', color.classList[0]);
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

        // Save to localStorage
        localStorage.setItem('background', 'bg-2');
    });

    Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        lightColorLightness = '10%';
        whiteColorLightness = '0%';

        Bg2.classList.remove('active');
        Bg1.classList.remove('active');
        Bg3.classList.add('active');
        changeBg();

        // Save to localStorage
        localStorage.setItem('background', 'bg-3');
    });

    Bg1.addEventListener('click', () => {
        darkColorLightness = '17%';
        lightColorLightness = '95%';
        whiteColorLightness = '100%';
    
        Bg1.classList.add('active');
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        changeBg();
    
        // Save to localStorage
        localStorage.setItem('background', 'bg-1');
    });
    

    // ========== LOAD USER SETTINGS FROM LOCAL STORAGE ==========
    function loadSettings() {
        // Load font size
        if (localStorage.getItem('fontSize')) {
            document.querySelector('html').style.fontSize = localStorage.getItem('fontSize');
        }

        if (localStorage.getItem('activeFontSize')) {
            document.querySelectorAll('.choose-size span').forEach(size => {
                size.classList.remove('active');
                if (size.classList.contains(localStorage.getItem('activeFontSize'))) {
                    size.classList.add('active');
                }
            });
        }

        // Load primary color
        if (localStorage.getItem('primaryColor')) {
            root.style.setProperty('--color-primary', localStorage.getItem('primaryColor'));
        }

        if (localStorage.getItem('activeColor')) {
            document.querySelectorAll('.choose-color span').forEach(color => {
                color.classList.remove('active');
                if (color.classList.contains(localStorage.getItem('activeColor'))) {
                    color.classList.add('active');
                }
            });
        }

        // Load background
        const savedBg = localStorage.getItem('background');
        if (savedBg) {
            if (savedBg === 'bg-2') {
                Bg2.click();
            } else if (savedBg === 'bg-3') {
                Bg3.click();
            } else {
                Bg1.click();
            }
        }
    }

    loadSettings(); // Load user preferences on page load
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
    const chatBox = document.getElementById("chatBox");
    const chatProfilePic = document.getElementById("chatProfilePic");
    const chatUserName = document.getElementById("chatUserName");
    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("messageInput");
    const sendMessage = document.getElementById("sendMessage");
    const messageList = document.querySelector(".message-list");
    const editIcon = document.getElementById("editIcon");
    const groupForm = document.getElementById("groupForm");
    const createGroupBtn = document.getElementById("createGroupBtn");
    const closeGroupForm = document.getElementById("closeGroupForm");
    const backButton = document.getElementById("backButton"); // ✅ Added Back Button
    const groupProfilePicInput = document.getElementById("groupProfilePic");
    const groupPicPreview = document.getElementById("groupPicPreview");

    let currentChat = null;
    let groupImageURL = "images/default-group.png"; // Default group image

    // 📌 Attach Click Event to Individual Chats (Existing & Dynamic)
    function attachChatEventListeners() {
        document.querySelectorAll(".message").forEach(message => {
            message.addEventListener("click", function () {
                const profilePic = this.querySelector(".profile-picture img")?.src || "images/default-profile.png";
                const name = this.querySelector("h5").innerText;

                openChat(name, profilePic);
            });
        });
    }

    // 📌 Open Chat (For Individual & Group Chats)
    function openChat(name, profilePic) {
        chatUserName.textContent = name;
        chatProfilePic.src = profilePic || "images/default-profile.png";
        chatBox.style.display = "flex";
        groupForm.style.display = "none";
        currentChat = name;
    }

    // 📌 Open Group Form
    editIcon.addEventListener("click", function () {
        chatBox.style.display = "none";
        groupForm.style.display = "block";
    });

    // 📌 Close Group Form
    closeGroupForm.addEventListener("click", function () {
        groupForm.style.display = "none";
    });

    // 📌 Handle Group Profile Picture Upload & Preview
    groupProfilePicInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                groupPicPreview.src = e.target.result;
                groupImageURL = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // 📌 Create Group Chat (With Last Created Group at the Top)
    createGroupBtn.addEventListener("click", function () {
        const groupName = document.getElementById("groupName").value.trim();
        if (groupName === "") {
            alert("Please enter a group name!");
            return;
        }

        // 📌 Create Group Chat Element
        const newGroup = document.createElement("div");
        newGroup.classList.add("message", "group-chat");
        newGroup.innerHTML = `
            <div class="profile-picture">
                <img src="${groupImageURL}" alt="Group">
            </div>
            <div class="message-details">
                <h5>${groupName}</h5>
                <p>Group created just now</p>
            </div>
        `;

        // ✅ Ensure the last created group appears FIRST
        messageList.prepend(newGroup); 

        // Attach event listener for the new group
        attachChatEventListeners();

        // Hide form and open chat
        groupForm.style.display = "none";
        openChat(groupName, groupImageURL);
    });

    // 📌 Send Message Function
    function sendMessageToChat() {
        if (messageInput.value.trim() === "") return;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("sent-message");

        messageDiv.innerHTML = `
            <span class="sender-name">You</span>
            <p>${messageInput.value}</p>
        `;

        chatMessages.appendChild(messageDiv);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendMessage.addEventListener("click", sendMessageToChat);
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessageToChat();
        }
    });

    // 📌 Back Button Functionality (✅ Now Working)
    backButton.addEventListener("click", function () {
        chatBox.style.display = "none";  // Hide chat box
        groupForm.style.display = "none"; // Hide group form (if open)
    });

    // 📌 Attach event listeners on page load for existing chats
    attachChatEventListeners();
});
