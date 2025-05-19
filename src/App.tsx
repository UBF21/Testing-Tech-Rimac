import './App.css'
import './styles/_main.scss';

import { QuotationView } from './core/features/quotation/presentation/QuotationView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './core/components/layout/Layout';
import { LayoutPlanView } from './core/features/plans/presentation/Layout-PlanView';


function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<QuotationView />} />
              <Route path="/plans" element={<LayoutPlanView />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
