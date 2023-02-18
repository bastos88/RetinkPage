import { useState } from "react";
import styles from "./Button.module.css";

export function Button() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleClick = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setTimeout(() => {
                setIsSent(false);
            }, 1700);
        }, 2000);
    }
    return (
        <button className={styles.button}
            disabled={isSending || isSent}
            onClick={handleClick}>
            <span className={styles.rail}></span>
            <span className={styles.icon}></span>
            <span className={styles.text}>
                {isSending
                    ? "Processing"
                    : isSent
                        ? "Sent!"
                        : "Notify me"}</span>
        </button>
    )
}