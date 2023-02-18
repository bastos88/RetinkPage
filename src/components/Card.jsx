import styles from "./Card.module.css";
import publish from "../assets/Vectorpublish.svg"
import brain from "../assets/brain.svg"
import brand from "../assets/brand.svg"
import customer from "../assets/customer.svg"
import Vector from "../assets/Vector.svg"

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.retinkCard}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <img src={brain} />
                            <h3>MakeAI-assisted Content Choices</h3>
                            <p>Access and Order from an extensive catalogue in any language and on your budgets terms. If unsure, our AI guides you to the best.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.retinkCard}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <img src={brand} />
                            <h3>Upload and Maintain your Brand Identity</h3>
                            <p>Add your preferences and brand assets to ensure the contents is consistent with your brand identity. We can make for you!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.retinkCard}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <img src={Vector} />
                            <h3>Be informed as we <br /> create</h3>
                            <p>Your details are translated <br /> and sent to the AI, FP, or both <br />(per your choice) as you relax and receive continuous updates.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.retinkCard}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <img src={customer} />
                            <h3>Receive <br /> and Review</h3>
                            <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.retinkCard}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <img src={publish} />
                            <h3>Publish and Monitor your contents progress</h3>
                            <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}