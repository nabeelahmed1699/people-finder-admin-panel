import React from 'react'
// @mui
import Grid from "@mui/material/Grid"


// @components
import CountingCard from 'src/features/dsahboard/components/coutingCard';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Dashboard = () => {
  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Total recovered" total={1352831} color="info" icon={<AcUnitIcon/>} />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Recoverd march" total={714000} icon={<AcUnitIcon/>} />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Total reports" total={1723315} color="warning" icon={<AcUnitIcon/>} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Report march" total={234} color="error" icon={<AcUnitIcon/>} />
          </Grid>
    </Grid>
  )
}

export default Dashboard