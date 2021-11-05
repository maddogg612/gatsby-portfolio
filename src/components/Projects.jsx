import React from 'react';
import Pupperly from '../images/Project/pupperly.png'
import HateIt from '../images/Project/H-Ate-It.png'
import NTheLoop from '../images/Project/In the Loop with Drawer.png'
import Devaltio from '../images/Project/devaltio.png'
import After from '../images/Project/After.png'
import styled from 'styled-components';

//styling 
const ProjectImages = styled.img`
width: 25%;
height: 25%;
`


const Projects = () => {
  return (
    <div className="projectSection" id="projectSection">

      <div className="portfolio">
        <a href="devaltio" className="portfolio_item">
          <ProjectImages
            src={Devaltio}
            alt="devaltio-open-source-product"
            className="portfolio__img"
          />
        </a>
        <button>Source Code</button> <button>See Live</button>
      </div>

      <div className="portfolio">
        <a href="pupperly" className="portfolio_item">
          <ProjectImages
            src={Pupperly}
            alt="pupperly"
            className="portfolio__img"
          />
        </a>
        <button>Source Code</button> <button>See Live</button>
      </div>

      <div className="portfolio">
        <a href="intheloop" className="portfolio_item">
          <ProjectImages src={NTheLoop} alt="in-the-loop" className="portfolio__img" />
        </a>
        <button>Source Code</button>
      </div>

      <div className="portfolio">
        <a href="after" className="portfolio_item">
          <ProjectImages src={After} alt="after" className="portfolio__img" />
        </a>
        <button>Source Code</button>
      </div>

      <div className="portfolio">
        <a href="hateit" className="portfolio_item">
          <ProjectImages src={HateIt} alt="hate-it" className="portfolio__img" />
        </a>
        <button>Source Code</button>
      </div>
    </div>
  )
}

export default Projects;