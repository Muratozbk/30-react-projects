import React from 'react'

export default function FormGroup({ values,
    labelText,
    inputType,
    placeholder,
    onInput,
    onKeyUp, onChange,
    className,
    readOnly = false
}) {
    return (
        <div className="form-group" >
            <label style={{ fontWeight: 'bold', fontSize: '1rem', padding: '.5rem', marginBottom: '1rem' }}>{labelText} </label>
            <input type={inputType} placeholder={placeholder}
                value={values} onInput={onInput}
                className={className} readOnly={readOnly}
                onKeyUp={onKeyUp} onChange={onChange} />
        </div>
    )
}
