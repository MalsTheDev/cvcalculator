import React, { useState } from 'react'

// Data
// - Age
// – Gender
// – Total cholesterol levels
// – HDL cholesterol levels
// – Systolic blood pressure
// – Smoking status (1 for smoker, 0 for non-smoker)

function Calculator() {
    const [age, setAge] = useState()
    const [gender, setGender] = useState('male')
    const [totalChol, setTotalChol] = useState()
    const [hdlChol, setHdlChol] = useState()
    const [systolicBP, setSystolicBP] = useState()
    const [smoker, setSmoker] = useState(1)
    const [risk, setRisk] = useState(0)
    const [riskSum, setRiskSum] = useState('')

    const calculateRisk = () => {
        const LMen = 52.00961 * Math.log(age) + 20.014077 * Math.log(totalChol) 
        + (-0.905964) * Math.log(hdlChol) + 1.305784 * Math.log(systolicBP) 
        + 12.096316 * smoker + (-4.605038) * Math.log(age) * Math.log(totalChol) 
        - 2.84367 * Math.log(age) * smoker + (-2.93323) * Math.log(age) * Math.log(age) 
        - 172.300168;

        if((1 - Math.pow(0.9402, Math.exp(LMen))) * 100 < 5) {
            setRiskSum('Low Risk')
        } else if((1 - Math.pow(0.9402, Math.exp(LMen))) * 100 < 10) {
            setRiskSum('Moderate Risk')
        } else if((1 - Math.pow(0.9402, Math.exp(LMen))) * 100 < 20) {
            setRiskSum('Strong Risk')
        } else {
            setRiskSum('High Risk')
        }

        setRisk(1 - Math.pow(0.9402, Math.exp(LMen)))
    }

    const calculateRiskWomen = () => {
        const LWomen = 31.764001 * Math.log(age) + 22.465206 * Math.log(totalChol) 
        + (-1.187731) * Math.log(hdlChol) + 2.552905 * Math.log(systolicBP) 
        + 13.07543 * smoker + (-5.060998) * Math.log(age) * Math.log(totalChol) 
        - 2.996945 * Math.log(age) * smoker - 146.5933061;

        if((1 - Math.pow(0.98767, Math.exp(LWomen))) * 100 < 5) {
            setRiskSum('Low Risk')
        } else if((1 - Math.pow(0.98767, Math.exp(LWomen))) * 100 < 10) {
            setRiskSum('Moderate Risk')
        } else if((1 - Math.pow(0.98767, Math.exp(LWomen))) * 100 < 20) {
            setRiskSum('Strong Risk')
        } else {
            setRiskSum('High Risk')
        }

        setRisk(1 - Math.pow(0.98767, Math.exp(LWomen)))
    }

  return (
    <div className='m-5 flex justify-center items-center space-y-12 flex-col xl:flex-row xl:space-x-24'>
        <div className='flex flex-col space-y-5 w-4/5 xl:w-1/3'>
            <div className='flex flex-col space-y-2 w-full'>
                <label className={`${!age ? '' : age >= 30 && age <= 70  ? 'text-green-400' : 'text-red-400'}`}>Age</label>
                <input type="number" placeholder='30-85' onChange={(e) => setAge(e.target.value)} value={age} className={`bg-gray-200 w-full rounded-xl p-2 outline-none border-2 ${!age ? '' : age >= 30 && age <= 70  ? 'border-green-400 bg-gray-50' : 'border-red-400 bg-gray-50'} transition-all`} />
            </div>
            <form className='flex items-center'>
                <h1>Gender:</h1>
                <div className="flex items-center">
                <label>
                    <input type="radio" value="male" checked={gender == 'male' ? true : false} onChange={(e) => setGender(e.target.value)} className='mx-2' />
                    Male
                </label>
                </div>
                <div className="flex items-center">
                <label>
                    <input type="radio" value="female" className='mx-2'checked={gender == 'female' ? true : false} onChange={(e) => setGender(e.target.value)} />
                    Female
                </label>
                </div>
            </form>
            <div className='flex flex-col space-y-2'>
                <label className={`${!totalChol ? '' : totalChol >= 100 && totalChol <= 300 ? 'text-green-400' : 'text-red-400'}`}>Total Cholesterol</label>
                <input type="number" placeholder='100-300' onChange={(e) => setTotalChol(e.target.value)} value={totalChol} className={`bg-gray-200 w-full rounded-xl p-2 outline-none border-2 ${!totalChol ? '' : totalChol >= 100 && totalChol <= 300 ? 'border-green-400 bg-gray-50' : 'border-red-400 bg-gray-50'} transition-all`} />
            </div>
            <div className='flex flex-col space-y-2'>
                <label className={`${!hdlChol ? '' : hdlChol >= 10 && hdlChol <= 100 ? 'text-green-400' : 'text-red-400'}`}>HDL Cholesterol</label>
                <input type="number" placeholder='10-100' onChange={(e) => setHdlChol(e.target.value)} value={hdlChol} className={`bg-gray-200 w-full rounded-xl p-2 outline-none border-2 ${!hdlChol ? '' : hdlChol >= 10 && hdlChol <= 100 ? 'border-green-400 bg-gray-50' : 'border-red-400 bg-gray-50'} transition-all`} />
            </div>
            <div className='flex flex-col space-y-2'>
                <label className={`${!systolicBP ? '' : systolicBP >= 80 && systolicBP <= 200 ? 'text-green-400' : 'text-red-400'}`}>Systolic Blood pressure</label>
                <input type="number" placeholder='80-200' onChange={(e) => setSystolicBP(e.target.value)} value={systolicBP} className={`bg-gray-200 w-full rounded-xl p-2 outline-none border-2 ${!systolicBP ? '' : systolicBP >= 80 && systolicBP <= 200 ? 'border-green-400 bg-gray-50' : 'border-red-400 bg-gray-50'} transition-all`} />
            </div>
            <form className='flex items-center'>
                <h1>Smoker:</h1>
                <div className="flex items-center">
                <label>
                    <input type="radio" value="male" checked={smoker === 1 ? true : false} onChange={() => setSmoker(1)} className='mx-2' />
                    Yes
                </label>
                </div>
                <div className="flex items-center">
                <label>
                    <input type="radio" className='mx-2'checked={smoker === 0 ? true : false} onChange={() => setSmoker(0)} />
                    No
                </label>
                </div>
            </form>
            <button className='text-xl px-5 self-center rounded-xl py-2 bg-green-400 w-full text-white' onClick={gender === 'male' ? calculateRisk : calculateRiskWomen}>CALCULATE</button>
        </div>
        <div className='flex flex-col rounded-xl w-4/5 xl:w-1/3'>
            <div className={`${!risk * 100 ? 'bg-green-400' : risk * 100 < 5 ? 'bg-green-400' : risk * 100 < 10 ? 'bg-orange-400' : risk * 100 < 20 ? 'bg-red-400' : 'bg-red-600'} p-5 rounded-t-xl transition-all`}>
                <h1 className='text-white font-extrabold'>Result: {(risk > 0 ? (risk * 100).toFixed(2) + '%, ' + riskSum : '')}</h1>
            </div>
            <div className='flex flex-col h-full bg-gray-100 rounded-b-xl p-5'>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold'>What is Framingham Risk Score for Hard Coronary Heart Disease</h1>
                    <p>The Framingham Risk Score (FRS) is a widely used tool to estimate the risk of developing hard coronary heart disease (CHD) over a specified time frame, typically 10 years. It considers factors such as age, gender, cholesterol levels, blood pressure and smoking status to calculate an individual's risk. The FRS helps clinicians identify high-risk patients who may benefit from interventions like lifestyle changes or medication. Despite its widespread use, FRS has limitations, such as its focus on traditional risk factors and potential underestimation of risk in certain populations. Continuous refinement and validation ensure its relevance in clinical practice.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator