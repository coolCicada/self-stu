import { ComponentV1 } from '@/types/component/component'
import { COMPONENTS_SET } from '@/types/component/componentMap'
import React, { FunctionComponent, ReactNode } from 'react'

const self = ({ text = '' }: { text: string }) => {
    return <div>self: {text}</div>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mp: Record<string, FunctionComponent<any>> = {
    self
};

export const render = (component: ComponentV1 | string): ReactNode => {
    if (typeof component === 'string') return component
    const { type, props, children } = component

    if (!COMPONENTS_SET.has(type)) return null
    if (children) {
        const childNodes = Array.isArray(children)
            ? children.map((c) => render(c))
            : render(children)
        return React.createElement(mp[type] ?? type, props, childNodes)
    } else {
        return React.createElement(mp[type] ?? type, props)
    }
}
