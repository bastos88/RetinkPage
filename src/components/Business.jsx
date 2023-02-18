import styles from "./Business.module.css"
import creative from "../assets/create.png"
import animated from "../assets/animated.png"
import blog from "../assets/blog.png"
import copywright from "../assets/copywright.png"
import socialmedia from "../assets/socialmedia.png"
import productvideo from "../assets/productvideo.png"
export function Business() {
    return (
        <div>
            <div>
                <div className={styles.info}>
                    <h2>Transform your Creation Process</h2>
                    <p>With a new approach to ordering content, you can now stop juggling multiple <br /> documents and meetings and start publishing content faster and on demand</p>
                </div>
                <div className={styles.info}>
                    <h2>Activate your business growth with RetinkContent.</h2>
                    <p>Save time and maintain your brand identity within your budget range or <br />sign up for affordable plans and still access multiple content services like:</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.produtositem}>
                    <img src={creative} />
                    <h2 className={styles.produtospaulista}>Logo</h2>
                    <p> Have a unique & creative logo <br />designed to express and <br />represent your brand identity.</p>
                </div>
                <div className={styles.produtositem}>
                    <img src={blog} />
                    <h2 className={styles.produtoscarioca}>Blog Writing</h2>
                    <p> Write SEO enriched blog posts as <br />long or short articles on any topic <br />of your choice .</p>
                </div>
                <div className={styles.produtositem}>
                    <img src={animated} />
                    <h2 className={styles.produtosmineiro}>Animated Videos</h2>
                    <p>Bring animated characters to life <br />to keep your viewers engaged <br />and  entertained.</p>
                </div>
            </div>
            <div>
                <div className={styles.container}>
                    <div className={styles.produtositem}>
                        <img src={productvideo} />
                        <h2 className={styles.produtospaulista}>Product Demo</h2>
                        <p>Introduce your product to <br /> potential customers in <br />a clear and creative video.</p>
                    </div>
                    <div className={styles.produtositem}>
                        <img src={copywright} />
                        <h2 className={styles.produtoscarioca}>Copywriting</h2>
                        <p>Have creative and compelling <br />copies written to boost your <br />product, brand, service or <br />company.</p>
                    </div>
                    <div className={styles.produtositem}>
                        <img src={socialmedia} />
                        <h2 className={styles.produtosmineiro}>Social Media Ads</h2>
                        <p>Boost sales and awareness with <br /> tailor made ads from experts.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}