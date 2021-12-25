import './App.css';
import AdmissionForm from './components/AdmissionForm';
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} width="150px" className="row mx-auto m-2" alt="logo" />
      <AdmissionForm />
      <div className="mt-3 bg-dark footer">
        <p className="text-white text-center">All Rights Reserved © Addvic Technology (OPC) Pvt Ltd.</p>
      </div>
    </div>
  );
}

export default App;
