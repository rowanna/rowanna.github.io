import { useEffect, useRef, useState, type ReactNode } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./styles.module.css";
import mediumZoom from "medium-zoom";

type DialogProps = {
  isOpen: boolean;
  dialogData: {
    id: number;
    title: string;
    short_desc: string;
    date: string;
    tags: string[];
    type: string;
    long_desc: string;
    url: string;
    slideImages: Array<{ id: number; url: string; caption: string }>;
  };
  close: Function;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, dialogData, close }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const backdrop = document.getElementById("backdrop");
    if (isOpen) {
      dialogRef.current.show();

      backdrop.style.display = "block";
    } else {
      dialogRef.current.close();
      backdrop.style.display = "none";
    }

    if (document) {
      const zoom = mediumZoom(document.querySelectorAll("img"), {
        margin: 24, // 이미지 확대 시 주변 여백
      });

      return () => {
        zoom.detach(); // 컴포넌트 해제 시 줌 효과 제거
      };
    }
    // 블로그 포스트 로드 후 이미지에 줌 효과 추가
  }, [isOpen, dialogData]);
  return (
    <>
      <dialog className={styles.about_dialog} ref={dialogRef}>
        <div className="slide-container">
          {dialogData?.slideImages?.length > 0 && (
            <Slide
              easing="ease"
              canSwipe={false}
              infinite={dialogData?.slideImages?.length === 1 ? false : true}
              arrows={dialogData?.slideImages?.length === 1 ? false : true}
              indicators={dialogData?.slideImages?.length === 1 ? false : true}
            >
              {dialogData?.slideImages?.map((slideImage, index) => (
                <div
                  style={{
                    position: "relative",
                  }}
                  key={slideImage.id}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      height: "400px",
                    }}
                  >
                    <img className={styles.dialogImg} src={slideImage.url} />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      zIndex: 4,
                      background: "#efefef",
                      color: "#000000",
                    }}
                  >
                    {slideImage.caption}
                  </span>
                </div>
              ))}
            </Slide>
          )}
        </div>
        <div className={styles.dialog_item_desc}>
          <h1>{dialogData.title}</h1>
          <p>{dialogData.short_desc}</p>
          <p>{dialogData.long_desc}</p>
          <p>{dialogData.date}</p>
          <div className={styles.tag_wrap}>
            {dialogData?.tags?.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
          <div className={styles.type}>
            <span>{dialogData.type}</span>
          </div>
        </div>
        <button className={styles.closeBtn} onClick={(e) => close(e)}>
          Close
        </button>
      </dialog>
      <div
        id="backdrop"
        className={styles.backdrop}
        style={{ display: "none" }}
      ></div>
    </>
  );
};

export default Dialog;
