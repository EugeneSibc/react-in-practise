type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} onClick = {props.onClick} collapsed = {props.collapsed}/>
      {props.collapsed && <AccordionBody />}
    </>
  )
}

function AccordionTitle(props: any) {
  return <div>
    <h3 onClick={props.onClick}>{props.title}</h3>
  </div>
}

function AccordionBody() {
  return <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}