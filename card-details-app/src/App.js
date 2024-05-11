import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
  const [formData, setFormData] = useState({ cardholderName: 'KELECHI UGWU', cardNumber: null, expiryMonth: null, expiryYear: null, cvc: null })

  return (
    <div className="container">
      <Cards
       cardholderName = {formData.cardholderName.toUpperCase()}
       cardNumber = {formData.cardNumber}
       expiryMonth = {formData.expiryMonth}
       expiryYear = {formData.expiryYear}
       cvc = {formData.cvc}
       />
      <Form 
      setFormData={setFormData}
      formData={formData}
      />
    </div>
  );
}

export default App;
