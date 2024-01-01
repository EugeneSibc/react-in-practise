type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} />
      {!props.collapsed && <AccordionBody />}
    </>
  )


}

function AccordionTitle(props: any) {
  return <div>
    <h3>{props.title}</h3>
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