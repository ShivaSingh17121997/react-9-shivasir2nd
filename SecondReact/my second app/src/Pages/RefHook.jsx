import React, { Fragment, useRef } from 'react';

function RefHook() {

    // Creating a ref object using useRef hook 
    const focusPoint = useRef(null);
    console.log(focusPoint)

    // focusPoint = {
    //     current: "The quick brown fox jumps over the lazy dog";
    // }



    const onClickHandler = () => {
        focusPoint.current.value =
            "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };

    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    Click
                </button>
            </div>

            <textarea ref={focusPoint} />
            {/* directly manipulate the dom  ,/ prevrve data over rerendering , does not cause re render when data is changed */}
        </>
    );
};

export default RefHook;
