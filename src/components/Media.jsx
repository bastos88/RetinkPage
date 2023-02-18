import styles from "./Media.module.css"

export function Media() {
    return (
        <div>
            <div className={styles.retinkMedia}>
                <h1>
                    Explainer Video
                </h1>

            </div>
            <div className={styles.retinkMedia}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qI0FdWXNHkg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
            </div>
        </div>
    )
}