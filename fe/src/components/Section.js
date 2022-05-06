import {Route, Routes} from 'react-router-dom'

import Home from './Home'

import styles from "./Section.module.css"

let Section = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Section