//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";
import { useDash } from "../../../context/DashboardContext";

// Translation
import { useTranslation } from "react-i18next";

//hooks
import Cleave from "cleave.js/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DemanturClassic = () => {
  const {t}= useTranslation();

  const navigate = useNavigate();

  const { DematurClassicForm, CreateElements } = useDash();

  // const [AccountOwner, setAccountOwner] = useState();
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

  // useEffect(() => {
  //   (async () => {
  //     const res = await DematurClassicForm();
  //     setAccountOwner(res.data.data._id);
  //   })();
  // });

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
        // AccountOwner: AccountOwner,
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

  return (
    <>
      <Navbar />
        <div className="classic-card-hero-container">
          <div className="classic-card-hero-content">
            <div className="text-content">
              <p>Classic</p>
              <p>{t("ClassicPage.sub-tittle")}</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/classicCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            {t("ClassicPage.desc")}
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
            {t("ClassicPage.benefit.tittle")}
          </p>
          <div className="card-benefits_grid_row">
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/points_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.1.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.1.desc")}
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/fee_payment_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.2.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.2.desc")}
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/cash_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.3.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.3.desc")}
              </p>
            </div>
          </div>
        </div>

        {Tabs("ClassicCard")}

        <div className="credit-card-tittle">
          <p>{t("ClassicPage.benefit-banner.tittle")}</p>
          <hr />
        </div>
        
        <div className="classic-other-benefits-banner">
          <div className="classic-otb-content">
            <div className="classic-otb-icon">
              <img src={CreditCardsImages('./icons/discount_icon.png')} alt="" />
            </div>
            <div className="classic-otb-text">
              <p>{t("ClassicPage.benefit-banner.sub-tittle")}</p>
              <p>
                {t("ClassicPage.benefit-banner.desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="card-form-container">
          <div className="form-header">
            <p>{t("CardsPage-Form.tittle")}</p>
            <hr className="blue-underline smallest"></hr>
            <p>{t("CardsPage-Form.desc")}</p>
          </div>


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
        <Footer />
    </>
  )
}