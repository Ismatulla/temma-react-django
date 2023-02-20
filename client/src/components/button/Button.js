import React from 'react';

import { Button } from "@mui/material"
import colors from "../../constants/colors"

export default function Buttons({ text }) {
  return <Button size="large" sx={{ background: colors.colorBorder, textTransform: 'none', '&:hover': { background: colors.buttonGradient } }} variant="contained">{text ? text : 'no name'}</Button>

}
