import { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

export default function TestimonialsApp() {

    const [testimonials, setTestimonials] = useState()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (testimonials) {
            fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
                .then(response => response.json())
                .then((json) => setItems(json))
        }
    }, [testimonials])



    return (
        <div className='container m-auto text-center'>
            <Title text={'TestimonialsApp'} />
            <Button text={'Posts'}
                onClick={() => setTestimonials('Posts')}
                btnClass={'btn-info mr-1'}
                icon={<BsFillFileEarmarkPostFill />} />
            <Button text={'Users'}
                btnClass={'btn-info mr-1'}
                icon={<FaUserAlt />} onClick={() => setTestimonials('Users')} />
            <Button text={'Comments'}
                btnClass={'btn-info'}
                icon={<BiCommentDetail />} onClick={() => setTestimonials('Comments')} />

            <Title text={!testimonials ? 'Select from above' : testimonials}
                classes={'subtitle text-primary'} />
            {!items ? null :
                items.map((item) => {
                    return <div key={item.id} className="card mb-2 card-primary text-center" style={{ margin: '0.8rem auto' }}>
                        {item.name && <h2 className='card-header'>{item.name} </h2>}
                        <div className="card-body">
                            <h4>{item.title} </h4>
                            <p>{item.body}</p>
                        </div>
                        {item.email && <small className='card-footer'>{item.email} </small>}
                    </div>
                })
            }
        </div>
    )
}
