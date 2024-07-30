import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

import { fetchData } from 'services/apiService';
import paths from 'routes/path';

export interface IModuleStatusCards {
  id: number;
  name: string;
  status: string;
  image: string;
  link: string;
}

const ModuleStatusCards = () => {
  const [stats, setStats] = useState<IModuleStatusCards[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data, status } = await fetchData('/modules');
      if (status) {
        setStats(data);
      }
    };
    getData();
  }, []);

  return (
    <>
      {stats.map((cardItem) => {
        return (
          <Grid item xs={12} md={6} xl={4} key={cardItem.id}>
            <Card
              onClick={() =>
                window.open(
                  `${location.origin}${paths.moduleViewer}?link=${cardItem.link}`,
                  '_blank',
                )
              }
            >
              <CardActionArea>
                <CardMedia component="img" alt="green iguana" image={cardItem.image} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ '&:hover': { textDecoration: 'underline' } }}
                  >
                    {cardItem.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Status: {cardItem.status}
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
