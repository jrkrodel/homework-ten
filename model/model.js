var homeContent = `<div class="home">
<div class="hero">
    <div class="hero-content">
        <h1>travel-fly</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</br> Fugiat aliquid minus nemo sed est.</p>
    </div>
    <div class="button">
        <p>READ MORE</p>
    </div>
</div>
<section class="promo-tours">
    <div class="promo-israel">
        <h1>ISRAEL</h1>
        
        <p>from $1000</p>
        <div class="button">
            <a id="tourIsrael" href="#">LEARN MORE</a>
        </div>
    </div> 
    <div class="promo-usa">
        <h1>U.S.A</h1>
        <p>from $1500</p>
        <div class="button">
            <a id="tourUsa" href="#">LEARN MORE</a>
        </div>
    </div> 
    <div class="promo-australia">
        <h1>AUSTRALIA</h1>
        <p>from $1800</p>
        <div class="button">
            <a id="tourAustralia" href="#">LEARN MORE</a>
        </div>
    </div>
</section>
<section class="booking-form">
    <div class="header">
        <h1>Booking Form</h1>
    </div>
        <div class="top-half">
            <input
            class="form-name"
            type="text"
            placeholder="name..."
            id="name"
            name="name"
            />
            <input
            class="form-email"
            type="text"
            placeholder="email..."
            id="email"
            name="email"
            />
        </div>
        <div class="bottom-half">
            <input
            class="form-country"
            type="text"
            placeholder="country..."
            id="country"
            name="country"
            />
            <input
            class="form-hotel"
            type="text"
            placeholder="hotel..."
            id="hotel"
            name="hotel"
            />
        </div>
        <div class="form-date">
            <label for="check-in">Check-in</label>
            <input
            class="check-in"
            type="date"
            id="check-in"
            name="check-in"
            />
        </div>
        <div class="form-date">
            <label for="check-out">Check-out</label>
            <input
            class="check-out"
            type="date"
            id="check-out"
            name="check-out"
            />
        </div>
        <div class="form-details">
            <label for="adults">Adults</label>
            <input
            class="adults"
            type="number"
            id="adults"
            name="adults"
            />
            <label for="children">Children</label>
            <input
            class="children"
            type="number"
            id="children"
            name="children"
            />
            <label for="rooms">Rooms</label>
            <input
            class="rooms"
            type="number"
            id="rooms"
            name="rooms"
            />
        </div>
        <div class="form-message">
                <textarea    class="message" name="message" placeholder="message..." id="message" type="text" cols="30" rows="10"></textarea>
                <input class="form-submit" type="submit" value="SUBMIT" />
        </div>
</section>
</div>`

var aboutContent = `      <div class="about">
<div class="about-top-section">
    <h1>ABOUT:</h1>
    <div class="line"></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
</div>
<div class="about-bottom-section">
    <h3>CLIENT QUOTES:</h3>
    <div class="line"></div>
    <div class="client">
        <div class="left-side"> 
            <div class="client-image client1"></div>
        </div>
            <div class="right-side">
                <div class="client-quote">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>                  
                        <div class="client-name">
                        - Miranda Brown
                        </div>
                    </div>
            </div>
        </div>
    <div class="client">
        <div class="left-side"> 
            <div class="client-image client2"></div>
        </div>
            <div class="right-side">
                <div class="client-quote">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                 
                        <div class="client-name">
                        Johnathan wes
                     </div>
                </div>
            </div>
     </div>
</div>
</div>`

var contactContent =   ` <div class="contact">
<h1>CONTACT US:</h1>
<div class="line"></div>
  <div class="contact-content">
  <div class="contact-map">
      <div class="contact-map-image"></div>
      <p>travel-fly Inc. </br>
        8901 Marmora Road, </br>
        Glasgow, D04 89GR. </br>
        Freephone:+1 800 559 6580 </br>
        Telephone:+1 800 603 6035 </br>
        FAX:+1 800 889 9898 </br>
        E-mail: mail@travelfly.org</p>
  </div>
  <div class="contact-form">
    <input
    class="contact-form-box"
    type="text"
    placeholder="Your Name..."
    id="name"
    name="name"
    />
    <input
    class="contact-form-box"
    type="text"
    placeholder="Email Address..."
    id="email"
    name="name"
    />
    <input
    class="contact-form-box"
    type="text"
    placeholder="Company..."
    id="company"
    name="name"
    />
    <textarea class="contact-message-box" name="message" placeholder="Message..." id="message" type="text" cols="30" rows="10"></textarea>
    <input class="contact-form-submit" type="submit" value="SEND MESSAGE" />
  </div>
</div>
</div>`

