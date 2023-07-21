import { Events } from "../types/events";
import { EventDateDayText, EventDateDiv, EventDateMonthText, EventDescriptionText, EventInfoDiv, EventMainDiv, EventNameText } from "./style";
import { useRef } from "react";

export default function EventBox({Dia, Mes, Titulo, Horario, Descricao, Local, Link, Inscricao, Responsavel}: Events){

    const linkSala = useRef(Link)
    const linkInscricao = useRef(Inscricao)

    return (
        <EventMainDiv>
            <EventDateDiv>
                <EventDateDayText>{Dia}</EventDateDayText>
                <EventDateMonthText>{Mes}</EventDateMonthText>
            </EventDateDiv>
            <EventInfoDiv>
                {Titulo && <EventNameText>{Titulo}</EventNameText>}
                {Horario && <EventDescriptionText><b>Horário:</b> {Horario}</EventDescriptionText>}
                {Descricao && <EventDescriptionText><b>Descrição:</b> {Descricao}</EventDescriptionText>}
                {Responsavel && <EventDescriptionText><b>Responsável:</b> {Responsavel}</EventDescriptionText>}
                {Local && <EventDescriptionText><b>Local:</b> {Local}</EventDescriptionText>}
                {Link && <EventDescriptionText><b>Link:</b>  <a href= {linkSala.current}>Clique aqui</a></EventDescriptionText>}
                {Inscricao && <EventDescriptionText><b>Incrição:</b> <a href= {linkInscricao.current}>Clique aqui</a></EventDescriptionText>}
            </EventInfoDiv>
        </EventMainDiv>
    )
}