import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import Footer from './components/Footer';

import styles from './App.module.css';

let App = () => {

  return(
    <div className={styles.container}>
      <Header />
      <Navigation />
      <Section />
      <Footer />
    </div>
  )
}

export default App;
