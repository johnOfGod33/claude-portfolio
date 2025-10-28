import { cn } from "../lib/utils"

export type SectionProps = {
  children : React.ReactNode,
  className? : string
}

export default function Section(props : SectionProps) {
  return <section className={cn("max-w-7xl mx-auto px-8 py-4 mb-4", props.className)}>
    {props.children}
  </section>
}