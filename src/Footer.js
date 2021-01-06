import React from 'react';
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__right">
                <div className="subline">
                    <span className="right">
                            CONTACT US
                    </span>
                    <div className="left">
                            <span className="line">
                                +212 612 345 678
                            </span>
                            <span className ="line">
                                admin@cadiexpress.com
                            </span>
                    </div>

                </div>
                <div className='subline'>
                    <span className="right">
                            SERVICES
                    </span>
                    <div className="left">
                        <span className="line">
                            Produits
                        </span>
                        <span className ="line">Packs</span>
                        <span className="line">Panier</span>
                        <span className="line">Actualités</span>
                    </div>
                </div>
                <div className="subline">
                    <span className="right">
                                INFORMATION
                    </span>
                    <div className="left">
                        <span className ="line">
                            Facebook
                        </span>
                        <span className="line">
                            Instagram
                         </span>
                        <span className="line">
                            Twitter
                        </span>
                    </div>
                    </div>
            </div>

            <div className="footer__left">
                <div >
                    <InstagramIcon fontSize="large" className="social__media"/>
                    
                    <TwitterIcon fontSize="large" className="social__media"/>
                    <FacebookIcon fontSize="large" className="social__media"/>
                </div>
                <span className="cadiExpresse">
                    © Caddi Express, 2020
                </span>
            </div>
            
        </div>
    )
}

export default Footer
