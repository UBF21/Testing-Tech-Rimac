import { Divider } from "@mui/material";

export const Footer = () => {
  return (
    <div className="container-fluid mt-3 bg-dark p-3">
      <div className='row align-items-center'>
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <img src="src\assets\logos\rimac-blanco.png" width={100} height={80} alt="Rimac" className="img-fluid" />
        </div>
        <div className="col-12 d-lg-none mt-4 mb-4">
          <Divider className="bg-light" />
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <p className="text-light">© 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </div>
  );
};