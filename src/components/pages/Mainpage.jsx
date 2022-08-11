/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Signature from "../signature/signature";
const tabText = ["About", "Projects", "Contact"];

function MyTab(props) {
  return (
    <Tab
      className={({ selected }) => {
        // const style = "dark:bg-yellow-500  ";
        let style =
          //   "grow rounded-md bg-opacity-60 p-1 whitespace-nowrap border";
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 bg-white shadow";
        let condStyle = selected
          ? "bg-blue-500 text-white border-2 border-blue-700"
          : "bg-white text-black border-0";
        return style + " " + condStyle;
      }}
    >
      {props.text}
    </Tab>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Mainpage(params) {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    // <div className="bg-slate-200 dark:bg-slate-800 w-screen h-screen pt-4">
    //   <Tab.Group>
    //     <Tab.List className="flex justify-between flex-nowrap w-[350px] mt-4 mx-auto  bg-slate-500 rounded-lg px-1 py-1">
    //       {tabText.map((text) => (
    //         <MyTab text={text} key={text} />
    //       ))}
    //     </Tab.List>
    //     <Tab.Panels className="mt2 mx-auto">
    //       <Tab.Panel>Content 1</Tab.Panel>
    //       <Tab.Panel>Content 2</Tab.Panel>
    //       <Tab.Panel>Content 3</Tab.Panel>
    //     </Tab.Panels>
    //   </Tab.Group>
    // </div>
    <div className="mx-auto w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabText.map((text) => (
            <MyTab text={text} key={text} />
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Mainpage;
