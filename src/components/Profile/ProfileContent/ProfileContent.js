import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
function ProfileContent() {
    return (
        <Content>
            <div className="profile-path">
                <div className="profile-image"></div>
                <h2>Mavin Sao</h2>
                <div><small>Mobile Dev</small></div>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="btn-edit" >Edit</motion.button>
            </div>
            <div className="follow-path">
                <div>
                    <p><b>98</b></p>
                    <small>Posts</small>
                </div>
                <div>
                    <p><b>5.5K</b></p>
                    <small>Follower</small>
                </div>
                <div>
                    <p><b>10</b></p>
                    <small>Followings</small>
                </div>
            </div>
            <div className="about-path">
                <h3>About</h3>
                <p>Experienced Information Technology Instructor with a demonstrated history of working in the computer software industry. Skilled in Spring Boot, NodeJS, iOS Development, ReactJS, Web Design, Information Technology, Teaching, and Web Development. Strong information technology professional with a Bachelor's degree focused in Computer Science from RUPP. </p>
            </div>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 35px 0px; 

    .btn-edit{
        width: 100px;
        margin: 10px 0px;
        padding: 5px 15px;
        background: white;
        border-radius: 10px;
    }

    .follow-path{
        display: flex;
        width: 100%;
        justify-content: space-around;
        text-align: center;
        margin: 15px 0px; 
    }

    .profile-path{
        text-align: center;

        &>*{
            margin: 8px 0px;
        }
    }

    .profile-path > .profile-image{
        width: 120px;
        height: 120px;
        background: url("https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=1000x750") no-repeat center;
        background-size: cover;
        border-radius: 50%; 
    }
`

export default ProfileContent
