import React from 'react'

interface OptionsProps {
    onClickStart: () => void
    onClickStop: () => void
    onClickReset: () => void
}


const Options = (props: OptionsProps): JSX.Element => {
    const style = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={style}>
            <Start onClick={props.onClickStart} />
            <Stop onClick={props.onClickStop} />
            <Reset onClick={props.onClickReset} />
        </div>
    )
}

interface JustOnClick {
    onClick: () => void
}


const Start = (props: JustOnClick): JSX.Element => {
    return <Button name={'START'} onClick={props.onClick} />
}

const Stop = (props: JustOnClick): JSX.Element => {
    return <Button name={'STOP'} onClick={props.onClick} />
}

const Reset = (props: JustOnClick): JSX.Element => {
    return <Button name={'RESET'} onClick={props.onClick} />
}

interface ButtonProps extends JustOnClick {
    name: string
}

const Button = (props: ButtonProps): JSX.Element => {
    const style = {
        height: '30px',
        width: '80px',
        background: 'black',
        color: 'white',
        border: '1px solid white',
        margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
    return (
        <div onClick={props.onClick} style={style}>
            {props.name}
        </div>
    )
}

export default Options