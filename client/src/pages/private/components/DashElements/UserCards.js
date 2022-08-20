import React from "react";
import Cleave from "cleave.js/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"
import { useTranslation } from "react-i18next";
import { useDash } from "../../../../context/DashboardContext";
import '../../../static/assets/scss/credit_cards/individual_cards_pages_main.scss'
import "../assets/scss/UserCards.scss";
import { AiOutlineClose } from 'react-icons/ai'

const DashCardsImages = require.context(
  "../../../static/assets/img/credit_cards/bank_cards_images",
  true
);

export const UserCards = () => {
  const [changeBox, setChangeBox] = useState(false);
  const [parametros, setParametros] = useState(null);
  const {t}= useTranslation();

  const navigate = useNavigate();

  const { DematurClassicForm, CreateElements } = useDash();

  const [CardOwner, setCardOwner] = useState();
  const [Name, setName] = useState();
  const [CellNumber, setCellNumber] = useState();
  const [Address, setAddress] = useState();
  const [DuiNum, setDuiNum] = useState();
  const [Email, setEmail] = useState();
  const [Salary, setSalary] = useState();
  const [Job, setJob] = useState();

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState("");

  const [Image2, setImage2] = useState();
  const [ImageName2, setImageName2] = useState("");

  const [Image3, setImage3] = useState();
  const [ImageName3, setImageName3] = useState("");

  useEffect(() => {
    Imagefunc(ImageName, setImageName);
  }, [ImageName]);

  useEffect(() => {
    Imagefunc(ImageName2, setImageName2);
  }, [ImageName2]);

  useEffect(() => {
    Imagefunc(ImageName3, setImageName3);
  }, [ImageName3]);

  useEffect(() => {
    (async () => {
      const res = await DematurClassicForm(localStorage.getItem('authToken'));
      // setCardOwner(res.data.data._id);
      console.log(res)
    })();
  });

  const Imagefunc = (UploadImage, SetImageName) => {
    if (UploadImage !== "") {
      let NameFinal = UploadImage;

      function file_extension(filename) {
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
      }
      let fileExtension = file_extension(UploadImage);
      NameFinal = UploadImage.trim();

      if (NameFinal.includes("." + fileExtension)) {
        NameFinal = NameFinal.replace(`.${fileExtension}`, "");
      }

      if (NameFinal.length >= 12) {
        NameFinal = NameFinal.substring(0, 12);
      }
      SetImageName(
        NameFinal + (NameFinal.length >= 12 ? "..." : ".") + fileExtension
      );
    }
  };

  const handleChangeFile = (e) => {
    if (e.target.files.length !== 0) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0]);
    } else {
      setImageName("");
    }
  };
  const handleChangeFile2 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName2(e.target.files[0].name);
      setImage2(e.target.files[0]);
    } else {
      setImageName2("");
    }
  };
  const handleChangeFile3 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName3(e.target.files[0].name);
      setImage3(e.target.files[0]);
    } else {
      setImageName3("");
    }
  };
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const PrivateConfig = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("authToken"),
        },
      };

      const ClassicCardFormData = {
        CardOwner: CardOwner,
        Name: Name,
        CellNumber: CellNumber,
        Address: Address,
        DuiNum: DuiNum,
        Email: Email,
        Salary: Salary,
        Job: Job,
        Image: Image,
        Image2: Image2,
        Image3: Image3,
      };

      const ClassicCardForm = new FormData();

      for (let key in ClassicCardFormData) {
        ClassicCardForm.append(key, ClassicCardFormData[key]);
      }

      await axios.post(
        "http://localhost:4000/api/requests/card-requests/classic",
        ClassicCardForm,
        PrivateConfig
      );

      CreateElements(localStorage.getItem("authToken"));
      navigate("/index");

    } catch (error) {
      console.log(error);
    }
  };

  const FormRequestCard = ({parametros}) => {
    return (
      <div className="w-full h-full bg-white rounded-lg overflow-y-auto">
        <div className="w-full h-[2rem] flex items-center justify-end">
          <button className="bg-transparent outline-none border-none" onClick={()=>{
            setChangeBox(false)
            setParametros(null)
          }}>
            <AiOutlineClose className="text-[1.2rem] text-[#323643]"/>
          </button>
        </div>
        <div className="h-[5rem] w-full">
          <p className="text-center text-[1.4rem]">
            {parametros.classic.cardName}
          </p>
        </div>
        <div className="card-form-container"> 
          <form onSubmit={handleForm} className="main-card-form">
            <div className="form-row-1">
              <div className="form-row-content">
                <div className="form-individual-element">
                  <div className="label-icon"><MdPersonOutline /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Nombre completo" onChange={(e) => setName(e.target.value)} value={Name}/>
                      <label className="form-label-box" htmlFor="">
                      {t("CardsPage-Form.name")}
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlinePhone /></div>
                  <div className="form-input-container">
                      <Cleave id='Telefono' name='Telefono' placeholder='Número de contacto' options={{ blocks: [4, 4], delimiter: "-", numericOnly: true }} autoComplete='off' className='form-input-box' onChange={(e) => setCellNumber(e.target.value)} value={CellNumber}/>
                      <label className="form-label-box" htmlFor="">
                      {t("CardsPage-Form.contact")}
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlineHome /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Dirección" onChange={(e) => setAddress(e.target.value)} value={Address}/>
                      <label className="form-label-box" htmlFor="">
                      {t("CardsPage-Form.address")}
                      </label>
                  </div>
                </div>
              </div>
              <div className="form-row-content">
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineBadge /></div>
                    <div className="form-input-container">
                        <Cleave id='Dui' name='Dui' placeholder='Número de DUI' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} autoComplete='off' className='form-input-box' onChange={(e) => setDuiNum(e.target.value)} value={DuiNum}/>
                        <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.dui")}
                        </label>
                      </div>
                </div>
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineEmail /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} value={Email}/>
                        <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.email")}
                        </label>
                    </div>
                </div> 
                <div className="form-flex-row">
                  <div className="card-form-select">
                    <select name="" id="" onChange={(e) => setSalary(e.target.value)} value={Salary}>
                        <option>{t("CardsPage-Form.option")}</option>
                        <option>{t("CardsPage-Form.desc4")} $450 y $499</option>
                        <option>{t("CardsPage-Form.desc4")} $500 y $999</option>
                        <option>{t("CardsPage-Form.desc4")} $1,000 y $1,999</option>
                        <option>{t("CardsPage-Form.desc4")} $2,000 y $3,999</option>
                        <option>{t("CardsPage-Form.desc4")} $4,000 y $5,999</option>
                        <option>{t("CardsPage-Form.desc4")} $6,000</option>
                    </select> 
                  </div>
                  <div className="flex-row-input">
                      <input className="form-input-box" type="text" placeholder="Escriba su posición laboral" onChange={(e) => setJob(e.target.value)} value={Job}/>
                      <label className="form-label-box" htmlFor="">
                      {t("CardsPage-Form.desc6")}
                      </label>
                  </div>
                </div>
              </div>
            </div>    
            <div className="form-row-2">
              <div className="input-files">
                <p>{t("CardsPage-Form.desc1")}</p>
                <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
                <label htmlFor="Constancia" className=''>{ImageName === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName}</label>
              </div>
              <div className="input-files">
                <p>{t("CardsPage-Form.desc2")}</p>
                <input type='file' accept='image/*' id='Constancia2' name='Constancia2' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' />
                <label htmlFor="Constancia2" className=''>{ImageName2 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName2}</label>
              </div>
              <div className="input-files">
                <p>{t("CardsPage-Form.desc3")}</p>
                <input type='file' accept='image/*' id='Constancia3' name='Constancia3' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' />
                <label htmlFor="Constancia3" className=''>{ImageName3 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName3}</label>
              </div>
            </div>
            <div className="form-row-3">
              <button className="card-submit-button" type="submit">{t("CardsPage-Form.button2")}</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const creditCards = () => {
    return (
      <>
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
      </>
    );
  }
  
  const divLeft = () => {
    return (
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
            <button onClick={()=>{
              setChangeBox(true)
              setParametros({classic:{
                cardName: 'Demantur Classic',
                cardDescription: 'lorem'
              }})
            }} className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
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
    )
    
  }

  const CardsForm = () => {
    <form onSubmit={handleForm} className="main-card-form">
      <div className="form-row-1">
        <div className="form-row-content">
          <div className="form-individual-element">
            <div className="label-icon"><MdPersonOutline /></div>
            <div className="form-input-container">
                <input className="form-input-box" type="text" placeholder="Nombre completo" onChange={(e) => setName(e.target.value)} value={Name}/>
                <label className="form-label-box" htmlFor="">
                {t("CardsPage-Form.name")}
                </label>
            </div>
          </div>
          <div className="form-individual-element">
            <div className="label-icon"><MdOutlinePhone /></div>
            <div className="form-input-container">
                <Cleave id='Telefono' name='Telefono' placeholder='Número de contacto' options={{ blocks: [4, 4], delimiter: "-", numericOnly: true }} autoComplete='off' className='form-input-box' onChange={(e) => setCellNumber(e.target.value)} value={CellNumber}/>
                <label className="form-label-box" htmlFor="">
                {t("CardsPage-Form.contact")}
                </label>
            </div>
          </div>
          <div className="form-individual-element">
            <div className="label-icon"><MdOutlineHome /></div>
            <div className="form-input-container">
                <input className="form-input-box" type="text" placeholder="Dirección" onChange={(e) => setAddress(e.target.value)} value={Address}/>
                <label className="form-label-box" htmlFor="">
                {t("CardsPage-Form.address")}
                </label>
            </div>
          </div>
        </div>
        <div className="form-row-content">
          <div className="form-individual-element">
              <div className="label-icon"><MdOutlineBadge /></div>
              <div className="form-input-container">
                  <Cleave id='Dui' name='Dui' placeholder='Número de DUI' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} autoComplete='off' className='form-input-box' onChange={(e) => setDuiNum(e.target.value)} value={DuiNum}/>
                  <label className="form-label-box" htmlFor="">
                  {t("CardsPage-Form.dui")}
                  </label>
                </div>
          </div>
          <div className="form-individual-element">
              <div className="label-icon"><MdOutlineEmail /></div>
              <div className="form-input-container">
                  <input className="form-input-box" type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} value={Email}/>
                  <label className="form-label-box" htmlFor="">
                  {t("CardsPage-Form.email")}
                  </label>
              </div>
          </div> 
          <div className="form-flex-row">
            <div className="card-form-select">
              <select name="" id="" onChange={(e) => setSalary(e.target.value)} value={Salary}>
                  <option>{t("CardsPage-Form.option")}</option>
                  <option>{t("CardsPage-Form.desc4")} $450 y $499</option>
                  <option>{t("CardsPage-Form.desc4")} $500 y $999</option>
                  <option>{t("CardsPage-Form.desc4")} $1,000 y $1,999</option>
                  <option>{t("CardsPage-Form.desc4")} $2,000 y $3,999</option>
                  <option>{t("CardsPage-Form.desc4")} $4,000 y $5,999</option>
                  <option>{t("CardsPage-Form.desc4")} $6,000</option>
              </select> 
            </div>
            <div className="flex-row-input">
                <input className="form-input-box" type="text" placeholder="Escriba su posición laboral" onChange={(e) => setJob(e.target.value)} value={Job}/>
                <label className="form-label-box" htmlFor="">
                {t("CardsPage-Form.desc6")}
                </label>
            </div>
          </div>
        </div>
      </div>    
      <div className="form-row-2">
        <div className="input-files">
          <p>{t("CardsPage-Form.desc1")}</p>
          <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
          <label htmlFor="Constancia" className=''>{ImageName === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName}</label>
        </div>
        <div className="input-files">
          <p>{t("CardsPage-Form.desc2")}</p>
          <input type='file' accept='image/*' id='Constancia2' name='Constancia2' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' />
          <label htmlFor="Constancia2" className=''>{ImageName2 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName2}</label>
        </div>
        <div className="input-files">
          <p>{t("CardsPage-Form.desc3")}</p>
          <input type='file' accept='image/*' id='Constancia3' name='Constancia3' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' />
          <label htmlFor="Constancia3" className=''>{ImageName3 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName3}</label>
        </div>
      </div>
      <div className="form-row-3">
        <button className="card-submit-button" type="submit">{t("CardsPage-Form.button2")}</button>
      </div>
    </form>
  }

  return (
    <div className="flex flex-row justify-between w-full h-full bg-transparent">
      {
        changeBox === false ?
        <>
          {divLeft()}
          <div className="w-[49%] h-full bg-white rounded-xl shadow-md py-4 overflow-x-hidden overflow-y-auto">
            {creditCards()}
          </div>
        </>
        :
        <>
          <FormRequestCard parametros={parametros !== null && parametros} />
        </>
      }
    </div>
  );
};
