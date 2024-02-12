import styles from '../../style';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
    </div>
  )
}

export default Home