import '../styles/global.css'
import { ChallengesPrivider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {  
  return (
    <ChallengesPrivider>
      <Component {...pageProps} />
    </ChallengesPrivider>
  );
}

export default MyApp
