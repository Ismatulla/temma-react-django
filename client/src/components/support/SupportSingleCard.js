import React from 'react'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import { fonts } from '../../constants/fonts'
import colors from '../../constants/colors'

export default function ({ imgs, name, cardctx }) {
  return (
    <Card sx={{ margin: '2rem 0', minHeight: '100%', padding: '25px', border: colors.cardBorder }}>
      <CardContent >
        <Box sx={{ marginBottom: fonts.bottomMargin }}>
          <img src={imgs} alt="not found" width='100%' />
        </Box>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" sx={{ lineHeight: fonts.lineHeight }}>{name}</Typography>
        </div>
        <Typography variant="p" sx={{ lineHeight: fonts.lineHeight, display: "block" }}>{cardctx}</Typography>
        <Link href='#' underline='hover' sx={{ color: colors.colorBorder, textDecoration: 'underline #fd7e70', '&:hover': { color: colors.buttonPink } }}>Lees meer</Link>
      </CardContent>
    </Card>
  )
}
