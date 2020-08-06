import React from "react";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <div>
      <Header />

      <section className="article">
        <div className="zone-text">
          <h2>Empowering smarter revenue and distribution decisions</h2>
          <p>
            Providing the most complete and user-friendly revenue and distribution management tech stack to hotel partners. Powered with real-time historical, current and future-looking datasets to
            drive business growth.
          </p>
        </div>
        <div className="div_photo">
          <img src="/image/ecrou.png" alt="hotel" />
        </div>
      </section>
      <h2>OUR GOAL</h2>
      <hr className="new1" />
      <section className="zone-icon">
        <div className="card">
          <div>
            <img src="/image/chart-test.png" alt="Avatar"></img>
          </div>
          <div className="container">
            <h4>
              <b>ADD YOUR COMPETITOR</b>
            </h4>
            <p>With price match you can easily add competitor</p>
          </div>
        </div>

        <div className="card">
          <div>
            <img src="/image/chart-test2.png" alt="Avatar" />
          </div>
          <div className="container">
            <h4>
              <b>WELCOME MORE PEOPLE</b>
            </h4>
            <p>Be at the good price every night to attract more potential costumers</p>
          </div>
        </div>

        <div className="card">
          <div>
            <img src="/image/chart-test3.png" alt="Avatar" />
          </div>
          <div className="container">
            <h4>
              <b>KNOW MORE ABOUT YOUR COMPETITOR</b>
            </h4>
            <p>You can now know more about your competitor their price their rooms</p>
          </div>
        </div>

        <div className="card">
          <div>
            <img src="/image/chart-test4.png" alt="Avatar" />
          </div>
          <div className="container">
            <h4>
              <b>MATCH WITH YOUR MARKET</b>
            </h4>
            <p>With us your will be able to know and match the price with your competitor</p>
          </div>
        </div>
      </section>

      <h2>WE HELP YOU TO DEVELOPPE YOUR BUSINESS</h2>
      <hr className="new1" />
      <section className="zone-iconing">
        <div className="iconing">
          <h3>Market </h3>
          <img src="/image/human-orange.png" alt="icon" />
          <p>Market intelligence solution that captures hotel booking intent in real-time to uncover new revenue opportunities</p>
        </div>

        <div className="iconing">
          <h3>Rate </h3>
          <img src="/image/human-orange2.png" alt="icon" />
          <p> Is an easy-to-use platform that gives access to all relevant factors impacting demand for your hotel rooms</p>
        </div>
        {/*       
        <div className="iconing">
        <h3>Devellopez vos besoin</h3>
        <img src="/image/humans2.png" alt="icon" />
        <p>pour vous aidez a develloper vos revenue</p>
        </div>
        <div className="iconing">
        <h3>Devellopez vos besoin</h3>
        <img src="/image/humans3.png" alt="icon" />
        <p>pour vous aidez a develloper vos revenue</p>
        </div> */}
      </section>

      <section className="zone-iconing">
        <div className="iconing">
          <h3>Parity </h3>
          <img src="/image/human-orange3.png" alt="icon" />
          <p>The business intelligence platform that unlocks the potential of your PMS data</p>
        </div>

        <div className="iconing">
          <h3>Revenue Potential</h3>
          <img src="/image/chart-orange.png" alt="icon" />
          <p>The end-to-end solution for hotel groups and chains to discover and solve parity issues across their portfolio</p>
        </div>
      </section>
      <h2>THEY CHOSE US </h2>
      <hr className="new1" />
      <section className="hotel">
        <div>
          <img src="/image/RBH.png" alt="hotel" />
        </div>
        <div>
          <img src="/image/icon-wyndham.png" alt="hotel" />
        </div>
        <div>
          <img src="/image/radison.png" alt="hotel" />
        </div>
        <div>
          <img src="/image/icon-HG.png" alt="hotel" />
        </div>
        <div>
          <img src="/image/RBH.png" alt="hotel" />
        </div>
        <div>
          <img src="/image/radison.png" alt="hotel" />
        </div>
      </section>
    </div>
  );
};

export default Home;
