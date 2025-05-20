import { Divider } from "@mui/material";
import rimacBlanco from "../../../assets/logos/rimac-blanco.png";


export const Footer = () => {
  return (
    <footer className="container-fluid bg-dark p-4">
      <div className='row align-items-center'>
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <img src={rimacBlanco} width={70} height={50} alt="Rimac" className="img-fluid" />
        </div>
        <div className="col-12 d-lg-none mt-4 mb-4">
          <Divider className="bg-light" />
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <p className="text-light">© 2025 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  );
};