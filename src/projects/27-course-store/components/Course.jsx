import React, { useState, useEffect } from 'react'
import Button from "../../components/Button"
import { CurrencyContext } from '../context/currencies-context'

export default function Course({ course }) {
    const currency = React.useContext(CurrencyContext)

    const { title, price, img } = course

    const contextPrice = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: currency.code
    }).format(price * currency.conversionRate);

    const [courseBg, setCourseBg] = useState();

    useEffect(() => {
        if (currency.code === 'USD') {
            setCourseBg('card-info')
        }
        if (currency.code === 'EUR') {
            setCourseBg('card-primary')
        }
        if (currency.code === 'GBP') {
            setCourseBg('card-warning')
        }
    }, [currency.code])

    return (
        <li className={`card mb-2 ${courseBg}`}
            style={{ width: 250, }}>
            <div className="card-header">{title}</div>
            <img src={img} alt="course img" style={{
                height: "100%",
                width: '100%'
            }} />
            <p className="card-body">
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </p>
            <div className="card-footer d-flex"
                style={{ justifyContent: "space-between" }}>
                <h4>{contextPrice} </h4>
                <Button btnClass={"btn-success"}
                    text='BUY' />
            </div>
        </li>
    )
}
