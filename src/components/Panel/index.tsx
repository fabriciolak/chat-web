import { Plus } from "phosphor-react";
import { Button } from "../Button";
import { Container, PanelHeader, Icon } from "./styles";

interface PanelProps {
  children: React.ReactNode | React.ReactNode[]
  title: string

  badge?: boolean
  badgeValue?: string | number
  badgeBackground?: string
}

export function Panel({ title, children, badge = false, badgeValue, badgeBackground }:PanelProps) {
  return (
    <Container>
      <PanelHeader>
        <span>{title} {badge && (<Button size="small" bgColor={badgeBackground}>{badgeValue}</Button>)}</span>
        <Button size="medium" variant="rounded"><Plus size={23} weight="bold" /></Button>
      </PanelHeader>

      {children}
    </Container>
  )
}