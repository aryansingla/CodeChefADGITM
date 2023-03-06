import React from 'react'
import heroBg from '../../../public/heroBg.png';
import Image from 'next/image';
import styles from "../../styles/Hero.module.css";
import pastSponsorBg from '../../../public/pastSponsorBg.png';

const HeroSection = () => {
  return (  
    <>
    <div className={styles.heromain}>
      <div className={styles.heroleft}>
        <div className={styles.herolefttext1}>Take a look at the <br/> logic in way</div>
        <div className={styles.herolefttext2}>What we Do</div>
        <div className={styles.herolefttext3}>As a CODECHEF ADGITM we believe in growing together</div>
        <button className={styles.heroleftbutton}>Get Started</button>
      </div>
      <div className={styles.heroright}>
        {/* <img src={heroBg} alt="" /> */}
        <Image
      src="/herobg2.png "
      alt="Picture of the author"
      width={800}
      height={800}
    />
      </div>
    </div>
  
    <div className={styles.pastSponsorBg} >
     <Image
      src="/pastSponsorBg.png"
      alt="Past Sponsors"
      width={500}
      height={500}
      className={styles.pastSponsorBgImage}
    /> 
    <p className={styles.pastSponsorText}>OUR PAST SPONSORS</p>
    </div>
   
   <div className={styles.detailsPart1}>
    <div className={styles.part1left}>
    <Image
    src="/wework.webp"
    alt="How we work"
    width={450}
    height={450}
    className={styles.detailsImage}/>
    </div>
    <div className={styles.part1right}>
      <div className={styles.heading} >
      How we work ?
      </div>
      <div className={styles.text}>
      Codechef ADGITM chapter organises regular contests , hackathons , weekly and monthly meets , sessions with mentors and seniors , all to bring out the best in us and motivate us to aspire high in the future.
      </div>
    </div>
   </div>



   <div className={styles.detailsPart2}>
   <div className={styles.part2left}>
      <div className={styles.heading} >
      Our Goal
      </div>
      <div className={styles.text}>
      Our goal is to ensure that students love and explore with programming while getting lucrative jobs in the process.
      </div>
    </div>
    <div className={styles.part2right}>
    <Image
    src="/goal.webp"
    alt="Our Goal"
    width={450}
    height={450}
    className={styles.detailsImage2}/>
    </div>
   
   </div>



   



   <div className={styles.detailsPart3}>
    <div className={styles.part3left}>
    <Image
    src="/joinus.webp"
    alt="How we work"
    width={450}
    height={450}
    className={styles.detailsImage}/>
    </div>
    <div className={styles.part3right}>
      <div className={styles.heading} >
      Why Should you Join Us?
      </div>
      <div className={styles.text}>
      You learn many things, like how to work with a team, how to manage the schedule along with your studies. Also, when you have an event, you have to manage finances, sponsorships, everything. So you learn how to talk to people, approach companies, how to talk to guests, how to deal with your college management [ laugh at the last one.
      </div>
    </div>
   </div>
    </>
  )
}

export default HeroSection