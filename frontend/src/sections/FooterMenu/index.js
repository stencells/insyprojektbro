import * as React from "react"
import * as styles from "./style.module.scss"
import PeopleIcon from "../../images/user.png"
import HouseIcon from "../../images/home.png"
import CategoryIcon from "../../images/category.png"

const FooterMenu = () => {
  return (
    <div className={styles.wrapper}>
        <div className={`${styles.item} ${styles.people}`}>
        <img src={PeopleIcon} alt="Kunden / Mitarbeiter"/>
        </div>
        <div className={`${styles.item} ${styles.house}`}>
            <img src={HouseIcon} alt="Standorte" />
        </div>
        <div className={`${styles.item} ${styles.category}`}>
            <img src={CategoryIcon} alt="Kategorien" />
        </div>
    </div>
  )
}

export default FooterMenu
