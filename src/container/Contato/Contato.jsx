import React from "react";
import {
  FaGithubSquare,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { AppWrap, MotionWrap } from "../../wrapper";
import { FcBusinessContact, FcAddressBook, FcManager } from "react-icons/fc";
import "./contato.scss";

function Contato () {
  return (
      
        <div className="container">
          <div className="ola">
           
          </div>
          <div className="card-contato">
            <ul>
              <li>
                <i className="icone-contato">
                  <FcBusinessContact />
                  <span> (89) 99453-2058</span>
                </i>
              </li>
              <li>
                <i className="icone-contato">
                  <FcAddressBook />
                  <span className="email"> rob.robervan@hotmail.com</span>
                </i>
              </li>
            </ul>
          </div>
          <div className="card-nome">
            <div className="card-nome-icon">
              {" "}
              <FcManager />{" "}
            </div>
            <h3> Robervan Souza</h3>
          </div>
          <div className="card-link">
            <ul>
              <li>
                <i>
                  <FaGithubSquare />
                </i>
              </li>
              <li>
                <i>
                  <FaWhatsapp />
                </i>
              </li>
              <li>
                <i>
                  <FaYoutube />
                </i>
              </li>
              <li>
                <i>
                  <FaLinkedin />
                </i>
              </li>
            </ul>
          </div>
        </div>
      
      
   
  );
};

export default AppWrap(
  MotionWrap(Contato, "app__footer"),
  "contato",
  "app__whitebg"
);