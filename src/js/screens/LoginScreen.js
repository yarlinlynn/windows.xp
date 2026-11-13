
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
                    <!-- windows logo transparent -->
                    <div>
                        <h2>Login Screen</h2>
                    </div>

                    <!-- border -->
                    <div class="divider"></div>

                    <!-- login avatar : once clicked renderd DesktopScreen -->
                    <div></div>

                </div>
            </div>

            <!-- footer of login page -->
            <div></div>
        </div>
    `;
    app.appendChild(screen);

    gsap.to(".login-screen", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
  });
}