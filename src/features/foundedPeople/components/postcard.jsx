import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {  Table, TableContainer,TableRow, TableCell } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function PostCard() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Nabeel Ahmed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>23</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
     
      
    </Card>
  );
}