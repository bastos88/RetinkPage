import styles from "./Footer.module.css"
import retinkLogo from "../assets/retinkLogo.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import pinterest from "../assets/pinterest.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
export function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div>
                        <a href="">
                            <img src={retinkLogo} />
                        </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>Product by Retink Media UG</p>
                        <span>Bonn, Germany</span>
                    </div>
                    <div>
                        <p>Get Early Acess</p>
                        <span>Provide Feedback</span>
                    </div>
                    <div className={styles.media}>
                        <p>Connect with Us</p>
                        <ul>
                            <li>
                                <img src={facebook}></img>
                            </li>
                            <li>
                                <img src={twitter}></img>
                            </li>
                            <li>
                                <img src={instagram}></img>
                            </li>
                            <li>
                                <img src={linkedin}></img>
                            </li>
                            <li>
                                <img src={youtube}></img>
                            </li>
                            <li>
                                <img src={pinterest}></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <footer>
                <div className={styles.footer}>
                    <div>
                        <p>Copyright © 2023 Retink</p>
                    </div>
                    <div className={styles.terms}>
                        <div>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}