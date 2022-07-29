import { IoWalletSharp } from "react-icons/io5";
import { useDash } from "../../../../context/DashboardContext";

export const HomePage = () => {
  const { Info } = useDash();
  return (
    <>
      <div className="flex gap-3 my-1">
        <div className="h-[10.125rem] bg-white basis-[40%] rounded-[2rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Saldo Neto:</h2>
              <p className="text-[2.5rem]">$ 9,999.99</p>
            </div>
            <div className=" my-auto p-[10px] bg-[#323643] rounded-[50px]">
              <IoWalletSharp className="text-[4rem] text-white" />
            </div>
          </div>
        </div>
        <div className="h-[10.125rem] bg-white basis-[60%] rounded-[2rem]">
          <div className="mx-[2rem] my-[1rem]">
            <h2 className="text-gray-500 text-[1.5625rem]">Datos personales</h2>
            <div className="grid grid-cols-3 gap-1">
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">Nombre:</h6>
                <p className="font-[1.125rem]">
                  {`${Info.FirstName} ${Info.LastName}`}
                </p>
              </div>
              <div>
                <h6 className="text-gray-400 font-[1.125rem]">DUI:</h6>
                <p className="font-[1.125rem]">{`${Info.Dui}`}</p>
              </div>
              <div className="ml-[-3.5rem]">
                <h6 className="text-gray-400 ">Email:</h6>
                <p className="font-[1.125rem]">{`${Info.Email}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 my-1">
        <div className="h-[350.1px] basis-[70%] bg-white rounded-[2rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">
                Historial de transferencias
              </h2>
            </div>
          </div>
        </div>
        <div className="h-[350.1px] basis-[30%] bg-white rounded-[2rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">
                Lista de contactos
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 my-1">
        <div className="h-[236px] basis-[65%] bg-red-400">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Tarjetas</h2>
            </div>
          </div>
        </div>
        <div className="h-[236px] basis-[35%] bg-slate-400 rounded-[2rem]">
          <div className="m-[2rem] flex justify-between">
            <div>
              <h2 className="text-gray-500 text-[1.5625rem]">Préstamo</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
