import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Explore my recent projects that showcase creativity and expertise in web development.
        </p>
        
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/udemy.png")} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Material-UI</span>
                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    Udemy-Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Himanshu9604/Udemy-Project"
                  >
                    Source
                  </a>
                  <a
                    className="ad-btn"
                    href="https://udemy-project-gilt.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/Twitter.png")} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Recoil</span>
                  <span className="card-detail-badge">Material-UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Twitter-Clone</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Himanshu9604/Twitter-Clone"
                  >
                    Source
                  </a>
                  <a
                    className="ad-btn"
                    href="https://twitter-clone-project.onrender.com/signin"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/Kanban.png")} alt="project3" />
                  
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span> 
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Recoil</span>
                  <span className="card-detail-badge">Material-UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Trello-Website</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Himanshu9604/Trello-Kanban-Board">
                    Source
                  </a>
                  <a className="ad-btn" href="https://kanban-board-5bvs.onrender.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/Google-Doc.png")} alt="project3" />
                  
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span> 
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Recoil</span>
                  <span className="card-detail-badge">Material-UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Google-Doc</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Himanshu9604/Google-Doc">
                    Source
                  </a>
                  <a className="ad-btn" href="https://googledocs-l385.onrender.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/shoppingcart.png")} alt="project3" />
                  
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span> 
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Redux-Toolkit</span>
                  <span className="card-detail-badge">Material-UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Shopping-Cart</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Himanshu9604/Shoping-Cart">
                    Source
                  </a>
                  <a className="ad-btn" href="https://shopping-cart-h8r7.onrender.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img src={require("../../assets/chat-application.jpg")} alt="project3" />
                  
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span> 
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">Node-JS</span>
                  <span className="card-detail-badge">Socket.io</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Chat-Application</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Himanshu9604/Chat-Appliction">
                    Source
                  </a>
                  <a className="ad-btn" href="https://chat-application-obxt.onrender.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
