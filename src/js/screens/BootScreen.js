import { LoginScreen } from "./LoginScreen.js";

export function BootScreen() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const screen = document.createElement("div");
    screen.className = "fixed inset-0 bg-black z-50";
    screen.innerHTML = `
        <div id="bootUp-screen" 
            class="flex items-center justify-center h-screen text-white"
        >
            <div class="relative">

                <!-- Logo -->
                <div class="-mt-40 mb-4 text-center">
                    <img src="../public/images/logo&background/windows_logo(dark).jpg" 
                        alt="Windows.xp Logo"
                        class="w-[390px] md:w-[500px] h-auto mx-auto"
                    />
                </div>

                <!-- Loader -->
                <div class="w-[180px] h-[22px] border-2 border-[#b2b2b2] rounded-[7px] mx-auto p-[2px_1px] overflow-hidden flex-shrink-0 self-center z-[3]">
                    <span class="square"></span>
                    <span class="square"></span>
                    <span class="square"></span>
                </div>
            </div>

            <!-- Copyright -->
            <div class="fixed bottom-4 left-1/2 -translate-1/2 flex items-center justify-between gap-6 w-screen px-20">
                <p class="hidden text-[10px] md:text-[13px] md:flex flex-col">
                    <span>Copyright &copy; yarlinlynn 2026</span>
                    <span>Microsoft inspired Portfolio</span>
                </p>
                <img src="../public/images/logo&background/portfolio.webp" 
                    alt="Portfolio Trademark"
                    class="w-24 m-auto md:w-40 md:m-0"
                />
            </div>
            
        </div>
    `;

    app.appendChild(screen);

    const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" }
    });

    tl.to({}, { duration: 2 }) // starts of as black screen
      .to("#bootUp-screen", { 
        opacity: 1, 
        duration: 0.8 
      }) // fades boot_up screen in 
      .to({}, { duration: 10 }) // pauses on boot_screen
      .to("#bootUp-screen", { 
        opacity: 0, 
        duration: 0.7 
      }) // fades boot_up screen out
      .to(".screen_overlay", {
        opacity: 0,
        duration: 1.5, // display black screen again
        onComplete: () => {
            screen.remove();
            LoginScreen(); // then after 1.5 secs displays login screen
        }
    });

}