//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelector('.choose-size span');
var root = document.querySelector(':root');

//remove active class from all other menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach((item) => {
    item.addEventListener('click', () => { 
        changeActiveItem();
        item.classList.add('active');
        if(item.id != "notifications"){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//-----------------------messages-----------------------
const searchMessage = () => { 
    const val = messageSearch.value.toLowerCase();
    const messageList = messages.querySelectorAll('.message'); // Select all messages

    messageList.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase(); // Get name
        if (name.includes(val)) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

// Add event listener for real-time search
messageSearch.addEventListener('input', searchMessage);
//search messages
messageSearch.addEventListener('keyup', searchMessage);
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

//theme customization
//open theme model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
//close theme model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }

}

themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);

//change font size
document.addEventListener('DOMContentLoaded', function() {
    const theme = document.querySelector('#theme'); // Theme button
    const themeModal = document.querySelector('.customize-theme'); // Theme modal
    const fontSizes = document.querySelectorAll('.choose-size span'); // Select all font size options
    const root = document.documentElement; // Select root to modify CSS variables

    // Open Theme Modal
    const openThemeModal = () => {
        themeModal.style.display = 'grid';
    };

    // Close Theme Modal when clicking outside
    const closeThemeModal = (e) => {
        if (e.target.classList.contains('customize-theme')) {
            themeModal.style.display = 'none';
        }
    };

    // Event Listeners for Theme Modal
    if (theme) {
        theme.addEventListener('click', openThemeModal);
        themeModal.addEventListener('click', closeThemeModal);
    } else {
        console.error("Theme button not found! Make sure your HTML has id='theme'");
    }

    // ========== Change Font Size ==========
    fontSizes.forEach(size => {
        size.addEventListener('click', () => {
            // Remove active class from all
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

            // Apply the font size to the HTML document
            document.querySelector('html').style.fontSize = fontSize;
        });
    });
});

//change color

document.addEventListener('DOMContentLoaded', function() {
    const colorPalette = document.querySelectorAll('.choose-color span'); // Select all color options
    const root = document.documentElement; // Select the root element to modify CSS variables

    // Change Primary Colors
    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            // Remove active class from all
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
            
            // Apply the new primary color
            root.style.setProperty('--color-primary', primaryColor);
        });
    });
});

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%' ;
    lightColorLightness = '15%' ;
    whiteColorLightness = '20%' ;

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%' ;
    lightColorLightness = '10%' ;
    whiteColorLightness = '0%' ;

    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    Bg3.classList.add('active');
    changeBg();
})

Bg1.addEventListener('click', () => {
    Bg2.classList.remove('active');
    Bg1.classList.add('active');
    Bg3.classList.remove('active');
    window.location.reload();
})