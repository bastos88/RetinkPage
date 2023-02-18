import styles from "./Header.module.css";
import retinkLogo from "../assets/retinklogo.svg"
import avatarRetink from "../assets/avatar-retink.png"

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <a href="">
                    <img src={retinkLogo} />
                </a>
            </header>
            <div className={styles.retinkInfo}>
                <div>
                    <h1>Get Advanced AI <br />+ Expert Created
                        <span> Logos</span>
                    </h1>
                    <p>Boost your sales <span>10x faster </span> with content customized by our <br />
                        unique partnership of <span>human creativity and AI optimization</span>
                    </p>
                </div>
                <div>
                    <img src={avatarRetink} />
                </div>

            </div>
        </div>
    );
}