import { memo } from 'react'

import { useTheme } from '@nivo/core'
import { animated, SpringValues } from '@react-spring/web'

export const GridLine = memo(
    ({
        animatedProps,
    }: {
        animatedProps: SpringValues<{
            opacity: number
            x1: number
            x2: number
            y1: number
            y2: number
        }>
    }) => {
        const theme = useTheme()

        return <animated.line {...animatedProps} {...(theme.grid.line as object)} />
    }
)
