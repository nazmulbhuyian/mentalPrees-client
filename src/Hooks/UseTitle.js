import React, { useEffect } from 'react';

const UseTitle = (title) => {
    return (
        useEffect(() =>{
            document.title = `${title} - Dragon News`;
        }, [title])
    );
};

export default UseTitle;