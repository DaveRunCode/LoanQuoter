import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatMoney, calculateTotalPay } from './helpers';

function App() {

  const [quantity, setQuantity] = useState(25000);
  const [month, setMonth] = useState(6);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);

  //El useEffect renderiza cada vez que se modifica algun componente que este en el arreglo 'quantity, month' dentro de este state se poner codigo que se ejecutara inmediato. Se pueden tener multiples useEffect en esos casos que requieres usar varias dependencias.
  useEffect(() =>{
    const resultTotalPay = calculateTotalPay(quantity, month)
    setTotal(resultTotalPay)
    
  }, [quantity, month, total]);

  useEffect(()=> {
    // Renderizar el calcular el pago mensual.
    setPay(total / month)
  },[total])

  const MIN = 100;
  const MAX = 50000;
  const STEP = 100;

  function handleChange (e){
    //El simbolo de + sirve para convertir el string "e" a numero "+e.target.value"
    setQuantity(+e.target.value);
  }

  function handleCLickDecrement(){
    let valor = quantity - STEP;
    if(valor < MIN){
      valor = MIN;
      return;
    }

    setQuantity(valor);
  }

  function handleCLickIncrement(){
    let valor = quantity + STEP;
    if(valor > MAX){
      valor = MAX;
      return;
    }

    setQuantity(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white rounded-lg p-10 shadow-lg">
      {/* Este componente "Header" esta ubicado en la carpeta components */}
      <Header /> 

      <div className='flex justify-between my-6'>
        {/* En los botones de - y + se trabajaron como componentes, en donde le pasamos dos props llamados 'operator y 'fn. En el componente se puede visualizar los props utilizados con destructuring. */}
        <Button 
          operator='-'
          fn={handleCLickDecrement}
        />  
        <Button 
          operator='+'
          fn={handleCLickIncrement}
        /> 

    </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p 
        className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
          {/* formatMoney es un Helper que usa una API de JS para formatear la cantidad a la divisa que necesitemos */}
        {formatMoney(quantity)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Choose a <span className='text-indigo-600'>term</span> to pay
      </h2>

      <select 
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={month}
        /* En este caso no se uso una funcion 'handle' sino que usamos directamente guardar el valor de cambio en el setMonth */
        onChange={ e => setMonth(+e.target.value)}
      >
        <option value="6">6 Month</option>
        <option value="12">12 Month</option>
        <option value="24">24 Month</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Payment <span className='text-indigo-600'>summary</span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{month} Months</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatMoney(total)} Total to pay</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatMoney(pay)} Monthly</p>
      </div>
    </div>
  )
}

export default App
