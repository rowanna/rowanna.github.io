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
    <section ref={mainRef} id="main_display">
      <div className="loop-container">
        <div className="item">I'm FrontEnd Developer.&nbsp;</div>
        <div className="item">I'm FrontEnd Developer.&nbsp;</div>
        <div className="item">I'm FrontEnd Developer.&nbsp;</div>
      </div>
    </section>
  );
}
