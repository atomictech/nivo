import { ResponsiveWrapper } from '@nivo/core'
import { PieCanvas } from './PieCanvas'
import { PieCanvasProps } from './types'

export const ResponsivePieCanvas = <RawDatum extends { label?: string | number | undefined }>(
    props: Omit<PieCanvasProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }: { width: number; height: number }) => (
            <PieCanvas<RawDatum> width={width} height={height} {...props} />
        )}
    </ResponsiveWrapper>
)
