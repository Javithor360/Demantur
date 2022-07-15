//scss
import "./assets/scss/Conditions_page.scss";

//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";


export const TermsandConditions = () => {
  return (
    <>
      <Navbar />

      <div className="conditions-tittle">
        <p>Términos y condiciones</p>
        <hr />
      </div>
      <br></br>
      <div className="Tittle">
        <h1>CONDICIONES Y TÉRMINOS DE USO</h1>
      </div>
      <br></br>

      <div className="Conditions-description">
        <p>
          Por el acceso a esta dirección y a cualquiera de sus páginas (en
          adelante, la Web) usted tendrá consideración de usuario y se presume
          que acepta estas Condiciones Generales. El acceso a alguna de las
          páginas de esta Web puede estar limitado por las leyes y disposiciones
          de las distintas jurisdicciones de los países. Si usted se encuentra
          en esta circunstancia, no tendrá acceso a parte o a toda la Web de BAC
          Demantur.
        </p>
      </div>
      <br />
      <div className="Conditions-description">
        <p>
          La información contenida en esta Web, incluidos ciertos productos y
          servicios, está destinada a su distribución o uso, básicamente, por
          particulares, compañías, sociedades, trusts, personas físicas o
          jurídicas o cualquier otra entidad (en adelante "Personas").
          <br />
        </p>
      </div>
      <div className="Responsabilidades">
        <h4>RESPONSABILIDAD Y GARANTÍA DE BAC DEMANTURE</h4>
      </div>
      <br />

      <div className="Conditions-description">
        <p>
          BAC Demantur ha obtenido la Información y los materiales incluidos en
          la Web de fuentes consideradas como fiables, tomando medidas
          razonables para asegurarse que la Información contenida sea correcta.
          <b />
          En ningún caso, BAC Demantur, sus sucursales, y/o sus administradores,
          empleados y personal autorizado serán responsables de cualquier tipo
          de perjuicio, pérdidas, reclamaciones o gastos de ningún tipo, tanto
          si proceden como si no del uso de la Web, de la Información adquirida
          o accedida por o a través de ésta, de virus informáticos, de fallos
          operativos o de interrupciones en el servicio o transmisión, o fallos
          en la línea; el uso de la Web, tanto por conexión directa como por
          vínculo u otro medio, constituye un aviso a cualquier usuario de que
          estas posibilidades pueden ocurrir.
        </p>
      </div>
      <div className="Conditions-description">
        <p>
          En algunas ocasiones, esta Web utiliza Cookies (tanto como
          propietarias como de terceros), pequeños ficheros de datos que se
          generan en el ordenador del usuario y que permiten obtener la
          siguiente información:
        </p>
      </div>
      <ul style={{ listStyleType: "Square" }} className="list-cookies">
        <li>
          Fecha y hora de la última vez que el usuario visitó la pagina Web.
        </li>
        <li>
          Diseño de contenidos que el usuario seleccionó en su primera vista a
          la Web.
        </li>
        <li>
          Elementos de seguridad que intervienen en el control de acceso a las
          áreas restringidas.
        </li>
        <li>
          El usuario tiene la opción de impedir la generación de Cookies,
          mediante la selección de la correspondiente opción en su programa
          navegador, sin embargo este proceso pordria provocar un mal
          fincionamiento de la pagina
        </li>
      </ul>
      <div className="Responsabilidades">
        <h4>CONFIDENCIALIDAD</h4>
      </div>
      <br />

      <div className="Conditions-description">
        <p>
          Toda la información que Bac Demantur recabe del Usuario es tratada
          con absoluta confidencialidad conforme las disposiciones legales
          aplicables. Bac Demantur se obliga a mantener confidencial la
          información que reciba del Usuario que tenga dicho carácter conforme a
          las disposiciones legales aplicables, en La República de El Salvador,
          <b> No</b> asumimos ninguna obligación de mantener confidencial
          cualquier otra información que el Usuario le proporcione, que no
          ostente tal carácter; así como, la información que se obtenga a través
          de las Cookies.
        </p>
      </div>

      <Footer />
    </>
  );
};
