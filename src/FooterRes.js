import React from 'react';
import "./FooterRes.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
function Footer() {
    const theme = createMuiTheme({
       
        '@media (min-width:768px)': {
            fontSize: 'Small',
          },
        
      });
    return (
        <div className='footerRes'>
            <div className="footer__right__res">
                <div className="subline__res">
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
                <div className='subline__res'>
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
               
            </div>

            <div className="footer__left__res">
            
                <div >
                <ThemeProvider theme={theme}>
                    <InstagramIcon  className="social__media"/>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>

                    <TwitterIcon  className="social__media"/>
                    </ThemeProvider>
                <ThemeProvider theme={theme}>

                    <FacebookIcon  className="social__media"/>
                    </ThemeProvider>

                </div>

                <span className="cadiExpresse">
                    © Caddi Express, 2020
                </span>
            </div>
            
        </div>
    )
}

export default Footer
