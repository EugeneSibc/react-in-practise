type StarPropsType = {
    selected: boolean
    onClick: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
    
}

export function Star(props: StarPropsType) {
    return (
        <span onClick={()=>{props.onClick(props.value)}}>
            {props.selected ? <b> star</b> : " star"}
        </span>
    )
}