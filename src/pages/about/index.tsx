import { useState, createContext, useContext, type ReactNode } from "react";
import styles from "./about.module.css";

import Link from "@docusaurus/Link";
import projectsData from "../../../static/json/projects.json";
import activitiesData from "../../../static/json/activities.json";
import Dialog from "@site/src/components/Dialog";
const ModalContext = createContext({
  open: (content) => {},
  close: () => {},
});
const projects = projectsData.projects;
const activities = activitiesData.activities;

function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    isOpen: false,
    dialogData: {},
  });

  function open(content) {
    setModal({ isOpen: true, dialogData: content });
  }
  function close(e) {
    // if (
    //   (e.target.nodeName === "DIV" &&
    //     e.target.className.includes("backdrop")) ||
    //   (e.target.nodeName === "BUTTON" &&
    //     e.target.className.includes("closeBtn"))
    // ) {
    setModal({ isOpen: false, dialogData: <></> });
    // }
  }
  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <Dialog
        isOpen={modal.isOpen}
        dialogData={modal.dialogData}
        close={close}
      />
    </ModalContext.Provider>
  );
}
function AboutContent() {
  const { open } = useContext(ModalContext);
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <Link to="/" className={styles.home_link}>
          <span>rowanna.</span>
        </Link>
        <main>
          <section className={styles.profile}>
            <div className={styles.profile_img}></div>
            <div className="profile_info_section">
              <h1>
                안녕하세요.
                <br />
                나원지입니다.
              </h1>
              <div className={styles.profile_info_link_wrap}>
                <a href="https://github.com/rowanna" target="_blank">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/wonji-na/" target="_blank">
                  LinkedIn
                </a>
                <Link to={"/series/intro"}>Blog</Link>
              </div>
              <div>
                <p>📧 Email : rowankimna@gmail.com</p>
                <p>☎️ phone : 010-8399-4972</p>
              </div>
            </div>
            <p>
              저는 3년 8개월차 프론트엔드 개발자 입니다.
              <br />
              UX 향상 개발에 관심이 많습니다.
            </p>
          </section>
          <section className="introduce_section">
            <h2>
              퍼블리싱부터 프론트엔드까지, 끊임없이 배우며 성장하고 있어요.
            </h2>
            <div className="introduce_text_wrap">
              <ul>
                <li>
                  퍼블리싱이 가능하며, <code>semantic</code> 태그를 이용해
                  마크업 하는 것을 선호합니다.
                </li>
                <li>
                  <code>CSS</code> 디자인과 애니메이션에 관심이 많습니다.
                </li>
                <li>
                  <code>jQuery</code>를 이용한 개발경험이 다수 있으며
                  성능최적화를 고려하여 개발합니다.
                </li>
              </ul>
            </div>
            <h2>저는 이런 사람이에요.</h2>
            <div className="introduce_text_wrap">
              <ul>
                <li>
                  기술 아티클 메일링 서비스를 이용하여 필요한 사항들에 대해
                  적용해보려 노력합니다.
                </li>
                <li>원리를 이해하는 것을 좋아합니다..</li>
                <li>
                  직장인으로서가 아닌 직업인으로서의 프론트엔드개발자를
                  지향합니다.{" "}
                </li>
                <li>
                  인사이트를 얻을 수 있는 컨퍼런스나 네트워킹을 좋아합니다.
                </li>
              </ul>
            </div>
          </section>
          <section className="projects_section">
            <h2>Projects</h2>
            <div className={styles.work_card_wrap}>
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={(e) => open(project)}
                  className={styles.work_card_item}
                >
                  <button>
                    <div
                      style={{
                        background: `url(${project.backgroundImgUrl}) no-repeat center/cover`,
                        width: "100%",
                        height: "300px",
                      }}
                    ></div>
                    <div className={styles.item_desc}>
                      <h3>{project.title}</h3>
                      <p>{project.short_desc}</p>
                      <p>{project.date}</p>
                      <div className={styles.tag_wrap}>
                        {project.tags.map((tag) => (
                          <span>{tag}</span>
                        ))}
                      </div>
                      <div className={styles.type}>
                        <span>{project.type}</span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="activities_section">
            <h2>Activities</h2>
            <div className={styles.work_card_wrap}>
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  onClick={(e) => open(activity)}
                  className={styles.work_card_item}
                >
                  <button>
                    <div
                      style={{
                        background: `url(${activity.backgroundImgUrl}) no-repeat center/cover`,
                        width: "100%",
                        height: "300px",
                      }}
                    ></div>
                    <div className={styles.item_desc}>
                      <h3>{activity.title}</h3>
                      <p>{activity.short_desc}</p>
                      <p>{activity.date}</p>
                      <div className={styles.tag_wrap}>
                        {activity.tags.map((tag) => (
                          <span>{tag}</span>
                        ))}
                      </div>
                      <div className={styles.type}>
                        <span>{activity.type}</span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default function About(): ReactNode {
  return (
    <ModalProvider>
      <AboutContent />
    </ModalProvider>
  );
}
