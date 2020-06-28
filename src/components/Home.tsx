import React, { useRef, useState } from "react";
import { Typography } from "antd";
import "../styles/Home.css";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  LiptovskyMikulas,
  Travel,
  Student,
  Phone,
  MindfulLife,
} from "../svg/Illustrations";

interface HomeState {
  scrollPosition: number;
}
interface HomeProps {
  theme: string;
}
export function Home(props: HomeProps) {
  const [state, setState] = useState<HomeState>({
    scrollPosition: 0,
  });
  const myRef: React.RefObject<HTMLDivElement> = useRef(null);
  const handleScroll = () => {
    setState({
      scrollPosition:
        myRef.current !== null ? myRef.current.firstElementChild!.scrollTop : 0,
    });
  };
  return (
    <div
      className={`home-page ${props.theme}`}
      ref={myRef}
      onScroll={handleScroll}
    >
      <Parallax pages={4}>
        <ParallaxLayer offset={0}>
          <div
            className="home-main-bg-to-dark"
            style={{
              height: "400vh",
              background: `hsl(${state.scrollPosition / (2136 / 135) + 75}, ${props.theme === "dark" ? 50 : 30}% , ${props.theme === "dark" ? 45 : 80}% ) `
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <Typography.Title style={{ textAlign: "center" }}>
            Welcome to my webpage!
          </Typography.Title>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.4}>
          <div className="text text--left">
            <Typography.Title>
              I lived in small town Liptovský Mikuláš for 20 years.
            </Typography.Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.7}>
          <div className="image image--right">{LiptovskyMikulas}</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.6}>
          <div className="image image--left page-transition-fix">{Travel}</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.4}>
          <div className="text text--right page-transition-fix--text">
            <Typography.Title>Then I moved to Brno.</Typography.Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.4}>
          <div className="text text--left position-mobile--higher">
            <Typography.Title>
              Where I started studying Informatics at Masaryk University in
              2018.
            </Typography.Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.7}>
          <div className="image image--right study--illustration">
            {Student}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.15} speed={0.7}>
          <div className="image image--left">{Phone}</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={0.4}>
          <div className="text text--right position-mobile--higher">
            <Typography.Title>
              Right now I am creating startup with my friend.
            </Typography.Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.3}>
          <div className="text text--left page-transition-fix--text ">
            <Typography.Title>
              We want to help people spend their time more mindfully.
            </Typography.Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.7}>
          <div className="image image--right study--illustration page-transition-fix position-mobile--lower">
            {MindfulLife}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={0.2}>
          <Typography.Title style={{ textAlign: "center" }}>
            Coming soon.
            <br />
            Peter Slaný.
            <br />
            2020
          </Typography.Title>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
