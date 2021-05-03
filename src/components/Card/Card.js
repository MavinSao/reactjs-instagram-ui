import React from 'react'
import styled from 'styled-components'
function Card() {
    return (
        <CardStyle>
            <div className="header-card">
                <div className="pf-name">
                <img className="pf-img" src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=1000x750" height={40} width={40}/>
                    <div className="username">
                    <h4>Mavin Sao</h4>
                    <small>Phnom Penh, Cambodia</small>
                    </div>
                </div>
                <img src="icon/icons8-more.png" className="btn-more"/>
            </div>
            <div className="img-card">

            </div>
            <div className="button-card">
                <div>
                    <img src="icon/icons8-filled_like.png"/>
                    <img src="icon/icons8-search_for_love.png"/>
                    <img src="icon/icons8-rocket.png"/>
                </div>
                <img src="icon/icons8-bookmark_ribbon.png"/>
            </div>
            <small>Liked by <b>Edward Jones and 254 others</b></small>
            <p className="card-status">“Men have forgotten this truth,” said the fox. “But you must not forget it. You become responsible, forever, for what you have tamed.” </p>
        </CardStyle>
    )
}

const CardStyle = styled.div`
    width: 23%;
    box-sizing: border-box;
    padding: 10px;
    background: #ffffff;
    border-radius: 20px;
    margin: 15px 0px;

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
        margin: 5px 0px;
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
        background-image: url('image/damir-kopezhanov-P9_1VLFQ10Y-unsplash.jpeg');
        background-position: center;
        background-size: cover;
        height: 275px;
        border-radius: 20px;
        
    }
    
`

export default Card
