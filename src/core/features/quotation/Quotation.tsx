import { Checkbox, Divider, FormControlLabel, FormHelperText, Link, MenuItem, Select, TextField } from "@mui/material";

export const Quotation = () => {
    return (
        
        <div className="container d-flex justify-content-center align-items-center mt-3 mb-3">
            <div className="row p-2 p-md-0">
                <div className="col-lg-6 col-5 order-2">
                    <img src="src\assets\images\image-principal.png" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-7 mt-4 mt-md-0 d-lg-none d-md-none order-1">
                    <span className="chip font-weight-bold text-xs">Seguro Salud Flexible</span>
                    <h1 className="font-weight-bold text-xxxxl line-height-md">Creado para ti y tu familia</h1>
                </div>
                <div className="col-12 d-lg-none mt-3 mb-3 d-md-none order-3">
                    <Divider className="bg-gray-400 mt-2 mb-2" />
                </div>
                <div className="col-12 d-lg-none mt-3 d-md-none order-3">
                    <p className="font-weight-bold text-lg">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                </div>
                <div className="col-lg-6 mt-4 mt-md-0 order-4">
                    <div className="row ml-md-5 ml-lg-5 ml-xl-5 ml-xxl-5">
                        <div className="col-12 d-none d-md-block">
                            <span className="chip">Seguro Salud Flexible</span>
                            <h1 className="font-weight-semibold">Creado para ti y tu familia</h1>
                            <p className="font-weight-semibold text-lg">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        </div>
                        <div className="col-4 mb-3 mr-0 pr-0">
                            <Select
                                value={"DNI"}
                                label="Age"
                                variant="outlined"
                                displayEmpty
                                className="w-100"
                                id="demo-simple-select"
                            >
                                <MenuItem value={'DNI'}>DNI</MenuItem>
                                <MenuItem value={'CE'}>CE</MenuItem>
                            </Select>
                            <FormHelperText>Without label</FormHelperText>
                        </div>
                        <div className="col-8 mb-3 ml-0 pl-0">
                            <TextField
                                id="outlined-error"
                                label="Nro. de documento"
                                className="w-100"
                                required={true}
                            />
                            <FormHelperText>Without label</FormHelperText>
                        </div>
                        <div className="col-12 mb-3">
                            <TextField
                                id="outlined-celular"
                                label="Celular"
                                value={""}
                                className="w-100"
                                required={true}
                                placeholder="99-999-999"
                            />
                            <FormHelperText>Without label</FormHelperText>
                        </div>
                        <div className="col-12">
                            <FormControlLabel control={<Checkbox defaultChecked className="text-dark" />} required={true} label="Acepto lo Política de Privacidad" className="mt-0 mb-0" />
                        </div>
                        <div className="col-12 mb-3">
                            <FormControlLabel control={<Checkbox defaultChecked className="text-dark" />} required={true} label="Acepto la Política Comunicaciones Comerciales" className="mt-0 mb-0" />
                        </div>
                        <div className="col-12 mb-3">
                            <Link href="#" underline="always" className="text-dark">
                                <span className="font-weight-semibold text-sm">Aplican Términos y Condiciones.</span>
                            </Link>
                        </div>
                        <div className="col-12">
                            <button className="btn-dark btn-lg rounded-xxxl font-weight-semibold mt-4">Cotizar Aqui</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
};