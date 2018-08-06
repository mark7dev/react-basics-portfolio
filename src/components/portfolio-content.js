import React from 'react';
import Header from './header.js';
import Summary from './summary.js';
import ContactInfo from './contactinfo.js';

class PortfolioContent extends React.Component {
    render () {
        return (
            <div className="portfolio-content">
                <Header />
                <Summary />
                <ContactInfo />
            </div>
        )
    }
}



export default PortfolioContent;