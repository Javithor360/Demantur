import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import { IoWalletSharp } from "react-icons/io5";

export const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] relative">
      <div className="w-full h-2/5 bg-[#323643] absolute"></div>
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="w-[98%] h-[95%] flex">
          {/* sidebar */}
          <SideBar />
          <div className="h-full w-[80%] mx-auto">
            <Header />
            <div className="mx-3">
              <div className="flex gap-3 my-1">
                {/* Saldo e información personal */}
                <div className="h-[10.125rem] bg-white basis-[619px] rounded-[2rem]">
                  <div className="m-[2rem] flex justify-between">
                    <div>
                      <h2 className="text-gray-500 text-[1.5625rem]">
                        Saldo Neto:
                      </h2>
                      <p className="text-[2.5rem]">$ 9,999.99</p>
                    </div>
                    <div className=" my-auto p-[10px] bg-[#323643] rounded-[50px]">
                      <IoWalletSharp className="text-[4rem] text-white" />
                    </div>
                  </div>
                </div>
                <div className="h-[10.125rem] bg-white basis-[734px] rounded-[2rem]">
                  <div className="mx-[2rem] my-[1rem]">
                    <h2 className="text-gray-500 text-[1.5625rem]">
                      Datos personales
                    </h2>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <h6 className="text-gray-400 font-[1.125rem]">
                          Nombre:
                        </h6>
                        <p className="font-[1.125rem]">
                          Javier Enrique Mejía Flores
                        </p>
                      </div>
                      <div>
                        <h6 className="text-gray-400 font-[1.125rem]">DUI:</h6>
                        <p className="font-[1.125rem]">12345678-9</p>
                      </div>
                      <div className="ml-[-3.5rem]">
                        <h6 className="text-gray-400 ">Email:</h6>
                        <p className="font-[1.125rem]">
                          floresmejia004@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historial de transferencias y contactos */}
              <div className="flex gap-4 my-1">
                <div className="h-[350.1px] basis-[916px] bg-white rounded-[2rem]">
                  <div className="m-[2rem] flex justify-between">
                    <div>
                      <h2 className="text-gray-500 text-[1.5625rem]">
                        Historial de transferencias
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="h-[350.1px] basis-[420px] bg-white rounded-[2rem]">
                  <div className="m-[2rem] flex justify-between">
                    <div>
                      <h2 className="text-gray-500 text-[1.5625rem]">
                        Lista de contactos
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjetas y préstamos */}
              <div className="flex gap-2 my-1">
                <div className="h-[236px] basis-[800px] bg-red-400">
                <div className="m-[2rem] flex justify-between">
                    <div>
                      <h2 className="text-gray-500 text-[1.5625rem]">
                        Tarjetas
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="h-[236px] basis-[568px] bg-slate-400 rounded-[2rem]">
                <div className="m-[2rem] flex justify-between">
                    <div>
                      <h2 className="text-gray-500 text-[1.5625rem]">
                        Préstamo
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
