//icons
import {
  AiOutlineCloudUpload as CloudIcon,
  AiOutlineCloud as SuccesClud,
} from "react-icons/ai";
//hooks

import {VscLoading} from "react-icons/vsc"

import { useEffect, useState } from "react";
import { useDash } from "../../../context/DashboardContext";
import Cleave from "cleave.js/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { JsonWebTokenError } from "jsonwebtoken";

export const CreateSavingAccForm = () => {
  const { QueryCreateSavingsAccount, CreateElements } = useDash();
  const navigate = useNavigate();

  const [AccountOwner, setAccountOwner] = useState();

  const [DuiNumber, setDuiNumber] = useState();

  const [Reason1, setReason1] = useState();

  const [Reason2, setReason2] = useState();

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState("");

  const [Image2, setImage2] = useState();
  const [ImageName2, setImageName2] = useState("");

  const [Image3, setImage3] = useState();
  const [ImageName3, setImageName3] = useState("");

  const [CharginButton, setCharginButton] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await QueryCreateSavingsAccount(localStorage.getItem('authToken'));
      setAccountOwner(res.data.data._id);
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

  useEffect(() => {
    Imagefunc(ImageName, setImageName);
  }, [ImageName]);

  useEffect(() => {
    Imagefunc(ImageName2, setImageName2);
  }, [ImageName2]);

  useEffect(() => {
    Imagefunc(ImageName3, setImageName3);
  }, [ImageName3]);

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
      setCharginButton(true);
      const PrivateConfig = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("authToken"),
        },
      };

      const DatosForm = {
        AccountOwner: AccountOwner,
        Reason1: Reason1,
        Reason2: Reason2,
        Image: Image,
        Image2: Image2,
        Image3: Image3,
      };

      const form = new FormData();

      for (let key in DatosForm) {
        form.append(key, DatosForm[key]);
      }

      await axios.post(
        "http://localhost:4000/api/accounts/create/first-savings",
        form,
        PrivateConfig
      );

      setTimeout(() => {
        setCharginButton(false)
      }, 1500)

      CreateElements(localStorage.getItem("authToken"));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 h-[53rem] w-[50rem] flex flex-col items-center">
      <p className="text-center text-[1.6rem] text-[#606470] mb-0">
        Formulario de creación de Cuenta de Ahorro
      </p>
      <hr className="w-3/4" />
      <form onSubmit={handleForm} className="w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-center text-[1.2rem] text-[#606470]">
            Identificación
          </p>
          <div className="input-class">
            <Cleave
              id="Dui"
              name="Dui"
              placeholder=" "
              options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }}
              onChange={(e) => setDuiNumber(e.target.value)}
              value={DuiNumber}
              autoComplete="off"
              className="input-form"
            />
            <label htmlFor="Dui" className="label-form">
              Número de DUI
            </label>
          </div>
          <p className="text-[#606470] text-[1.2rem] mt-4">Imagen del DUI</p>
          <div className="uploadImgContainer rounded-md w-[35%]">
            <input
              type="file"
              accept="image/*"
              id="DuiImage"
              name="DuiImage"
              placeholder=" "
              onChange={handleChangeFile}
              autoComplete="off"
              className=""
            />
            <label
              htmlFor="DuiImage"
              className="flex items-center justify-between w-full px-4 py-2 mr-1"
            >
              {ImageName === "" ? "Subir Imagen" : ImageName}
              {ImageName === "" ? (
                <CloudIcon className="CloudIcon1" />
              ) : (
                <SuccesClud className="CloudIcon1" />
              )}
            </label>
          </div>
          <hr className="w-3/4" />
          <p className="text-[#606470] text-[1.2rem] mt-2">
            Constancias de referencias
          </p>
          <div className="flex justify-center w-full">
            <div className="w-[35%] mr-5">
              <p className="text-center">Referencia Personal</p>
              <div className="w-full rounded-md uploadImgContainer">
                <input
                  type="file"
                  accept="image/*"
                  id="References1"
                  name="References1"
                  placeholder=" "
                  onChange={handleChangeFile2}
                  autoComplete="off"
                  className=""
                />
                <label
                  htmlFor="References1"
                  className="flex items-center justify-between w-full px-4 py-2 mr-1"
                >
                  {ImageName2 === "" ? "Subir Imagen" : ImageName2}
                  {ImageName2 === "" ? (
                    <CloudIcon className="CloudIcon1" />
                  ) : (
                    <SuccesClud className="CloudIcon1" />
                  )}
                </label>
              </div>
            </div>
            <div className="w-[35%]">
              <p className="text-center">Referencia Laboral</p>
              <div className="w-full rounded-md uploadImgContainer">
                <input
                  type="file"
                  accept="image/*"
                  id="References2"
                  name="References2"
                  placeholder=" "
                  onChange={handleChangeFile3}
                  autoComplete="off"
                  className=""
                />
                <label
                  htmlFor="References2"
                  className="flex items-center justify-between w-full px-4 py-2 mr-1 "
                >
                  {ImageName3 === "" ? "Subir Imagen" : ImageName3}
                  {ImageName3 === "" ? (
                    <CloudIcon className="CloudIcon1" />
                  ) : (
                    <SuccesClud className="CloudIcon1" />
                  )}
                </label>
              </div>
            </div>
          </div>
          <hr className="w-3/4 mt-4" />
          <div className="flex justify-center w-full">
            <div className="flex flex-col justify-center items-center w-2/5 mr-4">
              <div className="h-[4rem] flex items-center">
                <p className="text-center">¿Por qué quieres abrir esta cuenta?</p>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full max-h-[10rem] min-h-[10rem] outline-none"
                onChange={(e) => setReason1(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col justify-center w-2/5">
              <div className="h-[4rem] flex items-center">
                <p className="text-center">
                  Describa las proyecciones del dinero a manejar en la cuenta
                </p>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full max-h-[10rem] min-h-[10rem] outline-none"
                onChange={(e) => setReason2(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="mt-5 create-saving-acc-btn" disabled={CharginButton}>
            {CharginButton ? <VscLoading className="animate-spin"/> : "Enviar" }
          </button>
        </div>
      </form>
    </div>
  );
};
