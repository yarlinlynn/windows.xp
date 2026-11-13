import { LoginScreen } from "./LoginScreen.js";

export function BootScreen() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const screen = document.createElement("div");
    screen.className = "screen_overlay";
    screen.innerHTML = `
        <div id="bootUp-screen">
            <div style="position: relative;">
                <div class="logo_container">
                    <h1 style="display: none;">Boot Up Screen</h1>
                    <img src="../public/images/logo&background/windows_logo(dark).jpg" alt="Windows.xp Logo"/>
                </div>

                <div class="loader_container">
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                <div>
            </div>
            <div class="copyright_trademark">
                <p>
                    <span>Copyright &copy; yarlinlynn 2026</span>
                    <span>Microsoft inspired Portfolio</span>
                </p>
                <img src="../public/images/logo&background/portfolio.webp" alt="Portfolio Trademark"/>
            </div>
        </div>
    `;

    app.appendChild(screen);

    const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" }
    });

    // 1. Stay on pure black longer (this is what you want)
    tl.to({}, { duration: 2 })          // ← black screen pause (change this number)

    // 2. Then fade the boot screen in
    .to("#bootUp-screen", {
        opacity: 1,
        duration: 0.8,
    })

    // 3. Hold the logo + loader
    .to({}, { duration: 10 })

    // 4. Fade everything out
    .to("#bootUp-screen", {
        opacity: 0,
        duration: 0.7,
    })

    // 5. Remove overlay
    .to(".screen_overlay", {
        opacity: 0,
        duration: 2,
        onComplete: () => {
            screen.remove();
            LoginScreen();
        }
    });

}