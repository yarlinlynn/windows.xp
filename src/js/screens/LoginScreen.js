
export function LoginScreen() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // clear previous content

    const screen = document.createElement("div");
    screen.className = "login-screen";
    screen.innerHTML = `
        <div class="inner_container">

            <div class="login_inner_details">
                <!-- login conatiner -->
                <div class="login_conatiner">
                    
                    <div class="login_logo">
                        <!-- windows logo transparent -->
                        <img src="../public/images/logo&background/windows_logo.jpg" alt="Windows.xp Logo"/>
                        <p>To begin, click on user name</p>
                    </div>

                    <!-- border -->
                    <div class="divider"></div>

                    <!-- login avatar : once clicked renderd DesktopScreen -->
                    <div class="login_profile">
                        <button class="user">
                            <div class="user_avatar">
                                <img src="../public/images/profile_imgs/login_avatar.jpg" alt="Login Profile Avatar"/>
                            </div>
                            <div class="profile_details">
                                <p>Yarlin's Desktop</p>
                                <p>Public Portfolio</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            <!-- footer of login page -->
            <div class="restart_btn">
                <img src="../public/images/desktop_icons/restart_computer.webp" alt="Restart Application"/>
                <div class="shutdown-text" id="shutdown-text">Restart Deskop XP</div>
            </div>
            <div class="bottom_text">
                <p>After you log on, the system's yours to explore.</p>
                <p>Every detail has been designed with a purpose.</p>
            </div>
        </div>
    `;
    app.appendChild(screen);

    gsap.to(".login-screen", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
  });
}