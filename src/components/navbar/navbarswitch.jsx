import { useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

function NavbarSwitch(props) {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-slate-900" : "bg-slate-500"}
          relative inline-flex items-start h-[2em] w-[3em] shrink-0 cursor-pointer shadow-inner rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <div
          className={`${
            enabled ? "translate-x-4 bg-slate-100" : "translate-x-0 bg-slate-50"
          }
            pointer-events-none  h-[1.8em] w-[1.8em] transform rounded-full shadow-lg ring-0 transition[all,opacity] duration-200 ease-in-out`}
        >
          {enabled ? (
            <SunIcon className="fill-amber-800" />
          ) : (
            <MoonIcon className="fill-slate-900" />
          )}
        </div>

        <span aria-hidden="true" />
      </Switch>
    </>
  );
}
export default NavbarSwitch;
