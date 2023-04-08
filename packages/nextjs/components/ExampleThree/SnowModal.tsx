import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { useStore } from "../../context/ModalsContext";
import Image from "next/image";

export default function SnowModal() {
  const [animations, setAnimations] = useState(2);
  const [isDone, setIsDone] = useState(false);
  const [isOpen, updateIsOpen] = useStore(state => [state.isOpen, state.updateIsOpen]);

  useEffect(() => {
    if (animations === 0) {
      setIsDone(true);
    }
  }, [animations]);

  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0.8,
      height: 0,
    },
    enter: {
      opacity: 1,
      height: 400,
    },
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
      duration: 1000,
    },
    onRest: () => {
      console.log("rest");
      setAnimations(animations - 1);
    },
  });

  const transitionButtons = useTransition(isDone, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });

  const closeModal = () => {
    setAnimations(2);
    setIsDone(false);
    console.log(animations);
    updateIsOpen(false);
  };

  if (!isOpen) return null;

  return transitions(style => (
    <animated.div
      style={style}
      className=" fixed max-w-[600px] top-1/2 left-1/4 -translate-y-2/3 -translate-x-1/2 rounded-lg "
    >
      <Image src="/scrolltip.png" height={100} width={600} alt="scroll" className="" />
      <div className="w-full h-[100%] p-10 pr-20 pl-20 scroll cursive">
        {transitionButtons(style => (
          <animated.div className={isDone ? "block" : "hidden"} style={style}>
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 ">
              Snow Island
            </h1>
            <p className="text-zinc-800 text-2xl mt-10">
              Snow Island is a small island in the middle of the ocean. It is a very cold place, and the only way to get
              there is by boat.
            </p>
            <div className="mt-10 flex justify-between p-10">
              <button
                className="bg-rose-500 shadow-xl hover:scale-105 active:scale-95 p-3 text-xl pr-5 pl-5 hover:bg-rose-600 rounded-lg"
                onClick={closeModal}
              >
                Attack
              </button>
              <button className="bg-cyan-500 shadow-xl hover:scale-105 active:scale-95 p-3 text-xl pr-5 pl-5 hover:bg-cyan-600 rounded-lg">
                Attack
              </button>
              <button className="bg-purple-500 shadow-xl hover:scale-105 active:scale-95 p-3 text-xl pr-5 pl-5 hover:bg-purple-600 rounded-lg">
                Attack
              </button>
            </div>
          </animated.div>
        ))}
      </div>
      <Image src="/scrollbit.png" height={100} width={600} alt="scroll bottom" />
    </animated.div>
  ));
}
