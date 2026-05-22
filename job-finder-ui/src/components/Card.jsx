import bookmarkIcon from '../assets/bookmark-icon.svg'

export const Card = (props)=>{
    return <div className="card">
        <div className="card-top">
            <div className="logo-container">
                <img src={props.brandLogo} />
            </div>
            <button className='save-button'>
                <span>Save</span>
                <img src={bookmarkIcon} />
            </button>
        </div>
        <div className="card-middle">
            <div className='middle1'>
                <div className='company-name'>{props.companyName}</div>
                <div className='date-posted'>{props.datePosted}</div>
            </div>
            <div className='middle2'>
                {props.jobRole}
            </div>
            <div className='middle3'>
                <button>{props.tag1}</button>
                <button>{props.tag2}</button>
            </div>
        </div>
        <hr />
        <div className="card-bottom">
            <div className='salary-location'>
                <div id="salary">{props.pay}</div>
                <div id="location">{props.location}</div>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
}