import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Header from '../components/Header.component'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}))

const featuredPosts = [
  {
    title: 'יפו בסגר, מה לעשות?',
    date: '24 דצמבר',
    description:
      'בכתבה זו תמצאו את כל המקומות הכי נחשקים ביפו בימי קורונה אלו, איפה אוכלים איפה שותים ואיפה לא מתבודדים.',
    image: './public/assets/yafo.jpg'
  },
  {
    title: 'עסקאות הנדל"ן המפתיעות של השנה',
    date: '27 דצמבר',
    description:
      'סיכום העסקאות הגדולות ביותר במדינה שמחיר הנדל"ן עולה ללא הפסקה, אין ביקורת ממשלתית, וכל אחד רוצה לעשות קופה.',
    image: '../public/assets/yafo.jpg'
  }
]

const Blog = () => {
  const classes = useStyles()
  const sections = [
    { title: 'נדל"ן לוהט', url: '#' },
    { title: 'טיולים וטבע', url: '#' },
    { title: 'תרבות בעיר', url: '#' },
    { title: 'אומנות ואדריכלות', url: '#' },
    { title: 'עסקאות נדל"ן', url: '#' }
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title='נדלנ"יסט' sections={sections} />
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            כתבות
          </Typography>
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    נדל"ניסט: בלוג הנדל"ן שהם לא רוצים שתגלו:
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  בלוג הנדל"ן הטוב ביותר במדינת ישראל. כאן תמצאו את הכתבות, החדשות, והדעות שמסתירים ממכם בכל מקום אחר. נדל"ניסט, כי ידע זה כוח.
                  </Typography>
                  <Link variant="subtitle1" href="https://segelstein.com/">
                    המשך קריאה...
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                        המשך קריאה...
                        </Typography>
                        <Link variant="subtitle1" href="https://segelstein.com/%d7%9e%d7%a7%d7%a8%d7%a7%d7%a2%d7%99%d7%9f/">
                    עורך דין מעולה למקרקעין 
                  </Link>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
    </>
  )
}

export default Blog