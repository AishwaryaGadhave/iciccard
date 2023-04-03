import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillPhone } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { FaBan } from "react-icons/fa";

function App() {


  return (
    <div className="App">
    <div className='row d-flex justify-content-center'>
    <div className='col-lg-5 mt-4'>
   
    <div className='col-lg-12 card_background p-3'>
    <div className='d-flex'>
    <div className='col-lg-6 text-start'>

    <h3> <img width={30} height={50} src={require('../src/logo1.png')} /> <b>ICICI LOMBARD </b></h3>
    </div>
    <div className='col-lg-6 text-end'>
   <button className='button button4'>Pre Auth</button>
    </div>
    </div>
           
    </div>

    <div className='col-lg-12  p-3'>
    <div className='d-flex'>
    <div className='col-lg-6 text-start'>
    <div className='d-flex'>
    <div>
    <img width={60} height={100} src={require('../src/logo192.png')} />
    </div>
    <div className='ms-4 mt-3'>
    <li className='list_style'><b>Dinesh Patel</b></li>
    <li className='list_style'>AL NO:1234554321</li>
    </div>
    </div>
 
     </div>
    <div className='col-lg-6 text-end'>

    <div className='ms-4'>
    <p className='me-4'><b>Amount</b></p>
    <span className='button1 button41'>Rs. 30,000</span>
    </div>
    </div>
    </div>
           
    </div>

    <div className='col-lg-12 ps-3 pe-3'>
    <div className='d-flex'>
    <div className='col-lg-4 text-start'>
    <li className='list_style'><b>Admission Date</b></li>
    <li className='list_style list_color'> <b>12 jan 2023</b></li>
    </div>
    <div className='col-lg-5 text-center'>
    <li className='list_style'><b>Discharge Date</b></li>
    <li className='list_style list_color1'><b>17 Jan 2023</b></li>
    </div>
    <div className='col-lg-3 '>
    <div className='d-flex'>
    <div className='icon_color' >
    <AiFillPhone className='font_size' style = {{transform: 'rotate(90deg)' }} /> 
    </div>
    <div className='icon_color ms-2'>
    <FiLoader className='font_size' />
    </div>
    <div className='icon_color  ms-2'>
    <FaBan className='font_size' />
    </div>

    </div>
   
     </div>
    </div>
        
   <div className=''>



   <section className="step-wizard">
        <ul className="step-wizard-list">
          <li className="step-wizard-item">
         
            <span className="progress-count " style={{background: "orange"}}>1</span>
            <span className="progress-label ">12 jan 09:10:57</span>
          </li>
          <li className="step-wizard-item ">
       
            <span className="progress-count"  style={{background: "skyblue"}}>2</span>
            <span className="progress-label">15 jan 03:10:57</span>
          </li>
          <li className="step-wizard-item">
        
            <span className="progress-count" style={{background: "green"}}>3</span>
            <span className="progress-label">17 jan 03:47:57</span>
          </li>
          <li className="step-wizard-item current-item">
        
            <span className="progress-count" style={{background: "red"}}></span>
           
          </li>
        </ul>
      </section>

   </div>

    </div>


    
    </div>


    </div>



  
    </div>
  );
}

export default App;
