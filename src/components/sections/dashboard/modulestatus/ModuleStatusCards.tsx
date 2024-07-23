import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

import { fetchData } from 'services/apiService';

// import ModuleImg1 from 'assets/images/modules/photo_2024-07-18_17-25-10.jpg';
// import ModuleImg2 from 'assets/images/modules/photo_2024-07-18_17-25-14.jpg';
// import ModuleImg3 from 'assets/images/modules/photo_2024-07-18_17-25-17.jpg';

export interface IModuleStatusCards {
  id: number;
  name: string;
  status: string;
  image: string;
  link: string;
}

// export const stats: IModuleStatusCards[] = [
//   {
//     id: 0,
//     name: 'Chapter 1 - Five Minute Friend',
//     status: 'Active',
//     bgImg: ModuleImg1,
//   },

//   {
//     id: 1,
//     name: 'Chapter 2 - 12 Keys to Friendship',
//     status: 'Active',
//     bgImg: ModuleImg2,
//   },
//   {
//     id: 2,
//     name: 'Chapter 2 - 12 Keys to Friendship',
//     status: 'Active',
//     bgImg: ModuleImg3,
//   },
// ];

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
            <Card>
              <CardActionArea>
                <CardMedia component="img" alt="green iguana" image={cardItem.image} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ '&:hover': { textDecoration: 'underline' } }}
                    onClick={() => window.open(cardItem.link, '_blank')}
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
