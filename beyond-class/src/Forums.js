import './css/forum.css';
//importing images
import popularImg from './images/popular-post.png';
import answerImg from './images/answer.png';
import notificationImg from './images/notifications.png';
import beyondclassImg from './images/beyond_class.png';
import profileImg from './images/profile_img.png';
import facebookImg from './images/facebook.png';
import instagramImg from './images/instagram.png';
import gmailImg from './images/gmail.png';

const Forums = () => {
    return ( 
        <div className="forum-content">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src={beyondclassImg} alt="brand-logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <input className="" type="search" placeholder="Search" />
                        <li className="nav-item"><a className="nav-link active" href=""><img src={popularImg} alt="popular-post-img"/> Popular Post</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={answerImg} alt="Answer-img"/> Answer</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={popularImg} alt="popular-post-img"/><i className="fas fa-users"></i> Communities</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={notificationImg} alt="Notifiactions-img"/> Notifications</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={popularImg} alt="popular-post-img"/><i className="far fa-user-circle"></i> My Profile</a></li>
                    </ul>
                </div>
            </nav>

            <div className="main-content">
                <div className="container row-main-div">
                    <div className="row row-content-main">
                        <div className="col-md-8">
                            <div className="row col-class-1 h4">Profile</div>
                            <div className="user-div">
                                <div className="row">
                                    <div className="col-md-4 profile-pic">
                                        <div className="profile-div">
                                            <div className="profile-img"><img src= {profileImg} alt="profile-img" /></div>
                                            <div className="btn-div">
                                                <button className='btn-class h5'>Message</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 user-content">
                                        <div className="left-top-part">
                                            <span className='h6'>NAME OF THE USER</span>
                                            <button className='btn-class-1'>Follow</button>
                                        </div>
                                        <div className="left-bottom-part">
                                            <p className='title-para h6'>Student / Teacher /Club Member:</p>
                                            <p className='user-text'>This is the discription of the user of beyond class. It contains some basic info about the user.</p>
                                        </div>
                                        <div className="user-icons">
                                            <a href="#"><img src={facebookImg} alt="" /></a>
                                            <a href="#"><img src={instagramImg} alt="" /></a>
                                            <a href="#"><img src={gmailImg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="general-post">General Posts</div>
                                <div className="post-box">
                                    <div className="area"></div>
                                    <div className="bottom-box">
                                        <p><i class="fas fa-thumbs-up icon-thumbs"></i>2k</p>
                                        <p><i class="far fa-comment icon-comment"></i>165</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-class-2">
                            <div className='top-box'>
                                <p>Followers <span>5</span></p>
                                <p>Following <span>9</span></p>
                                <p>Post <span>3</span></p>
                            </div>
                            <div className="communities mt-3 h6">Communities</div>
                            <div className='top-box-1'>
                                <ul>
                                    <li className='m-2'>Community 1</li>
                                    <li className='m-2'>Community 1</li>
                                    <li className='m-2'>Community 1</li>
                                    <li className='m-2'>Community 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Forums;