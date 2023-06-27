import React from 'react'
import Title from '../components/Title'

export default function LikePhotoApp() {
    document.querySelector('body').style.background = '#bbb'
    return (
        <div className='container text-center'>
            <Title text={'Like Photo App'} />
            <Title classes={'subtitle'} text={'Likes Count'} />

            <div className="card card-dark m-auto">
                <div className="card-header">
                    <small>PetCard</small>
                </div>
                <img src="" alt="img" style={{ height: 'fit-content' }} />

                <div className="card-footer d-flex"
                    style={{
                        justifyContent: 'space-between'
                    }}>

                </div>
            </div>
        </div>
    )
}
