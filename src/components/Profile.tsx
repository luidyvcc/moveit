import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
