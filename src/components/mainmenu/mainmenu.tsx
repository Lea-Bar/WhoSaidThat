import styles from "./mainmenu.module.css";

export default function MainMenu(){
    return (
        <div className={styles.menuContainer}>
            <div className={styles.codeContainer}>
                <input type="text" id="code" placeholder="Code" className={styles.code} maxLength={6}></input>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.menuButton+" "+styles.joinButton}>Join</button>
                <button className={styles.menuButton+" "+styles.createButton}>Create</button>
            </div>
        </div>
    )
}