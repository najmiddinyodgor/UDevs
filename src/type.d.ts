import {ReactElement} from "react";

export type ILink ={
    title: string,
    path: string,
}

export type ISection = {
    link: ILink,
    component: ReactElement
}

export type ICard = {
    label: string,
    icon: any,
    cssClass?: string
}