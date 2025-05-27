import React from 'react';
import styles from './home.module.scss';

const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Pokédex Online</h1>
        <p className={styles.subtitle}>Explore the world of Pokémon like never before.</p>
      </header>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Features of the site:</h2>
        <ul className={styles.featuresList}>
          <li><strong>Complete Pokémon List</strong>: Access to all Pokémon from different generations.</li>
          <li><strong>Detailed Information</strong>: Stats, types, evolutions, abilities, and other important details for each Pokémon.</li>
          <li><strong>Filters and Search</strong>: Easily find Pokémon based on various parameters, such as type, evolution, level, and more.</li>
          <li><strong>Ability to Add Pokémon to "Collection"</strong>: Participate in exciting hunts and keep track of your favorite Pokémon in your personal collection.</li>
        </ul>
      </section>

      <section className={styles.conclusionSection}>
        <p className={styles.conclusion}>
          This site is the perfect tool for both new trainers and experienced Pokémon masters who want to improve their knowledge and become true Pokédex experts.
        </p>
      </section>
    </div>
  );
};

export default HomeComponent;

