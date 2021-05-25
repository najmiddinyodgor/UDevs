import React, {createContext, FC, PropsWithChildren} from "react"

type Props = PropsWithChildren<any>

interface IContext {
    active: number,
    onChange: Function
}

const initalContext = {
    active: 1,
    onChange(id: number) {
        this.active = id
    }
}

export const FilterContext = createContext<IContext>(initalContext)

const FilterContextProvider: FC<Props> = ({children}: Props) => {
    return (
        <FilterContext.Provider value={initalContext}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider