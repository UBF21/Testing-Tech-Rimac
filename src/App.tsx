import './App.css'
import './styles/_main.scss';
import { Footer } from './core/components/footer/Footer';
import { Nav } from './core/components/nav/Nav';
// import { Quotation } from './core/features/quotation/Quotation';
import { Plans } from './core/features/plans/Plans';


function App() {

  return (
    <>
      <div>
        <Nav />
      </div>
      {/* <div className='container mt-3'>
        <div className='row'>
          <div className='col-6'>
            <Button variant="contained">Text</Button>
          </div>
          <div className='col-6'>
            <Button variant="contained">Text</Button>
          </div>
          <div className='col-6'>
            <Button variant="contained">Text</Button>
          </div>
        </div>
      </div> */}

      <Plans/>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
