import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const NewsItem = (props) => {
    return(
        <div>
          { props.news ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.news.image}
                        title={props.news.title}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.news.title}
                        </Typography>
                        <Typography component="p">
                            {props.news.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.news.url} target="_blank">
                           Link
                        </Button>
                    </CardActions>
                </Card>
          ): null }
        </div>
    )
}
export default NewsItem
