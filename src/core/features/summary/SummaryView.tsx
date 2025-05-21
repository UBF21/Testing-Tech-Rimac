import PeopleIcon from '@mui/icons-material/People';
import { Card, Divider } from '@mui/material';
import { useQuotationStore } from '../../shared/stores/quotationStore';
import { usePlanStore } from '../../shared/stores/planStore';
import { useUserStore } from '../../shared/stores/userStore';
import { usePlanOptionStore } from '../../shared/stores/PlanOptionStore';
import { calculateDiscountedPrice } from '../../shared/utils/utils';
import { useEffect } from 'react';


export const SummaryView = () => {

    const quotation = useQuotationStore((state) => state.quotation);
    const plan = usePlanStore((state) => state.plan);
    const user = useUserStore((state) => state.user);
    const planOption = usePlanOptionStore((state) => state.planOption);


    useEffect(()=> {
        console.log(planOption);
    },[])

    return (
        <div className="container mt-5 mb-5 p-4">
            <h1 className="mb-3 ml-2 ml-md-0 text-md-start anim-in text-xxxl">Resumen del seguro</h1>

            <Card className="w-100 p-4 rounded-xxxl shadow-4 shadow-color-info-light anim-in">

                <p className='text-base font-weight-semibold text-lg'>precios calculados para :</p>
                <div className="d-flex justify-content-start align-items-center">
                    <p className='mr-2'><PeopleIcon fontSize='large' /></p>
                    <p className='text-base text-lg'>{user?.name} {user?.lastName}</p>
                </div>

                <Divider className="bg-gray-400 mt-2 mb-2" />

                <div>
                    <p className='font-weight-bold'>Responsable de Pago</p>
                    <p className='text-base text-lg'>DNI: {quotation.nroDocument}</p>
                    <p className='text-base text-lg'>celular: {quotation.phone}</p>
                </div>

                <div>
                    <p className='font-weight-bold '>Plan elegido</p>
                    <p className='text-base text-lg text-Neutrals-700'>{plan?.name}</p>
                    <p className='text-base text-lg text-Neutrals-700'>Costo del Plan : ${planOption?.value === 'for-someone-else' ? calculateDiscountedPrice(plan?.price ?? 0) : plan?.price} al mes</p>
                </div>
            </Card>

        </div>
    );
};