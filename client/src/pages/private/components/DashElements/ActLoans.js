//scss
import '../../../static/assets/scss/loans_styles/CardLoans.scss'
import "../assets/scss/UserLoan.scss";
//components
import { ScrollToTop } from '../../../../components/ScrollToTop';
import { Dropdown } from '../../../../components/Dropdown';
//hooks
import { useEffect, useState } from "react";
import axios from "axios";

import { useDash } from "../../../../context/DashboardContext";
//icons
import { BsArrowLeft } from 'react-icons/bs'
import pendingReqIcon from '../assets/img/cards-icons/quote-request.png'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'
import { BiLoaderAlt } from 'react-icons/bi'
//translate
import { useTranslation } from "react-i18next";




//img
const OfferLoans = require.context(
  "../../../static/assets/img/all_loans",
  true
);

export const ActLoans = () => {

  const [changeBox, setChangeBox] = useState(false);
  const [parametros, setParametros] = useState(null);
  const [LoanReq, setLoanReq] = useState(null);
  const [Error, setError] = useState('');
  const [CharginIco, setCharginIco] = useState(true);
  const [Chargin, setChargin] = useState(false);

  // const handleClick = event => {
  //   event.currentTarget.disabled = true;
  // };

  const { t } = useTranslation();


  const { LoansRequestsForm, CreateElements, getMyLoanReq } = useDash();

  useEffect(() => {
    (async () => {
      try {
        const resp = await getMyLoanReq(localStorage.getItem('authToken'));

        setLoanReq(resp.data.data);
      } catch (e) {
        console.log(e)
      }
    })()
  }, []);


  setTimeout(() => {
    setCharginIco(false);
  }, 2000);



  const UserElementsSalary = ['$450 y $499', '$500 y $999', '$700 y $1200', <span> {t("DashboardNormalUser.Loans.form.UserElementsSalary.1")}</span>,]
  const UserElementsLaboralStatus = [`${t('DashboardNormalUser.Loans.form.LaboralStatus.1')}`, `${t('DashboardNormalUser.Loans.form.LaboralStatus.2')}`, `${t('DashboardNormalUser.Loans.form.LaboralStatus.3')}`, `${t('DashboardNormalUser.Loans.form.LaboralStatus.4')}`,]
  const UserElementAmount = ['$300', '$500', '$999', '$1200', '$1500', 'Otro tipo de monto',]
  const BusinessElementAmount = ['$1000', '$1400', '$1600', '$1800', '$2000', 'Otro tipo de monto']

  // useEffect(() => {
  //   console.log(UserElementsLaboralStatus)
  //  }, []);


  const [loan_guarantor, setloan_guarantor] = useState();
  const [UserSalary, setUserSalary] = useState('');
  const [UserStatus, setUserStatus] = useState('');
  const [Amountrequest, setAmountrequest] = useState('');


  const [Image1, setImage1] = useState();
  const [ImageName1, setImageName1] = useState("");

  const [Image2, setImage2] = useState();
  const [ImageName2, setImageName2] = useState("");

  const [Image3, setImage3] = useState();
  const [ImageName3, setImageName3] = useState("");

  const [Image4, setImage4] = useState();
  const [ImageName4, setImageName4] = useState("");

  useEffect(() => {
    Imagefunc(ImageName1, setImageName1);
  }, [ImageName1]);

  useEffect(() => {
    Imagefunc(ImageName2, setImageName2);
  }, [ImageName2]);

  useEffect(() => {
    Imagefunc(ImageName3, setImageName3);
  }, [ImageName3]);

  useEffect(() => {
    Imagefunc(ImageName4, setImageName4);
  }, [ImageName4]);


  useEffect(() => {
    setUserSalary('')
    setUserStatus('')
    setAmountrequest('')
    setImageName1('')
    setImageName2('')
    setImageName3('')
    setImageName4('')
  }, [changeBox]);

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
  const handleChangeFile1 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName1(e.target.files[0].name);
      setImage1(e.target.files[0]);
    } else {
      setImageName1("");
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
  const handleChangeFile4 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName4(e.target.files[0].name);
      setImage4(e.target.files[0]);
    } else {
      setImageName4("");
    }
  };
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(parametros.LoanId)
    try {
      const PrivateConfig = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("authToken"),
        },
      };

      const LoanRequestsFormData = {
        LoanId: parametros.LoanId,
        loan_guarantor: loan_guarantor,
        UserSalary,
        UserStatus,
        Amountrequest,
        Image1: Image1,
        Image2: Image2,
        Image3: Image3,
        Image4: Image4,
      };

      const LoansRequestsForm = new FormData();

      setChargin(true);

      for (let key in LoanRequestsFormData) {
        LoansRequestsForm.append(key, LoanRequestsFormData[key]);
      }
      console.log(LoansRequestsForm)
      await axios.post(
        "http://localhost:4000/api/Loans/loan-requests",
        LoansRequestsForm,
        PrivateConfig
      );

      CreateElements(localStorage.getItem("authToken"));


      setTimeout(() => {
        setChargin(false)
        setUserSalary('')
        setUserStatus('')
        setAmountrequest('')
        setImageName1('')
        setImageName2('')
        setImageName3('')
        setImageName4('')
        setChangeBox(false)
      }, 1000);

      (async () => {
        try {
          const resp = await getMyLoanReq(localStorage.getItem('authToken'));
          setLoanReq(resp.data.data);

        } catch (error) {
          console.log(error)
        }
      })()
      setChangeBox(false);


    } catch (error) {
      setError(error.response.data.error)
      console.log(error);
    }
  };



  const FormRequestLoan = () => {
    return (
      <div className="w-full h-full bg-white rounded-xl overflow-y-auto scroll-cards">
        {Error !== '' && Error}
        <div className="w-full h-[2rem] flex items-center justify-start">
          <button className="bg-transparent outline-none border-none mt-4 ml-5" onClick={() => {
            setChangeBox(false)
            setParametros(null)
            setError('')
          }}>
            <BsArrowLeft className="text-[2rem] text-[#323643] hover-back-arrow ease-out duration-200" />
          </button>
        </div>
        <div className="h-fit w-full">
          <p className="text-center text-[1.4rem] mb-3">
            {parametros.LoanName}
          </p>
          <div className='subdivisions'>
            <hr className='' />
          </div>
          <img
            src={OfferLoans(`${parametros.LoanImage2}`)}
            alt=""
            className="w-[25.5rem] h-[15rem] rounded-lg  mx-auto block mt-4 mb-4 shadow-lg"
          />
          <div className="min-h-fit w-full px-2 border-emerald-300 border-l-2">
            <p className="card-description text-[1rem] mx-auto mb-4">
              {parametros.LoanDescription2}
            </p>
          </div>
        </div>

        <div className="card-form-container">

          <form onSubmit={handleForm} className="main-card-form">
            <span className='ml-7 mb-3 text-[15px] text-[red]'>{Error !== '' && Error}</span>
            <div className='flex flex-row w-full h-[30%] justify-start items-center px-[2rem] mb-5'>
              <div className='h-[70%] mr-5'>
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle1")}</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setUserSalary} elements={UserElementsSalary} Elemento={UserSalary} />
                </div>
              </div>
              <div className='h-[70%] mr-5 '>
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle2")}</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setUserStatus} elements={UserElementsLaboralStatus} Elemento={UserStatus} />
                </div>
              </div>
              <div className='h-[70%] mr-5 '>
                <p className='text-[1.1rem] text-[#606470]'>Monto a Solicitar</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setAmountrequest} elements={UserElementAmount} Elemento={Amountrequest} />
                </div>
              </div>
              <div className="input-files h-[70%]">
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle3")}</p>
                <input type='file' accept='image/*' id='Constancia1' name='Constancia1' placeholder=' ' onChange={handleChangeFile1} autoComplete='off' />
                <label htmlFor="Constancia1" className=''>{ImageName1 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName1}</label>
              </div>
            </div>
            <div className="form-row-2">
              <div className="input-files mr-7">
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle4")}</p>
                <input type='file' accept='image/*' id='Constancia2' name='Constancia2' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' />
                <label htmlFor="Constancia2" className=''>{ImageName2 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName2}</label>
              </div>
              <div className="input-files mr-7">
                <p className='text-[1.1rem] text-[#606470]'>Constancia de trabajo</p>
                <input type='file' accept='image/*' id='Constancia3' name='Constancia3' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' />
                <label htmlFor="Constancia3" className=''>{ImageName3 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName3}</label>
              </div>
              <div className="input-files">
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle5")}</p>
                <input type='file' accept='image/*' id='Constancia4' name='Constancia4' placeholder=' ' onChange={handleChangeFile4} autoComplete='off' />
                <label htmlFor="Constancia4" className=''>{ImageName4 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName4}</label>
              </div>
            </div>
            <div className="form-row-3">
              <button className="card-submit-button" type="submit" disabled={Chargin}
              >
                {
                  Chargin === true ?
                    <>
                      <BiLoaderAlt className="animate-spin" />
                    </>
                    :
                    <>
                      <span>Solicitar</span>
                    </>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }



  const userLoans = () => {

    return (
      <>

        {
          CharginIco === true ?
            <>
              <div className='flex justify-center items-center w-full h-full'><IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' /></div>
            </>
            :
            <>
              <p className="text-[1.5rem] text-[#323643] text-center p-2 ">
                {t("DashboardNormalUser.Loans.tittle2")}

              </p>
              <div className="mb-6 ml-5 card-tipe-tittle">
                <p className="text-[1.375rem] text-[#323643] p-0 m-0">{t("DashboardNormalUser.Loans.tittle3")}</p>
                <hr className="p-0  m-0 w-[20%]" />
              </div>

              <div className="flex flex-col items-center w-full min-h-full">
                <div className="min-h-[20rem] w-[75%] shadow-lg rounded-xl mb-5 flex flex-col justify-center items-center dash-user-cards-container">
                  <div className="h-[10%]">
                    <p className="text-[1.375rem] text-center">Demantur House</p>
                    <img
                      src={OfferLoans("./House.jpg")}
                      alt=""
                      className="w-[200px] mt-3 mb-3"
                    />
                  </div>
                  <div className="mt-6">
                    <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                      {t("DashboardNormalUser.Loans.button2")}

                    </button>
                  </div>
                </div>
              </div>
            </>
        }

      </>
    );
  }

  const divLoans = () => {
    const LoansProperties = [
      {
        LoanName: <span>{t("DashboardNormalUser.Loans.1.tittle")}</span>,
        LoanDescription: <span>{t("DashboardNormalUser.Loans.1.desc")}</span>,
        LoanDescription2: <span>{t("DashboardNormalUser.Loans.1.desc2")}</span>,
        LoanImage: './personal_loan.jpg',
        LoanImage2: './PersonalRequire.jpg'
      },
      {
        LoanName: <span>{t("DashboardNormalUser.Loans.2.tittle")}</span>,
        LoanDescription: <span>{t("DashboardNormalUser.Loans.2.desc")}</span>,
        LoanDescription2: <span>{t("DashboardNormalUser.Loans.2.desc2")}</span>,
        LoanImage: './business_loan.jpg',
        LoanImage2: './RequireLoan.jpg'
      },
      {
        LoanName: <span>{t("DashboardNormalUser.Loans.3.tittle")}</span>,
        LoanDescription: <span>{t("DashboardNormalUser.Loans.3.desc")}</span>,
        LoanDescription2: <span>{t("DashboardNormalUser.Loans.3.desc2")}</span>,
        LoanImage: './House.jpg',
        LoanImage2: './HousinRequire.jpg'
      },
      {
        LoanName: <span>{t("DashboardNormalUser.Loans.4.tittle")}</span>,
        LoanDescription: <span>{t("DashboardNormalUser.Loans.4.desc")}</span>,
        LoanDescription2: <span>{t("DashboardNormalUser.Loans.4.desc2")}</span>,
        LoanImage: './CarDemantur.jpg',
        LoanImage2: './AutoRequire.jpg'

      }
    ]

    return (
      <>
        {
          CharginIco === true ?
            <div className='flex justify-center items-center w-full h-full'><IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' /></div>
            :
            <>
              <p className="text-[24px] text-[#323643] text-center p-2 mb-4">
                {t("DashboardNormalUser.Loans.tittle")}
              </p>
              {
                LoanReq === false ?
                  <>
                    {
                      LoansProperties.map((element, i) => {
                        return (
                          <>
                            <div className="dash-card-info w-[90%] rounded-xl relative flex flex-row items-center">
                              <div className="flex items-center justify-center h-full w-fit">
                                <img
                                  src={OfferLoans(`${element.LoanImage}`)}
                                  alt=""
                                  className="dash-left-card-img"
                                />
                              </div>
                              <div className="dash-card-info-content">
                                <div className="content-text">
                                  <p className="text-[1.375rem] text-[#606470]">{element.LoanName}</p>
                                  <p className="text-[0.875rem] text-[#606470]">
                                    {element.LoanDescription}
                                  </p>
                                </div>
                                <div className="flex items-center justify-center card-info-btn">
                                  <button onClick={() => {
                                    setChangeBox(true)
                                    setParametros({
                                      LoanId: i,
                                      LoanName: element.LoanName,
                                      LoansDescription: element.LoanDescription,
                                      LoanDescription2: element.LoanDescription2,
                                      LoanImage: element.LoanImage,
                                      LoanImage2: element.LoanImage2
                                    })
                                  }} className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                                    {t("DashboardNormalUser.Loans.button")}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  :
                  <>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                      <img src={pendingReqIcon} alt="" className='w-[200px] mb-4' />
                      <span>{t("DashboardNormalUser.Loans.desc")}</span>
                    </div>
                  </>
              }
            </>
        }

      </>
    )

  }

  return (
    <div className="flex flex-row justify-between w-full h-full bg-transparent">
      {
        changeBox === false ?
          <>
            <div className="left-cards-container w-[49%] h-[100%] bg-white rounded-xl shadow-md flex flex-col items-center overflow-x-hidden overflow-y-auto py-4">
              {divLoans()}
            </div>
            <div className="w-[49%] h-full bg-white rounded-xl shadow-md py-4 overflow-x-hidden overflow-y-auto">
              {userLoans()}
            </div>
          </>
          :
          <>
            <ScrollToTop />
            {FormRequestLoan()}
          </>
      }
    </div>
  );
};
