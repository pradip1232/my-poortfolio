import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

// Helper to read Tailwind forced dark class or system theme
function getTheme() {
    if (typeof window === "undefined") return "light";
    // tailwind 'dark' strategy: either <html class="dark"> or prefers-color-scheme
    if (
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
}

const LOCAL_STORAGE_KEY = "beastportfolioWorkingModalLastSeen";
const HOUR_24_IN_MS = 24 * 60 * 60 * 1000;

function shouldShowModal() {
    if (typeof window === "undefined") return false; // SSR guard
    const lastSeen = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!lastSeen) return true;
    const lastSeenTime = parseInt(lastSeen, 10);
    const now = Date.now();
    return now - lastSeenTime > HOUR_24_IN_MS;
}

function setModalSeen() {
    if (typeof window === "undefined") return;
    localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
}

export default function WorkingModal() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (shouldShowModal()) {
            setOpen(true);
        }
        // Listen to theme changes (respond to user changing dark/light dynamically)
        const checkTheme = () => setTheme(getTheme() === "dark" ? "dark" : "light");
        checkTheme();
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkTheme);
        // If using Tailwind class strategy, mutation observer is an option, but for now, on open, check only
        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", checkTheme);
        };
    }, []);

    const handleClose = () => {
        setOpen(false);
        setModalSeen();
    };

    // Button theme: invert for dark/light!
    // - light: black bg, white text
    // - dark: white bg, black text
    const buttonClass =
        theme === "dark"
            ? "bg-white text-black px-7 py-2.5 rounded-lg font-semibold text-base hover:bg-zinc-200 transition-shadow shadow mt-1"
            : "bg-black text-white px-7 py-2.5 rounded-lg font-semibold text-base hover:bg-zinc-800 transition-shadow shadow mt-1";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        // updated for true medium size modal
                        className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl px-12 py-10 max-w-lg w-full flex flex-col items-center relative"
                        initial={{ scale: 0.82, y: -40, opacity: 0 }}
                        animate={{
                            scale: 1,
                            y: 0,
                            opacity: 1,
                            transition: { type: 'spring', stiffness: 400, damping: 28 }
                        }}
                        exit={{
                            scale: 0.82,
                            y: 30,
                            opacity: 0,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            initial={{ rotate: -10, y: -12 }}
                            animate={{
                                rotate: [0, 20, -10, 0],
                                y: [-12, 2, -10, -12],
                                transition: {
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2
                                }
                            }}
                            className="mb-4"
                        >
                            <AlertTriangle className="h-12 w-12 text-yellow-400 drop-shadow" />
                        </motion.div>
                        <h2 className="text-2xl font-semibold mb-3 text-center">
                            Work in Progress
                        </h2>
                        <p className="text-base text-muted-foreground text-center mb-7">
                            Hi there! 👋<br />
                            My portfolio is currently under development.<br />
                            Cool stuff and animated updates are coming soon!
                        </p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClose}
                            className={buttonClass}
                            aria-label="Close modal"
                        >
                            OK, Got it!
                        </motion.button>
                        {/* Fun animated background elements */}
                        <motion.div
                            className="absolute -top-2 -left-2"
                            animate={{ x: [0, 4, -2, 0], y: [0, 3, -1, 0], scale: [1, 1.07, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            <span className="block h-3 w-3 rounded-full bg-yellow-300 opacity-80 blur-[2px]"></span>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-2 -right-2"
                            animate={{ x: [0, -4, 2, 0], y: [0, -3, 1, 0], scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 2.7 }}
                        >
                            <span className="block h-2.5 w-2.5 rounded-full bg-blue-300 opacity-60 blur-[2px]"></span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
