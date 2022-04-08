import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User interface!"
        description="Experience the NFT universe to the FULLEST"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Buy, store, collect NFTs, exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="A new way to create your Web-Store"
        description="Experience the NFT universe to the FULLEST"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">AAA AAAA</span>
        </p>
      </div>
    </>
  );
}

export default App;
