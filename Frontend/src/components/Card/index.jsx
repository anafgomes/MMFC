import styles from './Card.module.css'

function Card({children}){
    return(
        <div className={styles.container}>
            <span>
                <div className={styles.newsgrid}>
                    <div className={styles.newscard}>
                        {children}
                    </div>
                </div>
            </span>
        </div>
    )
}

export default Card