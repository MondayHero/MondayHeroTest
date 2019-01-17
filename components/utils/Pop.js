import Popup from 'reactjs-popup'
const Pop = (props) => {
    return (
        <Popup
            open={props.isModalOpen}
            closeOnDocumentClick
            onClose={props.closeModal}
        >
            <div className='modalx' style={{ color: 'black' }}>
                <div className='modalxHeader modal-custom-header'>
                    <button type="button" className="close" onClick={props.closeModal}>&times;</button>
                    <h4 style={{ color: '#646464' }}>Thank you for signing up! 🎉</h4>
                </div>
                <div className='modalxContent modal-custom-body'>
                    <p style={{ margin: '0 0 2em 0' }}>You will receive your very own private beta invitation in upcoming weeks!</p>
                </div>
                <div className="modalFooter">
                    <button className="btn btn-default customButton" type="button" onClick={props.closeModal}>Close</button>
                </div>

            </div>
        </Popup>
    )
}

export default Pop;