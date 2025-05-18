export const Nav = () => {
  return (
    <div className="container-fluid mt-3">
      <div className='row align-items-center justify-content-between'>
        <div className="col-md-6 d-flex justify-content-center col-5">
          <img src="src\assets\logos\rimac-rojo.png" width={100} height={80} alt="Rimac" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex  justify-content-center col-5">
          <img src="src\assets\logos\compra-medios.png" alt="Rimac" width={320} className="img-fluid d-none d-md-block" />
          <div className="d-block d-md-none">
            <div className="d-flex justify-content-end align-items-center">
              <div>
              <img src="src\assets\icons\phone.png" alt="Rimac" width={30} className="img-fluid" />
              </div>
              <div className="ml-2">
                <p className="p-0 m-0 font-weight-bold text-lg">(01) 411 6001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};