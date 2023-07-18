import React from 'react'
import Course from './Course'
export default function Courses({ list }) {

    return (
        <ul className='d-flex mt-2'
            style={{
                flexWrap: "wrap", gap: "30px"
            }}>
            {list.map((item) => (
                <Course key={item.id} course={item} />
            )

            )}
        </ul>
    )
}
