import './Card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';


export default function ImgMediaCard({ isBusy, data }) {
    return (
        <>
            {isBusy ? (<p></p>) : (
                data.map(function (d, id) {
                    return (
                        <Card sx={{ maxWidth: 345, bgcolor: 'white' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={d.urlToImage}
                            />
                            <CardContent>

                                <Typography variant="body2" color="black">
                                    {d.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share" >
                                    <Link to="/news/chat"><ShareIcon/></Link> 
                                </IconButton>
                                <Button size="small"><a href={`${d.url}`} target="_blank" >Learn More</a></Button>
                            </CardActions>
                        </Card>

                    )
                })
            )}
        </>
    );
}

