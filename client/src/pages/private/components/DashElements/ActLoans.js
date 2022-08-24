//scss
import '../../../static/assets/scss/loans_styles/CardLoans.scss'
import "../assets/scss/UserLoan.scss";
//components
import { ScrollToTop } from '../../../../components/ScrollToTop';
import { Dropdown } from '../../../../components/Dropdown';
//hooks
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDash } from "../../../../context/DashboardContext";
//icons
import { AiOutlineClose } from 'react-icons/ai'
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
  const [LoanReq, setLoanReq] = useState(false);
  const [Error, setError] = useState('');

  const { t } = useTranslation();


  const { LoansRequestsForm, CreateElements, getMyLoanReq } = useDash();

  useEffect(() => {
    (async () => {
      const resp = await getMyLoanReq(localStorage.getItem('authToken'));
      setLoanReq(resp.data.data);
    })()
  }, []);



  const UserElementsSalary = ['$450 y $499', '$500 y $999', '$700 y $1200', '$1200 en adelante',]
  const UserElementsLaboralStatus = ['Asalariado', 'Desempleado', 'Estudiante', 'Emprendedor',]

  const [loan_guarantor, setloan_guarantor] = useState();
  const [UserSalary, setUserSalary] = useState('');
  const [UserLaboralStatus, setUserLaboralStatus] = useState('');

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

  // useEffect(() => {
  //   (async () => {
  //     const res = await DematurClassicForm(localStorage.getItem('authToken'));
  //     // setCardOwner(res.data.data._id);
  //     console.log(res)
  //   })();
  // });

  useEffect(() => {
    setUserSalary('')
    setUserLaboralStatus('')
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
        UserLaboralStatus,
        Image1: Image1,
        Image2: Image2,
        Image3: Image3,
        Image4: Image4,
      };

      const LoansRequestsForm = new FormData();

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
      setChangeBox (false);

    } catch (error) {
      setError(error.response.data.error)
      console.log(error);
    }
  };

  const FormRequestLoan = () => {
    return (
      <div className="w-full h-full bg-white rounded-xl overflow-y-auto">
        { Error !== '' && Error }
        <div className="w-full h-[2rem] flex items-center justify-end">
          <button className="bg-transparent outline-none border-none" onClick={() => {
            setChangeBox(false)
            setParametros(null)
          }}>
            <AiOutlineClose className="text-[1.2rem] text-[#323643]" />
          </button>
        </div>
        <div className="h-fit w-full">
          <p className="text-center text-[1.4rem] mb-3">
            {parametros.LoanName}
          </p>
          <div className="min-h-fit w-full px-2 border-emerald-300 border-l-2">
            <p className="card-description text-[1rem] mx-auto mb-4">
              {parametros.LoanDescription2}
            </p>
          </div>
        </div>
        <div className="card-form-container">
          <form onSubmit={handleForm} className="main-card-form">
            <div className='flex flex-row w-full h-[30%] justify-start items-center px-[2rem] mb-5'>
              <div className='h-[70%] mr-5'>
                <p className='text-[1.1rem] text-[#606470]'>Rango Salarial</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setUserSalary} elements={UserElementsSalary} Elemento={UserSalary} />
                </div>
              </div>
              <div className='h-[70%] mr-5 '>
                <p className='text-[1.1rem] text-[#606470]'>Estatus Laboral</p>
                <div className='h-[2.5rem] w-[15rem]'>
                  <Dropdown setElement={setUserLaboralStatus} elements={UserElementsLaboralStatus} Elemento={UserLaboralStatus} />
                </div>
              </div>
              <div className="input-files h-[70%]">
                <p className='text-[1.1rem] text-[#606470]'>Fotocopia de DUI (Frontal)</p>
                <input type='file' accept='image/*' id='Constancia1' name='Constancia1' placeholder=' ' onChange={handleChangeFile1} autoComplete='off' />
                <label htmlFor="Constancia1" className=''>{ImageName1 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName1}</label>
              </div>
            </div>
            <div className="form-row-2">
              <div className="input-files mr-7">
                <p className='text-[1.1rem] text-[#606470]'>Fotocopia de DUI (Trasera)</p>
                <input type='file' accept='image/*' id='Constancia2' name='Constancia2' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' />
                <label htmlFor="Constancia2" className=''>{ImageName2 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName2}</label>
              </div>
              <div className="input-files mr-7">
                <p className='text-[1.1rem] text-[#606470]'>{t("CardsPage-Form.desc2")}</p>
                <input type='file' accept='image/*' id='Constancia3' name='Constancia3' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' />
                <label htmlFor="Constancia3" className=''>{ImageName3 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName3}</label>
              </div>
              <div className="input-files">
                <p className='text-[1.1rem] text-[#606470]'>Constancia de salario</p>
                <input type='file' accept='image/*' id='Constancia4' name='Constancia4' placeholder=' ' onChange={handleChangeFile4} autoComplete='off' />
                <label htmlFor="Constancia4" className=''>{ImageName4 === '' ? <span>{t("CardsPage-Form.button")}</span> : ImageName4}</label>
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

  const userLoans = () => {

    return (
      <>
        <p className="text-[1.5rem] text-[#323643] text-center p-2 ">
          Tus Créditos activos
        </p>
        <div className="mb-6 ml-5 card-tipe-tittle">
          <p className="text-[1.375rem] text-[#323643] p-0 m-0">préstamo</p>
          <hr className="p-0  m-0 w-[20%]" />
        </div>

        <div className="flex flex-col items-center w-full min-h-full">
          <div className="min-h-[20rem] w-[75%] shadow-lg rounded-xl mb-5 flex flex-col justify-center items-center dash-user-cards-container">
            <div className="h-[10%]">
              <p className="text-[1.375rem] text-center">Deamantur House</p>
              <img
                src={OfferLoans("./House.jpg")}
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
    const LoansProperties = [
      {
        LoanName: 'Crédito Personal',
        LoanDescription: 'Disfruta tu nueva vida con las mejores condiciones. Facilitamos los trámites para que realices tu proyectos con nuestro Crédito Personal.',
        LoanDescription2: 'Damos solución a tus necesidades financieras. Créditos Personales preferenciales para empleados. Somos los únicos que no te cobramos comisión.',
        LoanImage: './personal_loan.jpg'
      },
      {
        LoanName: 'Credito Empresa',
        LoanDescription: 'Si trabajas en tu propio negocio, te lo facilitamos con condiciones especiales para que consolides tus deudas o realices tus nuevos proyectos ',
        LoanDescription2: 'Especiales para que consolides tus deudas o realices tus nuevos proyectos o mejores las condiciones de tu empresa o emprendimiento.',
        LoanImage: './business_loan.jpg'
      },
      {
        LoanName: 'Vivienda Demantur',
        LoanDescription: 'Aprovecha condiciones preferenciales para solicitar los creditos que necesites para poder realizar la compra de tu vivienda nueva o usada.',
        LoanDescription2: 'Obtén muchas más posibilidades, beneficios superiores y un mayor nivel de compra y efectivo con la tarjeta Demantur Gold, con ella siempre tendrás ese respaldo de calidad y una mayor seguridad, confianza y ese respaldo que mereces. La Demantur Gold está pensada para aquellas personas como tú, que siempre buscan esa exigencia y buen nivel en una tarjeta de crédito',
        LoanImage: './House.jpg'
      },
      {
        LoanName: 'Auto Demantur',
        LoanDescription: 'Cambia tu estilo de vida con nuestro crédito decreciente para la adquisición de vehículo nuevo o usado',
        LoanDescription2: 'Te escuchamos, entendemos tu necesidad y te ofrecemos el plan más apto para tu proyecto',
        LoanImage: './CarDemantur.jpg'
      }
    ]

    return (
      <>
        <p className="text-[24px] text-[#323643] text-center p-2 mb-4">
          Solicita tu Credito
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
                                LoanDescription2: element.LoanDescription2
                              })
                            }} className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">
                              Solicitar
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
              <span>Tiene una Solicitud en progreso</span>
              {console.log(LoanReq)}
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
              {divLeft()}
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
