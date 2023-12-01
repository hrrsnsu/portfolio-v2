"use client";
import { useEffect, useState, useRef } from "react";
import AboutUs from "./components/molecules/AboutUs/AboutUs";
import ScrollView from "./components/molecules/ScrollView/ScrollView";
import "./globals.css";

export default function Home() {
  const [left, setLeft] = useState<number>();
  const [top, setTop] = useState<number>();
  const pageContainerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", function (e: any) {
      setLeft(e.pageX);
      setTop(e.pageY);
    });
  }, []);

  useEffect(() => {
    const pageElem = pageContainerRef.current;
    if (pageElem) {
      pageElem.style.background = `radial-gradient(1500px at ${left}px ${top}px, rgba(53, 53, 53, 0.15), transparent 15%)`;
    }
  }, [left, top]);

  return (
    <div ref={pageContainerRef}>
      <div className="PageContainer">
        <div className="PageContent">
          <AboutUs />
          <ScrollView />
        </div>
      </div>
    </div>
  );
}
