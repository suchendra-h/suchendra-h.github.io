/* This example requires Tailwind CSS v2.0+ */

function Mainpage(params) {
  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check form-switch mb-7">
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault56"
          />
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked76"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
