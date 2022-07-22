import { useDash } from "../../../context/DashboardContext";

export const Header = () => {
  const { OptionElement } = useDash();

  return (
    <div className="m-3 flex flex-row justify-between flex-wrap ">
      <div className="flex flex-col items-center bg-black text-white w-[8%]">
        <span >{OptionElement}</span>
        <hr className="w-100" />
      </div>
      <div className="bg-red-500">Foto, Iconos</div>
    </div>
  );
};
