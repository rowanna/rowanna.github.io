import { type ReactNode, useRef, useEffect } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function createLoopingText(el) {
  const lerp = (current, target, factor) =>
    current * (1 - factor) + target * factor;

  const state = {
    el,
    lerp: {
      current: 0,
      target: 0,
    },
    interpolationFactor: 0.1,
    speed: 0.1,
    direction: -1,
  };

  state.el.style.cssText =
    "position: relative; display: inline-flex; white-space: nowrap;";
  state.el.children[1].style.cssText = `position: absolute; left: ${
    100 * -state.direction
  }%;`;

  function animate() {
    state.lerp.target += state.speed;
    state.lerp.current = lerp(
      state.lerp.current,
      state.lerp.target,
      state.interpolationFactor
    );

    if (state.lerp.target > 100) {
      state.lerp.current -= state.lerp.target;
      state.lerp.target = 0;
    }

    const x = state.lerp.current * state.direction;
    state.el.style.transform = `translateX(${x}%)`;
  }

  function render() {
    animate();
    window.requestAnimationFrame(render);
  }
  render();
  return state;
}

export default function HomepageFeatures(): ReactNode {
  const mainRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    mainRef.current
      .querySelectorAll(".loop-container")
      .forEach((el) => createLoopingText(el));
  }, []);

  return (
    <main id="main_display">
      <section>
        <div className="main_profile">
          <div className="profile_img"></div>
          <button>VIEW CV</button>
        </div>
      </section>
      <section>
        <div className="section2_img"></div>
      </section>
      <section id="third_section">
        <div>
          <h2>Efficiency Quality</h2>
          <p>
            I like to put what I think into writing. I'm very interested in
            <span>improving UX</span>. I believe in the
            <span>power in progress</span>
          </p>
        </div>

        <div className="section3_img"></div>
      </section>
      <section ref={mainRef} id="main_display_paragraph">
        <div className="loop-container">
          <div className="item">I'm FrontEnd Developer.&nbsp;</div>
          <div className="item">I'm FrontEnd Developer.&nbsp;</div>
          <div className="item">I'm FrontEnd Developer.&nbsp;</div>
        </div>
      </section>
    </main>
  );
}
