import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n<0) return -1
    if(n===0) return 1
    return calcFatorial(n - 1) * n
}

function isEven(num){
    const n = parseInt(num)
    if(n % 2 === 0)
        return true
    else
        return false
}

const UseEffect = (props) => {
    const [ number, setNumber ] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ number2, setNumber2] = useState(1)
    const [status, setStatus] = useState("Ímpar")

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        setStatus(isEven(number2))
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #1"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'nao existe' : fatorial }</span>
                </div>
                <input type="number" className="input" 
                value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #2"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status ? 'Par' : 'Ímpar' }</span>
                </div>
                <input type="number" className="input" 
                value={number2} onChange={e => setNumber2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
