import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { ContainerHeader } from "./styles";

export function Header(){

    const currentDate = format(new  Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })
    return(
        <ContainerHeader>
            <img className="img" src="/logo.png" alt="podCast"/>
            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

        </ContainerHeader>
    )
}