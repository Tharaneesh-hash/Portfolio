const pageContent =document.getElementById("pageContent");
const navItems =document.querySelectorAll(".nav-item");
const postModal =document.getElementById("postModal");
const postText =document.getElementById("postText");
let posts = [
    {
        text: "Hello Everyone!",
        likes: 0,
        time: "2m ago"
    },
    {
        text: "Welcome to my MiniBlog! 🚀",
        likes: 4,
        time: "1h ago"
    }
];
function createPost(post) {
    return `
        <article class="card">
            <div class="post-header">
                <div class="avatar">
                    TK
                </div>
                <strong>
                    THARANEESH K
                    <span class="verified">●</span>
                </strong>
                <span class="post-time">
                    ${post.time} ·•••
                </span>
            </div>
            <div class="post-content">
                ${post.text}
            </div>
            <div class="post-actions">
                <button class="action like-button">
                    ❤️
                    <span>${post.likes}</span>
                </button>
                <button class="action">
                    💬 Comment
                </button>
                <button class="action">
                    🔄 Repost
                </button>
                <button class="action">
                    ⚡ Save
                </button>
                <button class="action delete-button">
                    🗑 Delete
                </button>
            </div>
        </article>
    `;
}
function showHome() {

    pageContent.innerHTML = `
        <h1 class="page-title">
            Home
        </h1>
        <div class="card composer">
            <div class="avatar">
                TK
            </div>
            <div
                class="compose-area"
                id="composeArea"
            >
                What's happening?
            </div>
            <div class="compose-footer">
                <button
                    class="small-post"
                    id="homePostButton"
                >
                    Post
                </button>
            </div>
        </div>
        ${posts.map(createPost).join("")}
    `;
    document
        .getElementById("composeArea")
        .onclick = openPostModal;
    document
        .getElementById("homePostButton")
        .onclick = openPostModal;
    activatePostButtons();
}
function activatePostButtons() {
    document
        .querySelectorAll(".like-button")
        .forEach(button => {
            button.onclick = function() {
                this.classList.toggle("liked");
                const number =
                    this.querySelector("span");
                let count =
                    Number(number.textContent);
                if (
                    this.classList.contains("liked")
                ) {
                    count++;
                }
                else {
                    count--;
                }
                number.textContent = count;
            };
        });
    document
        .querySelectorAll(".delete-button")
        .forEach(button => {
            button.onclick = function() {
                this
                    .closest(".card")
                    .remove();
            };
        });
}
function showProfile() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Profile
        </h1>
        <div class="card profile-card">
            <div class="cover">
                <div class="profile-avatar">
                    👤
                </div>
            </div>
            <button
                class="edit-profile"
                onclick="editProfile()"
            >
                Edit Profile
            </button>
            <div class="profile-info">
                <h1>
                    THARANEESH K
                </h1>
                <div class="username">
                    @tharaneeshk
                </div>
                <div class="profile-bio">
                    ✨ BTech IT Student
                    <br>
                    Welcome to my MiniBlog profile!
                </div>
                <div class="stats">
                    <div class="stat">
                        1
                        <small>Posts</small>
                    </div>
                    <div class="stat">
                        120
                        <small>Followers</small>
                    </div>
                    <div class="stat">
                        85
                        <small>Following</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function showNotifications() {
    const notifications = [
        ["💗", "John liked your Tweet", "2m ago"],
        ["🔄", "David reposted your Tweet", "10m ago"],
        ["💬", "Alex commented on your Tweet", "25m ago"],
        ["💗", "Emma liked your Tweet", "1h ago"],
        ["🔄", "Sophia reposted your Tweet", "2h ago"],
        ["👥", "Sophia followed you", "3h ago"]
    ];
    const earlier = [
        ["💗", "Alex liked your post", "5h ago"],
        ["👥", "Emma followed you", "8h ago"],
        ["💬", "David commented on your post", "1d ago"]
    ];
    function notificationHTML(data) {
        return data.map(item => `
            <div class="notification">
                <div class="notification-icon">
                    ${item[0]}
                </div>
                <p>
                    <b>${item[1]}</b>
                </p>
                <span class="notification-time">
                    ${item[2]}
                    <br>
                    ›
                </span>
            </div>
        `).join("");
    }
    pageContent.innerHTML = `
        <h1 class="page-title">
            Notifications
        </h1>
        <p class="page-subtitle">
            Stay updated with your activity on MiniBlog
        </p>
        <div class="card">
            ${notificationHTML(notifications)}
        </div>
        <h2 class="page-title">
            Earlier
        </h2>
        <div class="card">
            ${notificationHTML(earlier)}
        </div>

    `;
}
function showMessages() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Messages
        </h1>
        <div class="card messages">
            <div
                class="chat"
                id="chat"
            >
                <div class="message">
                    <b>Alex</b>
                    <br>
                    Hey THARANEESH K! 👋
                    <small>
                        10:30 AM
                    </small>
                </div>
                <div class="message mine">
                    <b>THARANEESH K</b>
                    <br>
                    Hi! How are you?
                    <small>
                        10:32 AM
                    </small>
                </div>
                <div class="message mine">
                    <b>THARANEESH K</b>
                    <br>
                    hi
                    <small>
                        10:33 AM
                    </small>
                </div>
            </div>
            <form
                class="message-form"
                id="messageForm"
            >
                <input
                    id="messageInput"
                    placeholder="Write a message..."
                    required
                >
                <button>
                    Send
                </button>
            </form>
        </div>
    `;
    document
        .getElementById("messageForm")
        .onsubmit = function(event) {
            event.preventDefault();
            const input =
                document.getElementById(
                    "messageInput"
                );
            const message =
                input.value.trim();
            if (!message) return;
            document
                .getElementById("chat")
                .insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="message mine">
                        ${message}
                        <small>
                            now
                        </small>
                    </div>  `
                );
            input.value = "";
        };
}
function showSettings() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Settings
        </h1>
        <div class="card settings-box">
            <h2>
                Account Settings
            </h2>
            <p>
                Update your personal information
            </p>
            <label>
                Name
            </label>
            <input
                id="name"
                value="THARANEESH K"
            >
            <label>
                Email
            </label>
            <input
                id="email"
                value="tharaneesh.k07@gmail.com"
            >
            <button
                class="save-button"
                id="saveSettings"
            >
                Save Changes
            </button>
        </div>
    `;
    document
        .getElementById("saveSettings")
        .onclick = function() {
            alert(
                "Settings saved successfully!"
            );
        };
}
function showExplore() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Explore
        </h1>
        <div class="card empty">

            🔍
            <h2>
                Discover MiniBlog
            </h2>
            <p>
                Explore technology, programming,
                student life and college content.
            </p>
        </div>
    `;
}
function showBookmarks() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Bookmarks
        </h1>
        <div class="card empty">
            🔖
            <h2>
                Your Bookmarks
            </h2>
            <p>
                Saved posts will appear here.
            </p>
        </div>
    `;
}
function showFollowing() {
    pageContent.innerHTML = `
        <h1 class="page-title">
            Following
        </h1>
        <div class="card empty">
            👥
            <h2>
                People You Follow
            </h2>
            <p>
                Your followed users will appear here.
            </p>
        </div>
    `;
}
function editProfile() {
    alert(
        "Profile editing is ready!"
    );
}
navItems.forEach(item => {
    item.addEventListener(
        "click",
        function() {
            navItems.forEach(nav => {
                nav.classList.remove("active");
            });
            this.classList.add("active");
            const page =
                this.dataset.page;
            if (page === "home") {
                showHome();
            }
            else if (page === "profile") {
                showProfile();
            }
            else if (page === "notifications") {
                showNotifications();
            }
            else if (page === "messages") {
                showMessages();
            }
            else if (page === "settings") {
                showSettings();
            }
            else if (page === "explore") {
                showExplore();
            }
            else if (page === "bookmarks") {
                showBookmarks();
            }
            else if (page === "following") {
                showFollowing();
            }
        }
    );
});
function openPostModal() {
    postModal.classList.add("show");
    postText.focus();

}
function closePostModal() {
    postModal.classList.remove("show");
    postText.value = "";
}
document
    .getElementById("createPost")
    .onclick = openPostModal;
document
    .getElementById("closeModal")
    .onclick = closePostModal;
document
    .getElementById("publishPost")
    .onclick = function() {
        const text =postText.value.trim();
        if (!text) {
            alert(
                  "Please write something first."
            );
            return;
        }
        posts.unshift({
            text: text,
            likes: 0,
            time: "now"
        });
        closePostModal();
        navItems.forEach(nav => {
            nav.classList.remove("active");
        });
        document
            .querySelector(
                '[data-page="home"]'
            )
            .classList.add("active");
        showHome();
    };
postModal.addEventListener(
    "click",
    function(event) {
        if (
            event.target === postModal
        ) {
            closePostModal();
        }
    }
);
document
    .querySelectorAll(".follow-btn")
    .forEach(button => {
        button.onclick = function() {
            if (
                this.classList.contains(
                    "following"
                )
            ) {
                this.classList.remove(
                    "following"
                );
                this.textContent = "Follow";
            }
            else {
                this.classList.add(
                    "following"
                );
                this.textContent =
                    "Following";
            }
        };
    });
showHome();