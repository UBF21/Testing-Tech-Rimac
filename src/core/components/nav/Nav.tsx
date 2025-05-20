import { useLocation } from "react-router-dom";
import rimacRojo from "../../../assets/logos/rimac-rojo.png";
import compraMedios from "../../../assets/logos/compra-medios.png";
import phone from "../../../assets/icons/phone.png";


export const Nav = () => {

  const location = useLocation();

    const routesWithGradient = [
        '/'
    ];

    const shouldHaveGradient = () =>  routesWithGradient.includes(location.pathname);

    const gradient = shouldHaveGradient() 
        ? "bg-gradient" 
        : "";


  return (
    <div className={`container-fluid ${gradient}`}>
      <div className='row align-items-center p-4 justify-content-between mt-3'>
        <div className="col-md-6 d-flex justify-content-center col-5">
          <img src={rimacRojo} width={100} height={80} alt="Rimac" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex  justify-content-center col-5">
          <img src={compraMedios} alt="Rimac" width={320} className="img-fluid d-none d-md-block" />
          <div className="d-block d-md-none">
            <div className="d-flex justify-content-end align-items-center">
              <div>
              <img src={phone} alt="Rimac" width={26} className="img-fluid" />
              </div>
              <div className="ml-2">
                <p className="p-0 m-0 font-weight-bold text-sm">(01) 411 6001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};