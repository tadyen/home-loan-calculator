import { useId } from 'react';

function CalcFieldsetInputs(){
  const loanInputId = useId();
  const monthsInputId = useId();
  const rateInputId = useId();

  return (
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <legend className="fieldset-legend">Calculator</legend>
    <div className="flex flex-row gap-4">
      <label className="label" htmlFor={loanInputId}>Loan $</label>
      <input type="number" id={loanInputId} className="input" placeholder="eg. 500000 (500k)" defaultValue={500000}/>

      <label className="label" htmlFor={monthsInputId}>Months</label>
      <input type="number" id={monthsInputId} className="input" placeholder="eg. 360 (30 years)" defaultValue={360}/>

      <label className="label" htmlFor={rateInputId}>Rate %p.a.</label>
      <input type="number" id={rateInputId} className="input" placeholder="eg. 6.05 (6.05 % p.a.)" defaultValue={6}/>
    </div>
  </fieldset>
  )
}


function CalcFieldsetOutputs(){
  return (
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <legend className="fieldset-legend">Result</legend>
    <div className="flex flex-row gap-4">
      <label className="label">Monthly Amount$</label>
      <input type="number" className="input" disabled={true} defaultValue={3}/>

      <label className="label">Total</label>
      <input type="number" className="input" disabled={true} defaultValue={2}/>

      <label className="label">Interest</label>
      <input type="number" className="input" disabled={true} defaultValue={1}/>
    </div>
  </fieldset>
  )
}


function App() {

  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center h-screen bg-gray-100 border border-red-500">
        <CalcFieldsetInputs />
        <CalcFieldsetOutputs />
      </div>
    </>
    )
}

export default App
