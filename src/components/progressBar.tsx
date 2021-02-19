import React from 'react'

const ProgressBar = (props: {progress: number}): JSX.Element => {
    const barIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const Bars = barIndexes.map((index, i) => {
        const isActivated = props.progress >= index
        return (
            <Bar key={i} isActivated={isActivated}/>
        )
    })
    
    const style = {
        display: 'flex',
        justifyContent: 'center'
    }

    return <div style={style}>{Bars}</div>

}

interface BarProps {
    isActivated: boolean
}

const Bar = (props: BarProps): JSX.Element => {
    const style = {
        height: '15px',
        width: '15px',
        background: props.isActivated ? 'green' : 'white',
        border: '1px solid black',
        margin: '5px'
    }

    return <div style={style}/>
}

export default ProgressBar