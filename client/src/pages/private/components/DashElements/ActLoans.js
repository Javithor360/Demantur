/* eslint-disable react-hooks/exhaustive-deps */
//scss
import '../../../static/assets/scss/loans_styles/CardLoans.scss'
import "../assets/scss/UserLoan.scss";
//components
import { ScrollToTop } from '../../../../components/ScrollToTop';
import { Dropdown } from '../../../../components/Dropdown';
//hooks
import { useEffect, useState } from "react";
import axios from "axios";
//img
import list from '../assets/img/cards-icons/list.png'
import one_req from '../assets/img/cards-icons/one_req.png'
import loan_a from '../assets/img/cards-icons/loan_a.png'
import { useDash } from "../../../../context/DashboardContext";
//icons
import { BsArrowLeft } from 'react-icons/bs'
import pendingReqIcon from '../assets/img/cards-icons/quote-request.png'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'
import { BiLoaderAlt } from 'react-icons/bi'
//translate
import { useTranslation } from "react-i18next";
import { ActLoansMoreInf } from './ActLoansMoreInf';
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'


//img
const OfferLoans = require.context(
  "../../../static/assets/img/all_loans",
  true
);

export const ActLoans = () => {

  const [changeBox, setChangeBox] = useState(false);
  const [ChangeBox2, setChangeBox2] = useState(false);
  const [parametros, setParametros] = useState(null);
  const [LoanReq, setLoanReq] = useState(null);
  const [Error, setError] = useState('');
  const [CharginIco, setCharginIco] = useState(true);
  const [Chargin, setChargin] = useState(false);
  const [MyLoan, setMyLoan] = useState(null);
  const [LoanImage, setLoanImage] = useState(null);
  const [NumberAccount, setNumberAccount] = useState('');

  // const handleClick = event => {
  //   event.currentTarget.disabled = true;
  // };

  const { t } = useTranslation();


  const { CreateElements, getMyLoanReq, getMyLoan, SavingAccounts } = useDash();

  useEffect(() => {
    (async () => {
      try {
        const resp = await getMyLoanReq(localStorage.getItem('authToken'));
        const resp2 = await getMyLoan(localStorage.getItem('authToken'));
        setLoanReq(resp.data.data);
        setMyLoan(resp2.data.data);
      } catch (e) {
        console.log(e)
      }
    })()
    console.log(SavingAccounts);
  }, []);


  setTimeout(() => {
    setCharginIco(false);
  }, 2000);



  const UserElementsSalary = ['$450 y $499', '$500 y $999', '$700 y $1200', <span> {t("DashboardNormalUser.Loans.form.UserElementsSalary.1")}</span>,]
  const UserTimeLoan = [`1 año`, `2 años`, `3 años`, `4 años`, '5 años']
  const UserElementAmount = ['$400', '$600', '$999', '$1300', '$1500', 'Otro tipo de monto',]
  const BusinessElementAmount = ['$2000', '$2300', '$2600', '$2900', '$3200', 'Otro tipo de monto',]
  const HouseLoanAmount = ['$2000', '$2200', '$2600', '$2800', '$3000', 'Otro tipo de monto',]
  const CarTypeRequest = ['Toyota', 'Mazda', 'Nissan', 'Chevrolet', 'Honda', 'Hyundai',]
  const MyAccounts = SavingAccounts.map((el) => { return el.accountNumber })


  const [loan_guarantor, setloan_guarantor] = useState();
  const [UserSalary, setUserSalary] = useState('');
  const [TimeLoan, setTimeLoan] = useState('');
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
    setTimeLoan('')
    setAmountrequest('')
    setImageName1('')
    setImageName2('')
    setImageName3('')
    setImageName4('')
  }, [changeBox]);


  useEffect(() => {
    if (MyLoan != null) {
      if (MyLoan.LoanId === 0) {
        setLoanImage('./personal_loan.jpg')
      } else if (MyLoan.LoanId === 1) {
        setLoanImage('./business_loan.jpg')
      } else if (MyLoan.LoanId === 2) {
        setLoanImage('./HousinRequire.jpg')
      } else if (MyLoan.LoanId === 3) {
        setLoanImage('./AutoRequire.jpg')
      }
    }
  }, [MyLoan]);

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
        TimeLoan,
        Amountrequest,
        AccountN: NumberAccount,
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
      await axios.post(
        "http://localhost:4000/api/Loans/loan-requests",
        LoansRequestsForm,
        PrivateConfig
      );

      CreateElements(localStorage.getItem("authToken"));


      setTimeout(() => {
        setChargin(false)
        setUserSalary('')
        setTimeLoan('')
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
            className="w-[25.5rem] h-[15rem] rounded-lg  mx-auto block mt-4 mb-5 shadow-lg"
          />
          <div className="min-h-fit w-[100%] px-2 border-emerald-300 border-l-2">
            <p className="w-[80%] border-text text-[1rem] mx-auto mb-4">
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
                <p className='text-[1.1rem] text-[#606470]'>plazo</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setTimeLoan} elements={UserTimeLoan} Elemento={TimeLoan} />
                </div>
              </div>

              <div className='h-[70%] mr-5 '>
                <div className='h-[2.5rem] w-[15rem]'>
                  {
                    parametros.LoanId === 0 ?
                      <div className='h-[70%] mr-5'>
                        <p className='tex-[1.1rem] text-[#606470]'> Monto a Solicitar</p>
                        <div className='h-[2.5rem] w-[15rem]'>
                          <Dropdown setElement={setAmountrequest} elements={UserElementAmount} Elemento={Amountrequest} />
                        </div>
                      </div>
                      :
                      parametros.LoanId === 1 ?
                        <div className='h-[70%] mr-5'>
                          <p className='tex-[1.1rem] text-[#606470]'>Monto a Solicitar</p>
                          <div className='h-[2.5rem] w-[15rem]'>
                            <Dropdown setElement={setAmountrequest} elements={BusinessElementAmount} Elemento={Amountrequest} />
                          </div>
                        </div>
                        :
                        parametros.LoanId === 2 ?
                          <div className='h-[70%] mr-5'>
                            <p className='tex-[1.1rem] text-[#606470]'>Monto a Solicitar</p>
                            <div className='h-[2.5rem] w-[15rem]'>
                              <Dropdown setElement={setAmountrequest} elements={HouseLoanAmount} Elemento={Amountrequest} />
                            </div>
                          </div>
                          :
                          <div className='h-[70%] mr-5'>
                            <p className='tex-[1.1rem] text-[#606470]'> Modelo de vehiculo</p>
                            <div className='h-[2.5rem] w-[15rem]'>
                              <Dropdown setElement={setAmountrequest} elements={CarTypeRequest} Elemento={Amountrequest} />
                            </div>
                          </div>
                  }

                </div>
              </div>

              <div className='h-[70%] mr-5 '>
                <p className='text-[1.1rem] text-[#606470]'>Cuenta propia</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setNumberAccount} elements={MyAccounts} Elemento={NumberAccount} />
                </div>
              </div>
            </div>
            <div className="form-row-2">
              <div className="input-files h-[70%]">
                <p className='text-[1.1rem] text-[#606470]'>{t("DashboardNormalUser.Loans.form.tittle3")}</p>
                <input type='file' accept='image/*' id='Constancia1' name='Constancia1' placeholder=' ' onChange={handleChangeFile1} autoComplete='off' />
                <label htmlFor="Constancia1" className=''>{ImageName1 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName1}</label>
              </div>
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
              {
                MyLoan != null ?
                  LoanReq === false &&
                  <>
                    <>
                      <p className="text-[1.5rem] text-[#323643] text-center p-2 ">
                        {t("DashboardNormalUser.Loans.tittle2")}

                      </p>
                      <div className="mb-6 ml-5 card-tipe-tittle">
                        <p className="text-[1.375rem] text-[#323643] p-0 m-0">{t("DashboardNormalUser.Loans.tittle3")}</p>
                        <hr className="p-0  m-0 w-[20%]" />
                      </div>

                      <div className="flex flex-col items-center w-full h-fit">
                        <div className="min-h-[30rem] w-[75%] shadow-lg rounded-xl mb-5 flex flex-col justify-center items-center dash-user-cards-container">
                          <div className="h-[10%]">
                            <p className="text-[1.375rem] text-center">Demantur {MyLoan.details.loan_type}</p>
                            <img
                              src={OfferLoans(LoanImage)}
                              alt=""
                              className="w-[200px] mt-3 mb-3"
                            />
                          </div>
                          <div className="mt-6">
                            <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white" onClick={() => { setChangeBox2(true) }}>
                              {t("DashboardNormalUser.Loans.button2")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  </>
                  :
                  <>
                    {
                      LoanReq === false ?
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                          <img src={list} alt="" className='w-[85px] mb-3' />
                          <p>Solicite un prestamo</p>
                        </div>
                        :
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                          <img src={one_req} alt="" className='w-[200px] mb-3' />
                          <p>Tiene Una solicitud en curso</p>
                        </div>
                    }
                  </>
              }
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
                MyLoan == null ?
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
                                        LoanImage2: element.LoanImage2,
                                        LoanSetId: element.LoanId
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
                        <img src={list} alt="" className='w-[200px] mb-4' />
                        <span>Espere la confirmación de su solicitud</span>
                      </div>
                    </>
                  :
                  <>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                      <img src={loan_a} alt="" className='w-[200px] mb-4' />
                      <span>Usted ya tiene un credito activo</span>
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
        ChangeBox2 === false ?
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
          :
          <>
            <ActLoansMoreInf setChangeBox2={setChangeBox2} setMyLoan={setMyLoan} MyLoan={MyLoan} LoanImage={LoanImage} />
          </>
      }
    </div>
  );
};
