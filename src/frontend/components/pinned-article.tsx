import { useState } from "preact/hooks";


export const PinnedArticle = () => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);

  return (
    <div className="relative mt-2 flex flex-col p-4 gap-2 bg-yellow-500 hidden">
      <button className="absolute top-0 right-0 p-4" onClick={toggle}>
        {toggled ? "<" : ">"}
      </button>
      <h2 className="text-black text-xl font-bold">Introduction</h2>
      <p className={toggled ? "hidden" : ""}>
        Welcome to LARGEREST. <br />
        This is a personal home page for me to put random stuff in occasionally.{" "}
        <br />
        It's actually rather difficult to maintain. <br />
        I'm not sure why I'm doing this, but I'm doing it anyway.
      </p>
    </div>
  );
};