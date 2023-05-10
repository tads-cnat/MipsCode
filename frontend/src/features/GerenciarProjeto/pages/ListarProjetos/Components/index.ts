import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';

const StyledCard = styled(Card)({
  maxWidth: 345,
});

function CardComponent() {
  return (
    <StyledCard>
      <CardHeader
        title="Card Title"
        subheader="Card Subtitle"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
  
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="adicionar aos favoritos">
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="abrir arquivo">
          <GetAppOutlinedIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}

export default CardComponent;