var blogContent = ` <div class="blog">
    <div class="blog-content">
        <h1>BLOG: </h1>
        <div class="line"></div>
        <div class="blog-post">
            <img src="images/img_date1.png" alt="date">
            <div class="blog-image"></div>
            <div class="blog-text">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="blue-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p>
            </div>
          </div>
            <div class="blog-post">
              <img src="images/img_date2.png" alt="date">
              <div class="blog-image"></div>
              <div class="blog-text">
                  <p>Sed et persipiatis unde omnis iste natus</p>
                  <p class="blue-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  </p>
              </div>
          </div>
      </div>
  </div>`

var toursContent = ` <div class="tour">
<header>
    <h1>TOURS:</h1>
</header>

<div class="tours">
    <div class="tourPromo israel">
        <h1>ISRAEL</h1>
        <h2>FROM $1000</h2>
        <span class="promoBtn">
            <a id="tourIsrael" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo usa">
        <h1>USA</h1>
        <h2>FROM $1500</h2>
        <span class="promoBtn">
            <a id="tourUsa" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo australia">
        <h1>Australia</h1>
        <h2>FROM $1800</h2>
        <span class="promoBtn">
            <a id="tourAustralia" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo newzealand">
        <h1>New Zealand</h1>
        <h2>FROM $1200</h2>
        <span class="promoBtn">
            <a id="tourNewzealand" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo france">
        <h1>France</h1>
        <h2>FROM $2500</h2>
        <span class="promoBtn">
            <a id="tourFrance" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo egypt">
        <h1>Egypt</h1>
        <h2>FROM $900</h2>
        <span class="promoBtn">
            <a id="tourEgypt" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo japan">
        <h1>Japan</h1>
        <h2>FROM $1300</h2>
        <span class="promoBtn">
            <a id="tourJapan" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo canada">
        <h1>Canada</h1>
        <h2>FROM $2000</h2>
        <span class="promoBtn">
            <a id="tourCanada" href="#">LEARN MORE</a>
        </span>
    </div>
    <div class="tourPromo uae">
        <h1>U.A.E</h1>
        <h2>FROM $3000</h2>
        <span class="promoBtn">
            <a id="tourUae" href="#">LEARN MORE</a>
        </span>
    </div>
</div>`

var specialOffersContent =  `   <div class="specialOffers">
<div class="specialOffers-content">
    <h1>SPECIAL OFFER(S):</h1>
    <div class="line"></div>
   <div class="special-offer">
       <div class="special-offer-image spain"></div>
       <div class="special-offer-text">
           <h1>BARCELONA, SPAIN</h1>
           <div class="special-offer-text-line"></div>
           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
           <span class="special-offer-button">
            <a href="#">LEARN MORE</a>
        </span>
        <h2>(20% off!)</h2>
       </div>
   </div>
   <div class="special-offer">
    <div class="special-offer-image thailand"></div>
    <div class="special-offer-text">
        <h1>BANGKOK, THAILAND</h1>
        <div class="special-offer-text-line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <span class="special-offer-button">
         <a href="#">LEARN MORE</a>
     </span>
     <h2>(10% off!)</h2>
    </div>
</div>
</div>
</div>`

var tourIsraelContent = `
<div class="tourIsrael">
    <header>
        <h1>Israel Tour Package</h1>
        <h2>STARTING FROM $1000 (prices may vary)</h2>
    </header>
    <div class="tour-preview">
        <div class="tour-image-holder tour-image-1"></div>
        <div class="tour-image-holder tour-image-2"></div>
        <div class="tour-image-holder tour-image-3"></div>
    </div>
    <div class="tour-info">
        <div class="tour-text">
            <h1>Day #1:</h1>
            <div class="line"></div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="tour-text">
            <h1>Day #2:</h1>
            <div class="line"></div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="tour-text">
            <h1>Day #3:</h1>
            <div class="line"></div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <span class="promoBtn">BOOK NOW</span>
    </div>
</div>`

