import React from 'react';
// wrapper 태그 내부에 hello 컴포넌트가 보여지지 않으므로 props.children을 렌더링 해줘야한다.
function Wrapper({children}) {
    
    const style = {
        border: '2px solid black',
        padding: 16,
    };
    return (
        <div style = {style}>
            {children}
        </div>
    )
}

export default Wrapper;