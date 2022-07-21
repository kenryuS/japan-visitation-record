import logo from './logo.jpg';
import './App.css';
import {useEffect, useState} from "react";
import {NavLink, BrowserRouter as Router} from 'react-router-dom';

const content = require('./contents/home.json');
const components = {
  'titleEN':content.title[0],
  'titleJP':content.title[1],
  'infoEN':content.info[0],
  'infoJP':content.info[1],
  'sitenewsEN':content.news[0],
  'sitenewsJP':content.news[1]
};

function App() {
  
  const [sitetitle, setTitle] = useState(components.titleEN);
  const [siteinfo, setInfo] = useState(components.infoEN);
  const [sitenews, setNews] = useState(components.sitenewsEN);

  useEffect(() => {
    document.title = sitetitle;
  }, [sitetitle]);

  const translate = (e) => {
    if (e.target.checked === true) {
      setTitle(components.titleJP);
      setInfo(components.infoJP);
      setNews(components.sitenewsJP);
    } else {
      setTitle(components.titleEN);
      setInfo(components.infoEN);
      setNews(components.sitenewsEN);
    }
    
  };

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavLink to='/'><img src={logo} className="App-logo" alt="logo" /></NavLink>
        <div className="TransBox">
          <label>Read in Japanese/日本語で読む</label>
          <input type="checkbox" onChange={translate}/>
        </div>
      </header>
      <body>
        <h1 className='webTitle'>{sitetitle}</h1>
        <p className='info'>{siteinfo}</p>
        <p className='news'>{sitenews}</p>

      </body>
    </div>
    </Router>
  );
}

export default App;
