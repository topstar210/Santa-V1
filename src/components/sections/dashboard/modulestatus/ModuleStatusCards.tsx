import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import ModuleImg from 'assets/images/products/product-1.png';

export interface IModuleStatusCards {
  id: number;
  name: string;
  status: string;
  bgImg: string;
}

export const stats: IModuleStatusCards[] = [
  {
    id: 0,
    name: 'Module1',
    status: 'active',
    bgImg: ModuleImg,
  },

  {
    id: 1,
    name: 'Module2',
    status: 'active',
    bgImg: ModuleImg,
  },
  {
    id: 2,
    name: 'Module3',
    status: 'active',
    bgImg: ModuleImg,
  },
];

const ModuleStatusCards = () => {
  return (
    <>
      {stats.map((cardItem) => {
        return (
          <Grid item xs={12} md={6} xl={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" alt="green iguana" height="350" image={cardItem.bgImg} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cardItem.name} / {cardItem.status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default ModuleStatusCards;
