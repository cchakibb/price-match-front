import React from "react";
import Header from '../components/Header';

const Home = (props) => {
  return (
      <div>
     <Header />


      <section  className="article">
      <div className="zone-text">
      <h2>EMPOWERING YOUR BUSINESS</h2>
       <p> Pourquoi l'utiliser?
        On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions,
         et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. 
         Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard.
          De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' 
          vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps,
         parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
        </div>
        <div className="div_photo"><img src="/image/ecrou.png" alt="hotel" /></div> 


      </section>
      <h2>OUR OBJECTIF</h2>
      <hr className="new1" />
      <section className="zone-icon">

      <div className="card">
      <div>

    <img src='/image/chart-test.png' alt="Avatar" ></img>
      </div>
    <div classname="container">
      <h4><b>add your competitor</b></h4>
      <p>Engineer</p>
    </div>
    </div>
    
    <div className="card">
    <div>

    <img src='/image/chart-test2.png' alt="Avatar"  />
    </div>
    <div classname="container">
      <h4><b>Welcome more people</b></h4>
      <p>With us your will be able to know and match the price with your competitor</p>
     
    </div>
    </div>

    <div className="card">
    <div>

    <img src="/image/chart-test3.png" alt="Avatar"  />
    </div>
    <div classname="container">
      <h4><b>Know more about your competitor</b></h4>
      <p>You can now know more about your competitor</p>
    </div>
    </div>

    <div className="card">
    <div>

    <img src="/image/chart-test4.png" alt="Avatar"  />
    </div>
    <div classname="container">
      <h4><b>Match with the market</b></h4>
      <p>With us your will be able to know and match the price with your competitor</p>
    </div>
    </div>
    

      </section>
      

      <h2>WE HELP YOU TO DEVELOPPE YOUR BUSINESS</h2>
      <hr className="new1" />
      <section className="zone-iconing">
        <div className="iconing">
        <h3>Developpez vos besoin</h3>
        <img src="/image/human-orange.png" alt="icon" />
        <p>pour vous aidez a developer vos revenue</p>
        </div>

        <div className="iconing">
        <h3>Developpez vos besoin</h3>
        <img src="/image/human-orange3.png" alt="icon" />
        <p>pour vous aidez a developer vos revenue</p>
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
        <h3>Developpez vos besoin</h3>
        <img src="/image/human-orange2.png" alt="icon" />
        <p>pour vous aidez a developer vos revenue</p>
        </div>

        <div className="iconing">
        <h3>Developpez vos besoin</h3>
        <img src="/image/chart-orange.png" alt="icon" />
        <p>pour vous aidez a developer vos revenue</p>
        </div>
        
     
        

      </section>
      <h2>THEY CHOOSE US </h2>
      <hr className="new1"/>
      <section className="hotel">
        <div>
        <img src='/image/RBH.png' alt="hotel" />
        </div>
        <div>
        <img src='/image/icon-wyndham.png' alt="hotel" />
        </div>
        <div>
        <img src='/image/radison.png' alt="hotel" />
        </div>
        <div>
        <img src='/image/icon-HG.png' alt="hotel" />
        </div>
        <div>
        <img src='/image/RBH.png' alt="hotel" />
        </div>
        <div>
        <img src='/image/radison.png' alt="hotel" />
        </div>
      </section>
    
      

        </div>
  );
};

export default Home;
