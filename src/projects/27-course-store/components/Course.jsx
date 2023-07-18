import React from 'react'
import Button from "../../components/Button"

export default function Course({ course }) {
    const { id, title, price, img } = course

    return (
        <li className={`card mb-2`}
            style={{ width: 250, backgroundColor: "inherit" }}>
            <div className="card-header">{title}</div>
            <img src={img} alt="course img" style={{
                height: "100%",
                width: '100%'
            }} />
            <p className="card-body">
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumen autem distinctio atque</small>
            </p>
            <div className="card-footer d-flex"
                style={{ justifyContent: "space-between" }}>
                <h4>{price} </h4>
                <Button btnClass={"btn-success"}
                    text='BUY' />
            </div>
        </li>
    )
}
