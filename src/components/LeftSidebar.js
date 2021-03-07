import React, { useState } from "react";
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";

const tags = [
  "react",
  "graphql",
  "nodejs",
  "sass",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "sql",
  "ubuntu",
  "aws",
];

const LeftSidebar = (props) => {
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            <li>
              <a href="/home">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li>
            <li>
              <a href="/reading">
                <i>
                  <FcReading />
                </i>
                Reading List
              </a>
            </li>
            <li>
              <a href="/list">
                <i>
                  <FcTodoList />
                </i>
                list
              </a>
            </li>
            <li>
              <a href="/podcast">
                <i>
                  <AiFillAudio />
                </i>
                Podcasts
              </a>
            </li>
            <li>
              <a href="/videos">
                <i>
                  <FcVideoCall />
                </i>
                Videos
              </a>
            </li>

            <li>
              <a href="/tags">
                <i>
                  <FaTags />
                </i>
                Tags
              </a>
            </li>

            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <a href="/#" onClick={toggle}>
                More...
              </a>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li>
                <a href="/code">
                  <i>
                    <FcAbout />
                  </i>
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="/FAQ">
                  <i>
                    <FcIdea />
                  </i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/DEV">
                  <i>
                    <FcShop />
                  </i>
                  DEV Shop
                </a>
              </li>
              <li>
                <a href="/sponsers">
                  <i>
                    <FcLike />
                  </i>
                  Sponsers
                </a>
              </li>
              <li>
                <a href="/about">
                  <i>
                    <FaDev />
                  </i>
                  About
                </a>
              </li>
              <li>
                <a href="/privacy">
                  <i>
                    <FcBriefcase />
                  </i>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms">
                  <i>
                    <FcDisclaimer />
                  </i>
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <a href="/twitter">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a href="/facebook">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="/github">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="/instagram">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a href="/twitch">
            <i>
              <RiTwitchLine />
            </i>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={() => props.closeMenu()}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              <nav className="leftBar__menu">
                <ul>
                  <li>
                    <a href="/home">
                      <i>
                        <FcHome />
                      </i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/reading">
                      <i>
                        <FcReading />
                      </i>
                      Reading List
                    </a>
                  </li>
                  <li>
                    <a href="/list">
                      <i>
                        <FcTodoList />
                      </i>
                      list
                    </a>
                  </li>
                  <li>
                    <a href="/podcast">
                      <i>
                        <AiFillAudio />
                      </i>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="/videos">
                      <i>
                        <FcVideoCall />
                      </i>
                      Videos
                    </a>
                  </li>

                  <li>
                    <a href="/tags">
                      <i>
                        <FaTags />
                      </i>
                      Tags
                    </a>
                  </li>

                  <li className={more ? "more hidden" : "more"}>
                    <i></i>
                    <a href="/#" onClick={toggle}>
                      More...
                    </a>
                  </li>

                  <div className={more ? "list" : "list hidden"}>
                    <li>
                      <a href="/code">
                        <i>
                          <FcAbout />
                        </i>
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="/FAQ">
                        <i>
                          <FcIdea />
                        </i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/DEV">
                        <i>
                          <FcShop />
                        </i>
                        DEV Shop
                      </a>
                    </li>
                    <li>
                      <a href="/sponsers">
                        <i>
                          <FcLike />
                        </i>
                        Sponsers
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <i>
                          <FaDev />
                        </i>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/privacy">
                        <i>
                          <FcBriefcase />
                        </i>
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a href="/terms">
                        <i>
                          <FcDisclaimer />
                        </i>
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <i>
                          <FcBusinessContact />
                        </i>
                        Contact
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
              <div
                className={more ? "leftBar__social" : "leftBar__social hidden"}
              >
                <a href="/twitter">
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a href="/facebook">
                  <i>
                    <IoLogoFacebook />
                  </i>
                </a>
                <a href="/github">
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a href="/instagram">
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
                <a href="/twitch">
                  <i>
                    <RiTwitchLine />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
