import LinkedinIcon from './images/in-icon.png';
import headshot from './images/headshot.jpg';
import bio from './images/placeholder.jpg';
import gitIcon from './images/gh-icon.png';
import projectIcon1 from './images/thumbnail1.png';
import projectIcon2 from './images/thumbnail2.png';
import projectIcon3 from './images/thumbnail3.png';
import './App.css';

function App() {
  return (
<div>
  <title>
    {' '}Rachel OConnell
  </title>
  <link
    crossOrigin="anonymous"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    rel="stylesheet"
  />
  <link
    href="styles.css"
    rel="stylesheet"
  />
  <div className="body">

    <div className="LI-LinkContainer">
      <div className="image-frame ">
        <a href="www.linkedin.com/in/racheloco">
          <img
          className="LinkedinLinkImage"
          src={LinkedinIcon} />
        </a>
      </div>
    </div>

    <div className="headshotContainer">
      <div className="roundedImage-frame">
        <img
        className="headshotImage"
        src={headshot} />
      </div>
    </div>

    <div className="bioContainer">
      <div className="image-frame">
        <img
        className="bioImage"
        src={bio} />
      </div>
    </div>

    <div className="skillList-container">
      <div className="skillList-frame">
        <h5 className="skillList">
          <em> Coding Languages: HTML, CSS, JavaScript, ReactJS, Node.js, Git, bootstrap
            </em>
        </h5>
      </div>
    </div>

    <div className="titleContainer">
      <div className="title">
        <p className="name"> Rachel OConnell
          </p>
      </div>
    </div>

    <div className="project1-container">
      <p className="linkName"> Fur-covered Home
        </p>
      <div className="image-frame">
        <a href="https://linage-of-westeros.netlify.app/">
            <img
            className="thumbnail1"
            src={projectIcon1} />
          </a>
      </div>
    </div>

    <div className="GH-LinkContainer">     
      <div className="roundedImage-frame">
        <a href="www.github.com/rach0c0">
          <img
          className="gitHubLinkImage"
          src={gitIcon} />
        </a>
      </div>
    </div>

    <div className="project2-container">    
      <p className="linkName"> Louisville Vegan
          </p>
      <div className="roundedImage-frame">
        <a href="https://fur-covered-home.netlify.app/">
          <img
          className="thumbnail2"
          src={projectIcon2} />
        </a>
      </div>
    </div> 

    <div className="project3-container">    
     <p className="linkName"> Lineage of Westeros
          </p>
      <div className="image-frame">
        <a href="https://louisville-vegan.netlify.app/">
          <img
          className="thumbnail3"
          src={projectIcon3} />
          </a>
      </div>
    </div>

  </div>
  
  <script
    crossOrigin="anonymous"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  />
</div>
  );
}

export default App;
