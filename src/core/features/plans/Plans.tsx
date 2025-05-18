import { Button, Card, Radio, Step, StepButton, Stepper } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Plans = () => {

    const steps = [
        'Planes y coberturas',
        'Resumen'
    ];


    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center bg-primary-light">
                <div className="w-75 mt-4">
                    <Stepper nonLinear activeStep={1}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepButton color="inherit">
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
            <div className="container mt-4">

                <div className="d-flex align-items-center">
                    <div>
                        <ArrowCircleLeftOutlinedIcon fontSize="medium" />
                    </div>
                    <div>
                        <Button variant="text" className="m-0 p-0">
                            volver
                        </Button>
                    </div>
                </div>


                <div className="row mb-3 mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <h1>Rocío ¿Para quién deseas cotizar?</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 d-flex justify-content-center">
                        <Card className="w-100 p-3 rounded-xxxl" elevation={3}>
                            <p className="text-end">
                                <Radio
                                    // checked={selectedValue === 'a'}
                                    value="a"
                                    name="radio-buttons"
                                    color="success"
                                    size="medium"
                                    id="A"
                                    checkedIcon={<CheckCircleIcon fontSize="large" />}
                                />
                            </p>
                            <img src="src\assets\icons\para-mi.png" width={50} alt="para mi" />
                            <h2>Para mi</h2>
                            <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
                        </Card>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                        <Card className="w-100 p-3 rounded-xxxl" elevation={3}>
                            <p className="text-end">
                                <Radio
                                    // checked={selectedValue === 'a'}
                                    value="b"
                                    name="radio-buttons"
                                    color="success"
                                    id="B"
                                    checkedIcon={<CheckCircleIcon fontSize="large" />}
                                />
                            </p>
                            <img src="src\assets\icons\para-mi.png" width={50} alt="para mi" />
                            <h2>Para alguien más</h2>
                            <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}