import React from "react";
import "../assets/scss/UserCards.scss";
const DashCardsImages = require.context(
  "../../../static/assets/img/credit_cards/bank_cards_images",
  true
);
export const UserCards = () => {
  return (
    <div className="flex flex-row justify-between w-full h-full bg-transparent">
      <div className="left-cards-container w-[49%] h-[100%] bg-white rounded-xl shadow-md flex flex-col items-center overflow-x-hidden overflow-y-auto py-4">
        <p className="text-[24px] text-[#323643] text-center p-2 mb-4">
          Solicita tu tarjeta de crédito
        </p>

        <div className="dash-card-info w-[90%] rounded-xl relative flex flex-row items-center">
          <div className="flex items-center justify-center h-full w-fit">
            <img
              src={DashCardsImages("./classicCard.png")}
              alt=""
              className="dash-left-card-img"
            />
          </div>
          <div className="dash-card-info-content">
            <div className="content-text">
              <p className="text-[1.375rem] text-[#606470]">Demantur Classic</p>
              <p className="text-[0.875rem] text-[#606470]">
                Recibe los beneficios necesarios para tu día a día, como puntos
                acumulables, retiros de efectivo y cuotas
              </p>
            </div>
            <div className="flex items-center justify-center card-info-btn">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Solicitar
              </button>
            </div>
          </div>
        </div>

        <div className="dash-card-info w-[90%] rounded-xl relative flex flex-row items-center">
          <div className="flex items-center justify-center h-full w-fit">
            <img
              src={DashCardsImages("./platinumCard.png")}
              alt=""
              className="dash-left-card-img"
            />
          </div>
          <div className="dash-card-info-content">
            <div className="content-text">
              <p className="text-[1.375rem] text-[#606470]">
                Demantur Platinum
              </p>
              <p className="text-[0.875rem] text-[#606470]">
                Recibe los beneficios necesarios para tu día a día, como puntos
                acumulables, retiros de efectivo y cuotas
              </p>
            </div>
            <div className="flex items-center justify-center card-info-btn">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Solicitar
              </button>
            </div>
          </div>
        </div>

        <div className="dash-card-info w-[90%] rounded-xl relative flex flex-row items-center">
          <div className="flex items-center justify-center h-full w-fit">
            <img
              src={DashCardsImages("./goldCard.png")}
              alt=""
              className="dash-left-card-img"
            />
          </div>
          <div className="dash-card-info-content">
            <div className="content-text">
              <p className="text-[1.375rem] text-[#606470]">Demantur Gold</p>
              <p className="text-[0.875rem] text-[#606470]">
                Recibe los beneficios necesarios para tu día a día, como puntos
                acumulables, retiros de efectivo y cuotas
              </p>
            </div>
            <div className="flex items-center justify-center card-info-btn">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Solicitar
              </button>
            </div>
          </div>
        </div>

        <div className="dash-card-info w-[90%] rounded-xl relative flex flex-row items-center">
          <div className="flex items-center justify-center h-full w-fit">
            <img
              src={DashCardsImages("./blackCard.png")}
              alt=""
              className="dash-left-card-img"
            />
          </div>
          <div className="dash-card-info-content">
            <div className="content-text">
              <p className="text-[1.375rem] text-[#606470]">Mastercard Black</p>
              <p className="text-[0.875rem] text-[#606470]">
                Recibe los beneficios necesarios para tu día a día, como puntos
                acumulables, retiros de efectivo y cuotas
              </p>
            </div>
            <div className="flex items-center justify-center card-info-btn">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Solicitar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[49%] h-full bg-white rounded-xl shadow-md py-4 overflow-x-hidden overflow-y-auto">
        <p className="text-[1.5rem] text-[#323643] text-center p-2 ">
          Tus Tarjetas
        </p>
        <div className="mb-6 ml-5 card-tipe-tittle">
          <p className="text-[1.375rem] text-[#323643] p-0 m-0">Crédito</p>
          <hr className="p-0  m-0 w-[20%]" />
        </div>

        <div className="flex flex-col items-center w-full min-h-full">
          <div className="min-h-[20rem] w-[75%] shadow-lg rounded-xl mb-5 flex flex-col justify-center items-center dash-user-cards-container">
            <div className="h-[10%]">
              <p className="text-[1.375rem] text-center">Demantur Platinum</p>
              <img
                src={DashCardsImages("./platinumCard.png")}
                alt=""
                className="w-[200px] mt-3 mb-3"
              />
            </div>
            <div className="mt-6">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Ver detalles
              </button>
            </div>
          </div>
          <div className="min-h-[20rem] w-[75%] shadow-lg rounded-xl mb-5 flex flex-col justify-center items-center dash-user-cards-container">
            <div className="h-[10%]">
              <p className="text-[1.375rem] text-center">Demantur Classic</p>
              <img
                src={DashCardsImages("./classicCard.png")}
                alt=""
                className="w-[200px] mt-3 mb-3"
              />
            </div>
            <div className="mt-6">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 ml-5 card-tipe-tittle">
          <p className="text-[1.375rem] text-[#323643] p-0 m-0">Débito</p>
          <hr className="p-0  m-0 w-[20%]" />
        </div>
        <div className="flex flex-col items-center w-full min-h-fit">
          <div className="min-h-[20rem] w-[75%] shadow-lg rounded-xl flex flex-col justify-center items-center dash-user-cards-container mb-5">
            <div className="h-[10%]">
              <p className="text-[1.375rem] text-center">Débito Clásica</p>
              <img
                src={DashCardsImages("./debitCard.png")}
                alt=""
                className="w-[200px] mt-3 mb-3"
              />
            </div>
            <div className="mt-6">
              <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
