import { useState } from 'react'
import Title from '../components/Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'

export default function LikePhotoApp() {
    document.querySelector('body').style.background = '#bbb'

    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0);

    const toggleLike = (e) => {
        e.preventDefault()
        if (!like) {
            setLike(true)
            setCount(count + 1)
        }
        else {
            setLike(false)
            setCount(count - 1)
        }
    }

    return (
        <div className='container text-center'>
            <Title classes={'title mb-1 mt-1'} text={'Like Photo App'} />
            <Title classes={'subtitle mt-1 mb-1 text-primary'}
                text={`Likes : ${count}`} />

            <div className="card card-dark m-auto">
                <div className="card-header d-flex mb-1" >
                    <AiFillSmile size={40} style={{
                        marginRight: '1.5rem'
                    }} />
                    <p>PetCard</p>
                </div>
                <img onDoubleClick={e => toggleLike(e)} src="https://images.unsplash.com/photo-1547721064-da6cfb341d50
" alt="img" style={{ height: 'fit-content', maxWidth: '100%' }} />

                <div className="card-footer mt-1 d-flex"
                    style={{
                        justifyContent: 'space-between'
                    }}>
                    <AiOutlineComment size={40} />
                    {like ? (<AiFillHeart onClick={e => toggleLike(e)} className='text-danger' size={40} />) : <AiOutlineHeart onClick={e => toggleLike(e)} size={40} />}
                </div>
            </div>
        </div>
    )
}
