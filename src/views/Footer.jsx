
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Telefono</h4>
            <ui className="list-unstyled">
              <li>604-204-0754</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h2>Talenta.</h2>
            <ui className="list-unstyled">
              
              <div className="facebook"> <a href="https://www.facebook.com/TalentaColombia" target="_blank"><i class="fa-brands fa-facebook"/> Facebook</a> </div> 
              <div className="instagram"> <a href="https://www.instagram.com/talentacolombia/" target="_blank"><i class="fa-brands fa-instagram"/> Instagram</a> </div>
              <a href="https://www.linkedin.com/company/talenta365/mycompany/" target="_blank"> <i class="fa-brands fa-linkedin"/> Linkedin </a>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Nuestras Marcas</h4>
            <ui className="list-unstyled">
                <a href="https://home.magneto365.com/magneto-para-las-empresas/" target="_blank"> <li>Magneto</li> </a>
                <a href="https://www.marbleheadhunter.com/" target="_blank"> <li>Marble Headhunter</li> </a>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Desing By TALENTA | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;