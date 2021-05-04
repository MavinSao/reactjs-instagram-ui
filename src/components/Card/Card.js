import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


function Card({img}) {
    return (
        <CardStyle postImage={img}>
            <div className="header-card">
                <div className="pf-name">
                    <img alt="img" className="pf-img" src="icon/profile.png" height={40} width={40} />
                    <div className="username">
                        <h4>Mavin Sao</h4>
                        <small>Phnom Penh, Cambodia</small>
                    </div>
                </div>
                <img alt="img" src="icon/more.png" className="btn-more" />
            </div>
            <div className="img-card">
                   
            </div>
            <div className="button-card">
                <div className="group-btn">
                    <motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  alt="img" src="icon/like.png" />
                    <motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/comment.png" />
                    <motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/rocket.png" />
                </div> 
                <motion.img className="icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} alt="img" src="icon/bookmark.png" />
            </div>
            <small>Liked by <b>Edward Jones and 254 others</b></small>
            <p className="card-status">“Men have forgotten this truth,” said the fox. “But you must not forget it. You become responsible, forever, for what you have tamed.” </p>
        </CardStyle>
    )
}

const CardStyle = styled(motion.div)`
    width: 320px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    margin: 15px 0px; 
    .group-btn>img{
        margin: 0px 3px;
    }

    .card-status{
        margin: 5px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    .btn-more{
        margin-top: -5px;
        width: 25px;
        height: 25px;

    }

    .button-card{
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
    }

    .pf-img{
        border-radius: 50%;
        margin-right: 10px;
    }

    .pf-name{
        display: flex;
    }

    .header-card{
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        margin-top: 5px;
    }

    .img-card{
        background-image: url('image/${props => props.postImage}');
        background-position: center;
        background-size: cover;
        height: 275px;
        border-radius: 20px;

    }
    
`

export default Card
