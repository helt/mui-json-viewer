'use client'

import type { JsonViewerProps } from '@dataxpdtn/mui-json-viewer'
import { JsonViewer } from '@dataxpdtn/mui-json-viewer'
import type { FC } from 'react'

import { ClientOnly } from '@/components/ui/ClientOnly'
import { useNextraTheme } from '@/hooks/useTheme'

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
