import React from 'react'
// @mui
import Grid from "@mui/material/Grid"
// icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PeopleIcon from '@mui/icons-material/People';
import HailIcon from '@mui/icons-material/Hail';


// @components
import CountingCard from 'src/features/dsahboard/components/coutingCard';
import AppVisits from "src/features/dsahboard/appVisits"
const Dashboard = () => {
  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Organizations Registered" total={1352831} color="info" icon={<Diversity3Icon/>} />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Founded People" total={714000} icon={<HailIcon/>} />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Total reports" total={1723315} color="warning" icon={<AcUnitIcon/>} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CountingCard title="Missing people" total={234} color="error" icon={<PeopleIcon/>} />
      </Grid>
      <Grid item xs={12}>
      <AppVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
      </Grid>
    </Grid>
  )
}

export default Dashboard