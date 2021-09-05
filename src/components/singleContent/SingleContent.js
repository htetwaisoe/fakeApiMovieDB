import './singleContent.css';
import { Badge } from '@material-ui/core';
import React from 'react'
import { img_500 , unavailable } from "../../config/config";
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
            <img className="poster" src={ poster ? `${img_500}/${poster}` : unavailable } alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle">{media_type==="tv" ? "TV Series" : "Movies"}
            <span className="subTitle">{date}</span>
            </span>
            
        </ContentModal>
    )
}

export default SingleContent
