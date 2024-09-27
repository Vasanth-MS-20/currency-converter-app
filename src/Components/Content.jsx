import png from '../assets/image.png'

const Content = ({base, amount, tocurrency, rate, setAmount, setBase, setToCurrency }) => {

    function changeHandler(e, fn){
        fn(e.target.value)
    }
    
  return (
    <>
        <div className="row">
            <div className="col-sm-4 mx-auto d-flex flex-row align-items-center">
                <div className="card w-100" data-bs-theme='dark'>
                    <div className="card-body">
                        <div className='text-center p-0 pt-sm-2'>
                            <img src={png} className='img-fluid' width={200} alt="" />
                        </div>
                        <p className='p-0 m-0 text-center mt-1 mt-sm-3'>-----------------------------------------<span className='d-none d-sm-inline-block'>--------</span></p>
                        <p className='text-center m-0 h6'>Currency Converter</p>
                        <p className='p-0 mb-0 mb-sm-2 text-center'>-----------------------------------------<span className='d-none d-sm-inline-block'>--------</span></p>

                        <form action="">
                            <label htmlFor="a" className="form-label">Amount</label>
                            <input type="number" className="form-control mb-2" value={amount} onChange={(e)=>changeHandler(e, setAmount)}  />

                            <label htmlFor="" className="form-label">From Currency</label>
                            <select name=""  className="form-select mb-2" value={base} onChange={(e)=>changeHandler(e, setBase)}>
                                <option value=""></option>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="JPY">JPY</option>
                            </select>

                            <label htmlFor="" className="form-label">To Currency</label>
                            <select name=""  className="form-select" value={tocurrency} onChange={(e)=>changeHandler(e, setToCurrency)}>
                                <option value=""></option>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="JPY">JPY</option>
                            </select>
                        </form>

                        <div className="card mt-3">
                            <div className="card-body ms-sm-5">
                                <b className='text-primary'>{amount} {base} </b> is equal to <b className='text-warning'>{rate.toFixed(2)} {tocurrency}</b>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content