import * as React from 'react';

interface BtnProps{
    text: string,
    excite?: boolean,
}
class Btn extends React.Component<BtnProps, {}> {
    render() {
        return(
            <button>{this.props.text}{this.props.excite&&"!"}</button>
        )
    }
}
export default Btn;