import React from 'react';

import { Box } from "@mui/system"
import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import rightNavbar from '../../assets/images/right-navbar.svg'
import { Divider } from "@mui/material"
import colors from "../../constants/colors"
import {fonts} from "../../constants/fonts"

export default function Cards({ name, bodyText, date }) {
  return (
    <Card sx={{ width: '350px', margin: '2rem 0', minHeight: '100%', padding: '25px', border: colors.cardBorder }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'left', alignItms: 'center', gap: '1rem', marginBottom: fonts.bottomMargin }}>
          <img src={rightNavbar} alt="not found" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" sx={{ lineHeight: fonts.lineHeight }}>{name}</Typography>
            <Typography variant="p" sx={{ color: colors.colorLightGray }}>Student Association</Typography>
          </div>
        </Box>
        <Divider />
        <Typography variant="p" sx={{ lineHeight: fonts.lineHeight, display: "block", marginTop: fonts.bottomMargin, color: colors.colorLightGray }}>{date}</Typography>
        <Typography variant="p" sx={{ lineHeight: fonts.lineHeight }}>{bodyText}</Typography>
      </CardContent>
    </Card>
  )
}
