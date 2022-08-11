import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

function NavbarDarkSwitch(props) {
  const [enabled, setEnabled] = useState(props.darkMode ?? false);

  useEffect(() => {
    if (props.setDarkMode) {
      props.setDarkMode(enabled);
    }
  }, [enabled, props]);

  const sizes = {
    large: { bgHeight: "60px", bgWidth: "100px", knbDiameter: "52px" },
    medium: { bgHeight: "26px", bgWidth: "43px", knbDiameter: "26px" },
    small: { bgHeight: "16px", bgWidth: "23px", knbDiameter: "16px" },
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          `${enabled ? "bg-amber-100" : "bg-slate-500"}
          relative inline-flex items-center w-[43px] h-[26px] shrink-0 cursor-pointer shadow-inner rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`
        )}
      >
        <span className="sr-only">Use setting</span>
        <div
          className={classNames(
            `${
              enabled
                ? "translate-x-[14px] bg-slate-900 opacity-100"
                : "translate-x-0 bg-slate-50"
            }
            pointer-events-none transform rounded-full shadow-lg ring-0 transition[all] duration-200 ease-in-out h-[26px] w-[26px]`
          )}
        >
          {enabled ? (
            <SunIcon className="fill-yellow-600" />
          ) : (
            <MoonIcon className="fill-slate-900" />
          )}
        </div>

        <span aria-hidden="true" />
      </Switch>
    </>
  );
}
export default NavbarDarkSwitch;
