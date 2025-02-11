import { useEffect, useRef, useState, type ReactNode } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./about.module.css";

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
    isOpen ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [isOpen, dialogData]);
  return (
    <>
      <dialog
        onClick={(e) => close(e)}
        className={styles.about_dialog}
        ref={dialogRef}
      >
        <div className="slide-container">
          {dialogData.slideImages?.length > 0 && (
            <Slide
              easing="ease"
              infinite={true}
              arrows={true}
              indicators={true}
            >
              {dialogData.slideImages?.map((slideImage, index) => (
                <div key={slideImage.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundSize: "cover",
                      height: "400px",
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  >
                    <span
                      style={{
                        padding: "20px",
                        background: "#efefef",
                        color: "#000000",
                      }}
                    >
                      {slideImage.caption}
                    </span>
                  </div>
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
    </>
  );
};

export default Dialog;
