import { useState } from "react"

type AccordionPropsType = {
  titleValue: string
}
type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>      
        <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }}/>      
      {!collapsed && <AccordionBody />}
    </>
  )
}

function AccordionTitle(props:AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>{props.title}</h3>
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