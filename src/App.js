import React from 'react'
import PortfolioFixed from './components/portfolio-fixed.js';
import PortfolioContent from './components/portfolio-content.js';


class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
