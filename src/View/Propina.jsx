import React, {useState,useEffect} from 'react'

function Propina() {
    const [totalComida,setTotalComida] = useState('')
    const [porcentaje, setPorcentaje] = useState('')
    const [propina,setPropina] = useState('')
    const [calculada, setCalculada] = useState(false);

    const handleClick = () => {
        if (totalComida > 0 && porcentaje > 0) {
            setPropina(totalComida * porcentaje);
            setCalculada(true);
        } else {
            alert("Ingrese un número válido o porcentaje valido");
        }
    }

    const handleLimpiar = () => {
        console.log("Limpiando..")
        setTotalComida('');
        setPorcentaje('');
        setPropina('');
        setCalculada(false);
    }

    useEffect(() => {
        console.log("La propina es de: " + propina);
    }, [propina]);



  return (
    <div className='Container d-flex justify-content-centet align-items-center vh-100'>
        <div className="cardContainer container bg-info text-white" style={{borderRadius:'15px'}}>
            <h1 className='text-center my-2'>Calculador de propina</h1>
            <input type="number" className='form form-control' value={totalComida} onChange={e => setTotalComida(e.target.value)}/>
            <div className="optionContainer my-3">
                <button className='btn btn-primary mx-2' onClick={()=>setPorcentaje(0.20)}>20%</button>
                <button className='btn btn-success mx-2' onClick={()=>setPorcentaje(0.15)}>15%</button>
                <button className='btn btn-warning mx-2' onClick={()=>setPorcentaje(0.10)}>10%</button>
            </div>
            {calculada && <h4 className='my-3'>La propina es de: ${propina.toFixed(2)} y la cuenta es de ${parseInt(totalComida) + propina}</h4>}
            <div className="btnContainer mb-3">
                <button className='btn btn-danger mt-3 ' onClick={handleClick}>Calcular</button>
                <button className='btn btn-secondary mx-1 mt-3' onClick={handleLimpiar}>Limpiar</button>
            </div>
        </div>
    </div>
  )
}

export default Propina