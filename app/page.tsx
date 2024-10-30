"use client";
import React, { useEffect, useState } from "react";
import SimliOpenAIPushToTalk from "./SimliOpenAIPushToTalk";

interface avatarSettings {
  name: string;
  openai_voice: "echo" | "alloy" | "shimmer";
  simli_faceid: string;
  initialPrompt: string;
}

// Customize your avatar here
const avatar: avatarSettings = {
  name: "Frank",
  openai_voice: "echo",
  simli_faceid: "5514e24d-6086-46a3-ace4-6a7264e5cb7c",
  initialPrompt:
    "You are a helpful AI assistant named Frank. You are friendly and concise in your responses. Your task is to help users with any questions they might have. Your answers are short and to the point, don't give long answers be brief and straightforward.",
};

const Demo: React.FC = () => {
  const [interactionMode, setInteractionMode] = useState<
    "pushToTalk" | undefined
  >(undefined);

  useEffect(() => {
    const storedInteractionMode = localStorage.getItem("interactionMode");
    if (storedInteractionMode === "pushToTalk") {
      setInteractionMode("pushToTalk");
    }
  }, []);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          <SimliOpenAIPushToTalk
            openai_voice={avatar.openai_voice}
            simli_faceid={avatar.simli_faceid}
            initialPrompt={avatar.initialPrompt}
            onStart={onStart}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
