// import './css/posts.css';
import './css/posts2.css';
import { Row, Col} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
// importing images
import answerImg from './images/answer.png';
import popularPostImg from './images/popular-post.png';
import notificationImg from './images/notifications.png';
import profileImg from './images/profile.png'
import photoImg from './images/photo.png';
import videoImg from './images/video.png';
import textImg from './images/text.png';
import beyondclassImg from './images/beyond_class.png';

const Posts = () => {
    return ( 
        <div className="posts-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src={beyondclassImg} alt="brand-logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <input className="" type="search" placeholder="Search" />
                        <li className="nav-item"><a className="nav-link active" href=""><img src={popularPostImg} alt="popular-post-img"/> Popular Post</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={answerImg} alt="Answer-img"/> Answer</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={popularPostImg} alt="popular-post-img"/><i className="fas fa-users"></i> Communities</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={notificationImg} alt="Notifiactions-img"/> Notifications</a></li>
                        <li className="nav-item"><a className="nav-link" href=""><img src={popularPostImg} alt="popular-post-img"/><i className="far fa-user-circle"></i> My Profile</a></li>
                    </ul>
                </div>
            </nav>
            <Container fluid className='main-content'>
                <div className='main-row-content d-flex justify-content-center'>
                    <Row className='main-row-class'>
                        <Col className='p-2'>
                            <div className='upper-part'>
                                <div className='row-content'>
                                    <img src={profileImg} alt="profile-img"/>
                                    <Link>Create Post</Link>
                                </div>
                                <div className='row-content text-center'>
                                    <Link><img src={photoImg} alt="" /> Photos</Link>
                                    <Link><img src={videoImg} alt="" /> Photos</Link>
                                    <Link><img src={textImg} alt="" /> Photos</Link>
                                </div>
                            </div>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Lakshaya Sharma  2 hours ago</h6>
                                </div>
                                <div className="middle-part"></div>
                                <div className="last-part">hii</div>
                            </div>
                        </Col>
                        <Col className='p-2'>
                            <div className="community-div">
                                <div className="recommandation">Recomanded Comunity</div>
                                <div className="community">
                                    <Link>Community 1</Link>
                                    <Link>Community 2</Link>
                                    <Link>Community 3</Link>
                                    <Link>Community 4</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>        

        </div>
     );
}
 
export default Posts;