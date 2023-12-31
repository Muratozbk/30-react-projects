
export const Progressbar = ({ bgColor, completed }) => {
    const containerStyles = {
        height: 25,
        backgroundColor: '#dedede',
        borderRadius: 50,
        margin: 50,
        maxWidth: '100%',
    }
    const fillerStyles = {
        backgroundColor: bgColor,
        height: '100%',
        width: `${completed}%`,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }
    const labelStyles = {
        padding: 3,
        margin: 12,
        color: '#fff',
        fontWeight: 'bold',
        display: 'block'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    )
}
