import React from 'react';
import friends_class from './Friends.module.css';

const Friends = (props) => {
    let friendsArray = props.friends.map(data => <img src={data.image} key={data.id}/>);
    return(
        <div className={friends_class.item}>
            <div className={friends_class.text}>Friends</div>
            {friendsArray}
        </div>
    );
}

export default Friends;