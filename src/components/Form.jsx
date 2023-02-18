import { Button } from "./Button"
import styles from "./Form.module.css"
export function Form() {
    return (
        <div>
            <div className={styles.formInfo}>
                <div>
                    <h2>Sign Up For The BETA to see more</h2>
                </div>
            </div>
            <div>
                <div className={styles.form}>
                    <form>
                        <input type="text" placeholder="Business Name" />
                        <input type="text" placeholder="Email" />
                    </form>
                </div>
                <div className={styles.content}>
                    <div>
                        <Button />
                        <a className={styles.signUpBtn}>Sign up as a freelancer partner</a>
                    </div>
                </div>
            </div>
        </div>
    )
}