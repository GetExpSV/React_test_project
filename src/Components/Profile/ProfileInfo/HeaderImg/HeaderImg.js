import React from 'react';
import headerImg_class from './HeaderImg.module.css';

const HeaderImg = (props) => {
    return (
        <div className={headerImg_class.headImg}>
            <img
                src={props.img}/>
        </div>
    );
}

export default HeaderImg;