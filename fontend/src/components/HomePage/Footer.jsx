import React from 'react'
import styles from './footer.module.css';


const Footer = () => {




  return (
   <>
      <div id={styles.information} >
    <h2>Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</h2>
    <h3>We Bring Care to Health.</h3>
    <p>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</p>

    <h3>Tata 1mg: Your Favourite Online Pharmacy!</h3>
    <p>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines</p>
     <p>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</p>
    <p>In case you need assistance, just give us a call and we will help you complete your order.</p>
    <p>Don't want to go through the hassle of adding each medicine separately? You can simply upload your prescription and we will place your order for you. And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</p>
    <p>Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</p>

     <h3>The Feathers in Our Cap</h3>
    <p>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</p>

    <h3>The Services We Offer</h3>
    <p>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</p>
    <p>We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</p>
    <p>Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
    <p>We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
    <p>Visit our online medical store now, and avail online medicine purchase at a discount.</p>
    <p>Stay Healthy!</p>
</div>
<div  className={styles.topbar}>
   
    <div className={styles.tophead}>
    <h2 id={styles.nav_heading}>INDIA’S LARGEST HEALTHCARE PLATFORM</h2>
    </div>
    <div id={styles.box}>
        <div>   
    <div id={styles.box1}>
        160m+</div>
    <div id={styles.text}>Visitors</div>
</div>
      <div>
       <div id={styles.box1}>27m+</div>
      <div id={styles.text}>Orders Delivered</div>
  </div>

<div>
  <div id={styles.box1}>1800+</div>
     <div id={styles.text}>Cities</div>
  </div> 
</div>
</div>

{/* </div> */}

<div id={styles.box5}>
<div id={styles.box6}>
<p id={styles.getapp} >Get the link to download App</p>
</div>
<div id={styles.box7} >
    <form>
   <input type="tel" placeholder="Enter Phone Number" className={styles.text} maxlength="10" autocomplete="off" valuepattern="[6-9]\d{9}" required />
    <button type="submit" id={styles.butn} >Send Link</button>   
</form> 
</div>
</div> 
{/* 
  </div> */}
 {/* </div> */}

<div id={styles.container} >

<div id={styles.firstbox} >
    <div><h3>Know Us</h3><p id={styles.sub_info} >About Us { '\n' } Contact Us { '\n' } Press Coverage <br/> Careers <br/> Business Partnership <br/> Become a Health Partner</p> </div>
    <div> <h3> Our Policies</h3><p id={styles.sub_info} >  Privacy Policy <br/>Terms and Conditions <br/> Editorial Policy <br/>Return Policy <br/>IP Policy <br/>Grievance Redressal Policy </p> </div>
    <div> <h3> Our Services</h3> <p id={styles.sub_info} >Order Medicines <br/>Book Lab <br/>Consult a Doctor<br/>Ayurveda Articles<br/>Hindi Articles<br/>Care Plan </p> </div>
    
    <div id={styles.connect} style={{marginRight: "50px"}} >
    <h3>Connect</h3>
    <div>social link</div>
    <div id={styles.logo1} >
      
        <div id={styles.facbook} ><a href="https://www.facebook.com/1mgOfficial"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZQBmu1t3h201BgE_01xSSGDI8CeQEoXtIoK3iFqUjQ&usqp=CAU&ec=48600113" width="30" height="30px" alt="gvdrf" />
        </a></div>
       
        <div id={styles.twitter} ><a href="https://www.twitter.com/1mgOfficial"> <img src="data:image/png;base64,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" width="35px"  height="35px"alt="" /></a></div> 
        
         <div id={styles.youtube} ><a href="https://www.youtube.com/c/1mgofficial"><img src="data:image/png;base64,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" width="30px"  height="30px" alt="" /> </a></div> 
        
        <div id={styles.linkedin} ><a href="https://www.linkedin.com/company/1mg"><img src="data:image/png;base64,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"   width="30px"  height="30px" alt="" /></a></div>
     
        <div id={styles.medium} > <a href="https://medium.com/1mgofficial"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOGcEK_v9HvhqiIC76VE7YIwMc96_CA3XoOCNuHypzw&usqp=CAU&ec=48600113"  height="30px"   alt="" /></a></div>
    </div>
     <div>Want daily dose of health?</div>
    <div><button>Sign Up</button></div>
   </div>
    
     <div id={styles.app} > <h3> Download App</h3><a href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus">
        <div className={styles.logo2} ><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" width="160px" height="100px"   alt="" /> </div> </a></div>

    </div>
{/* </div> */}

<div className={styles.line} ></div>


<div id={styles.secondbox} >
<div className={styles.box1} > 
    <div className={styles.smallbox} style={{backgroundImage: "url(https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg) no-repeat"}} > <img  src='https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg' /> </div>
    <div className={styles.bigbox} ><h2> Reliable</h2>
     { '\n' } {"\n"}
      <p style={{color: "#767676",fontSize: "12px",lineHeight: "17px"}} > All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited </p> 
    </div>
</div>
<div className={styles.box1} >
    <div className={styles.smallbox}  ><img src='https://res.cloudinary.com/du8msdgbj/image/upload/v1571132500/reliable-rebrand_rcpof3.svg' />  </div>
    <div className={styles.bigbox} ><h2> Secure</h2> { '\n' } {"\n"}
      <p style={{color: "#767676",fontSize: "12px",lineHeight: "17px"}} > All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited </p> 
    </div>
</div>
<div className={styles.box1} >
    <div className={styles.smallbox} style={{backgroundImage: "url(https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg) no-repeat"}} > <img src='https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg' />  </div>
    <div className={styles.bigbox} ><h2> Affordable</h2>
      <p style={{color: "#767676",fontSize: "12px",lineHeight: "17px"}} > All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited </p> 
    </div>
</div>
</div>
<div className={styles.line} ></div>

<div id={styles.thirdbox} >
    <div className={styles.logo3} >
        <div className={styles.img1} ><a href="http://legitscript.com" target="_blank" title="Verify LegitScript Approval"><img src="https://static.legitscript.com/seals/729605.png" alt="LegitScript approved" width="130" height="90" /></a></div>
        <div className={styles.img2} ><img src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" width="110px" height="100px"alt="" /></div>
      
    </div>
    <div className={styles.dec} >
        <h3 id={styles.last_txt} >India's only LegitScript and ISO/IEC 27001 certified online healthcare platform</h3>
    </div>
</div>
{/* </div>  */}

<div className={styles.line1} style={{marginTop: "30px"}} ></div>
<div id={styles.forthbox} >
    
<h3 style={{textAlign:'left',marginLeft:'0' }} >Know More About Tata 1mg</h3>
<div><img src="	https://img.1mg.com/images/down-arrowRebrand.svg" wight="11px" height="9px"   alt="" /></div>
</div>
<div className={styles.line1} ></div>



<p id={styles.reserve} >© 2023 Tata 1mg. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.</p> `
</div>  
   
   </>

  )
}

export default Footer