var tourUsaContent = ` <div class="tourUsa">
<header>
    <h1>U.S.A Tour Package</h1>
    <h2>STARTING FROM $1500 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourAustraliaContent = `   <div class="tourAustralia">
<header>
    <h1>Australia Tour Package</h1>
    <h2>STARTING FROM $1800 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourCanadaContent = `<div class="tourCanada">
<header>
    <h1>Canada Tour Package</h1>
    <h2>STARTING FROM $2000 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourEgyptContent = `    <div class="tourEgypt">
<header>
    <h1>Egypt Tour Package</h1>
    <h2>STARTING FROM $800 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourFranceContent = `   <div class="tourFrance">
<header>
    <h1>France Tour Package</h1>
    <h2>STARTING FROM $2500 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourJapanContent = `  <div class="tourJapan">
<header>
    <h1>Japan Tour Package</h1>
    <h2>STARTING FROM $1300 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourNewzealandContent = `   <div class="tourNewzealand">
<header>
    <h1>New Zealand Tour Package</h1>
    <h2>STARTING FROM $1200 (prices may vary)</h2>
</header>
<div class="tour-preview">
    <div class="tour-image-holder tour-image-1"></div>
    <div class="tour-image-holder tour-image-2"></div>
    <div class="tour-image-holder tour-image-3"></div>
</div>
<div class="tour-info">
    <div class="tour-text">
        <h1>Day #1:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #2:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="tour-text">
        <h1>Day #3:</h1>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <span class="promoBtn">BOOK NOW</span>
</div>
</div>`

var tourUaeContent = `    <div class="tourUae">
        <header>
            <h1>U.A.E Tour Package</h1>
            <h2>STARTING FROM $3000 (prices may vary)</h2>
        </header>
        <div class="tour-preview">
            <div class="tour-image-holder tour-image-1"></div>
            <div class="tour-image-holder tour-image-2"></div>
            <div class="tour-image-holder tour-image-3"></div>
        </div>
        <div class="tour-info">
            <div class="tour-text">
                <h1>Day #1:</h1>
                <div class="line"></div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="tour-text">
                <h1>Day #2:</h1>
                <div class="line"></div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="tour-text">
                <h1>Day #3:</h1>
                <div class="line"></div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <span class="promoBtn">BOOK NOW</span>
        </div>
    </div>`

export function getPageContent(pageId, callback) {
    $("#app").html(eval(pageId))
    if(callback) {
        callback()
    }
};

export function removeBlackNav() {
    $(".black-nav").removeClass("black-nav").addClass("white-nav")
    $(".blacklogo").removeClass("blacklogo").addClass("white-logo")
    $(".links").removeClass("black-links")
    $(".dropdown-black").removeClass("dropdown-black").addClass("dropdown")
}

export function removeWhiteNav() {
    $(".white-nav").removeClass("white-nav").addClass("black-nav")
    $(".white-logo").removeClass("white-logo").addClass("blacklogo")
    $(".links").addClass("black-links")
    $(".dropdown").removeClass("dropdown").addClass("dropdown-black")
}

export function addPromoListeners(){
    $(".promo-tours .button a").click(function(event){
     let btnId = this.id
     let contentId = btnId + "Content"
     $(".white-nav").removeClass("white-nav").addClass("black-nav")
     $(".white-logo").removeClass("white-logo").addClass("blacklogo")
     $(".links").addClass("black-links")
     $(".dropdown").removeClass("dropdown").addClass("dropdown-black")
     getPageContent(contentId, addPromoListeners)
         });
 }
 
 export function addTourListeners(){
     $(".tour .tours .tourPromo .promoBtn a").click(function(event){
      let btnId = this.id
      let contentId = btnId + "Content"
      $(".white-nav").removeClass("white-nav").addClass("black-nav")
      $(".white-logo").removeClass("white-logo").addClass("blacklogo")
      $(".links").addClass("black-links")
      $(".dropdown").removeClass("dropdown").addClass("dropdown-black")
      getPageContent(contentId, addTourListeners)
          });
  }