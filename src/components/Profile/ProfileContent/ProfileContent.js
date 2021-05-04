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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
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

    .about-path > h3{
        margin: 10px 0px;
    }

    .profile-path > .profile-image{
        width: 120px;
        height: 120px;
        background: url("https://cliply.co/wp-content/uploads/2020/08/442008110_GLANCING_AVATAR_3D_400px.gif") no-repeat center;
        background-size: cover;
        border-radius: 50%; 
    }
`

export default ProfileContent
