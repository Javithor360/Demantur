import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

export const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] relative">
      <div className="w-full h-2/5 bg-[#323643] absolute"></div>
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="w-[98%] h-[95%] flex">
          {/* sidebar */}
          <SideBar />
          <div className="h-full w-[80%]">
            <Header />
            <div className="flex flex-row m-[2rem]">
              <div className="m-[1rem] h-[10rem] bg-white basis-3/6 rounded-[2rem]">
                <div className="m-[2rem]">
                  <h2 className="text-gray-500 text-[1.5625rem]">
                    Saldo Neto:
                  </h2>
                  <p className="text-[2.5rem]">$ 9,999.99</p>
                </div>
              </div>
              <div className="m-[1rem] h-[10rem] bg-white basis-4/6 rounded-[2rem]">
                <div className="mx-[2rem] my-[1rem]">
                  <h2 className="text-gray-500 text-[1.5625rem]">
                    Datos personales
                  </h2>
                  <div className="grid grid-cols-3 gap-1">
                    <div>
                      <h6 className="text-gray-400 font-[1.125rem]">Nombre:</h6>
                      <p className="font-[1.125rem]">Javier Enrique Mejía Flores</p>
                    </div>
                    <div>
                      <h6 className="text-gray-400 font-[1.125rem]">DUI:</h6>
                      <p className="font-[1.125rem]">12345678-9</p>
                    </div>
                    <div className="ml-[-4rem]">
                      <h6 className="text-gray-400 ">Email:</h6>
                      <p className="font-[1.125rem]">floresmejia004@gmail.com</p>
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
