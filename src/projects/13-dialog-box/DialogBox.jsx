import { useState, useEffect } from 'react'
import Button from '../components/Button';
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import './Bounce.css'

export default function DialogBox({ width = 400 }) {

    const [subscription, setSubscription] = useState({
        title: 'Hello',
        description: 'Would you like to subscribe?',
        state: null,
        justifyContent: 'space-between'
    });

    const handleSubscribe = () => {
        setSubscription({
            title: 'Thank you',
            description: 'for your subscription',
            state: 'subscribed',
            justifyContent: 'flex-end'
        })
    }

    const handleUnsubscribe = () => {
        setSubscription({
            title: 'Sorry',
            description: 'to see you go.',
            state: 'unsubscribed',
            justifyContent: ' flex-end'
        })
    }

    const [icon, setIcon] = useState();
    let iconStyle = {
        fontSize: '80px',
        justifySelf: 'center',
        color: subscription.state === 'subscribed' ? 'rgba(50,188,66,0.5)' :
            'rgba(25,118,160,0.4)'
    }

    useEffect(() => {
        if (subscription.state === 'subscribed') {
            setIcon(<BsFillEmojiSmileFill style={iconStyle} />)
            document.body.style.background = 'rgba(50,188,66,0.5)'
        }
        if (subscription.state === 'unsubscribed') {
            setIcon(<BsFillEmojiFrownFill
                style={iconStyle} />);
            document.body.style.background = 'rgba(25,118,160,0.4)';
        }
    }, [subscription.state])

    const [bounce, setBounce] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setBounce('')
        }, 500)
        return () => setBounce('bounce')
    }, [subscription.state])

    return (
        <div className={`${bounce} card bg-light m-auto mt-4`}
            style={{ width: width }}>
            <div className="card-body">
                <div className="d-grid"
                    style={{
                        gridTemplateColumns: '2fr 1fr',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                    <section>
                        <h2 className="card-title">{subscription.title}</h2>
                        <p className="card-text">{subscription.description}</p>
                    </section>
                    <div>{icon} </div>
                </div>
            </div>
            <br />
            <div className="mb-2 d-flex" style={{ padding: '.5rem 1rem', justifyContent: `${subscription.justifyContent}`, width: '100%' }}>
                {subscription.state === null &&
                    <Button btnClass={'btn-light'} text='Cancel' />}
                {subscription.state === 'subscribed' ? null :
                    <Button btnClass={'btn-danger'} text='Subscribe'
                        onClick={handleSubscribe} />}
                {subscription.state === 'subscribed' ?
                    <Button btnClass={'btn-danger btn-block'} text='Unsubscribe'
                        onClick={handleUnsubscribe} /> : null}
            </div>
        </div>
    )
}
