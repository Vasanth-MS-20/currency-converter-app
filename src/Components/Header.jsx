import React, { useEffect, useState } from 'react'
import Content from './Content'

const Header = () => {
    
    const [data, setData] = useState()
    const [base, setBase] = useState('USD')
    const [rate, setRate] = useState(0)
    const [amount, setAmount] = useState(0)
    const [tocurrency, setToCurrency] = useState('INR')
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)

    useEffect(()=>{ 
        try{
            async function fetchData(){
                let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
                if(!res.ok){
                    setIsLoading(false)
                    setIsErr(true)
                }
                let resData = await res.json()
                setData(resData)
                setIsLoading(false)
                setRate(amount * resData.rates[tocurrency])
            }

            fetchData()
        }
        catch(e){
            console.log(e.message);
        }
    }, [base, amount, tocurrency, data])

    if(isLoading){
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height : '100dvh', width : '100dvw'}}>
                    <span className="spinner-border"></span>
                    <span className='ms-2'>Loading Please Wait</span>
                </div>
            </>
        )
    }

    if(isErr){
        return (
            <>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{height : '100dvh', width : '100dvw'}}>
                    <p>Oops Error Occured!</p>
                    <button className='btn btn-success' onClick={()=> setBase('USD')}>Retry</button>
                </div>
            </>
        )
    }


  return (
    <>
        {data && <Content 
        rate={rate} 
        tocurrency={tocurrency}
        base={base}
        amount={amount}
        setAmount={setAmount} 
        setBase={setBase} 
        setToCurrency={setToCurrency}
        />}
    </>
  )
}

export default Header