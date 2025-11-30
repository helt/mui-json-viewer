"use client"

import type { JsonViewerProps } from '@helt/mui-json-viewer'
import { JsonViewer } from '@helt/mui-json-viewer'
import type { FC } from 'react'

import { useNextraTheme } from '@/hooks/useTheme'
import { ClientOnly } from '@/components/ui/ClientOnly'

export const JsonViewerPreview: FC<JsonViewerProps> = (props) => {
  const theme = useNextraTheme()
  return (
    <ClientOnly>
      <JsonViewer
        theme={theme}
        sx={{
          fontSize: 12
        }}
        value={props.value}
      />
    </ClientOnly>
  )
}
