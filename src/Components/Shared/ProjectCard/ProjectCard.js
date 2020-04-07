import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import LanguageIcon from '@material-ui/icons/Language';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
    margin: '2em',
  },
  title: {
    marginBottom: 0,
    color: 'white',
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 2px',
    backgroundColor: '#343a40',
    borderRadius: 4,
  },
  subHeading: {
    marginTop: 8,
    color: 'white',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(19, 228, 228)',
  },
}));

const ReviewCard = (props) => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });
  return (
    <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={props.project.screenshot}
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>{props.project.title}</h3>
        <Box
          display={'flex'}
          alignItems={'center'}
          mb={1}
          className={gutterStyles.parent}
        >
        </Box>
        <Typography className={styles.text} variant={'body2'}>
          {props.project.description}
        </Typography>
        <h6 className={styles.subHeading}>Technologies Used:</h6>
        <Typography className={styles.text} variant={'body2'}>
          {props.project.technologiesUsed}
        </Typography>
        <Box
          mt={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            className={gutterStyles.parent}
          >
            <IconButton aria-label="github" onClick={() => window.open(props.project.githubUrl)}>
              <GitHubIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
            </IconButton>
           <IconButton aria-label="hostedUrl" onClick={() => window.open(props.project.url)}>
              <LanguageIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
           </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};


export default ReviewCard;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import LanguageIcon from '@material-ui/icons/Language';
// import Typography from '@material-ui/core/Typography';
// import GitHubIcon from '@material-ui/icons/GitHub';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     margin: '1em',
//     border: 'solid',
//     borderColor: 'rgb(19, 228, 228)',
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   avatar: {
//     height: '2em',
//     width: '2em',
//   },
//   avatarImg: {
//     height: '2em',
//     width: '2em',
//   },
//   style: {
//     backgroundColor: '#B4B0AF',
//     color: 'black',
//   },
//   header: {
//     backgroundColor: '#B4B0AF',
//     color: 'black',
//     variant: 'h1',
//   },
// }));

// export default function ProjCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardHeader className={classes.header}
//         avatar={
//           <Avatar className={classes.avatar}>
//            <img src="http://share-fastly.picmonkey.com/prod/photo_posts/7YekgmznLzr_21258830.jpg" alt="me" className={classes.avatarImg}/>
//           </Avatar>
//         }
//         title={props.project.title}
//         titleTypographyProps={ { variant: 'h8', fontWeight: 'fontWeightBold' } }
//       />
//       <CardMedia
//         className={classes.media}
//         image={props.project.screenshot}
//         title="Paella dish"
//       />
//       <CardContent className={classes.style}>
//         <Typography variant="body2" component="p" align="center">
//           {props.project.description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing class={classes.style}>
//         <IconButton aria-label="github" onClick={() => window.open(props.project.githubUrl)}>
//           <GitHubIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
//         </IconButton>
//         <IconButton aria-label="hostedUrl" onClick={() => window.open(props.project.url)}>
//           <LanguageIcon fontSize="large" style={ { fill: 'rgb(19, 228, 228)' } }/>
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }


/* <Card className="bg-dark text-white projectCard">
                                    <Card.Img src={project.screenshot} alt="Card Image" className="screenshotOverlay" />
                                      <Card.ImgOverlay>
                                      { (project.title.includes('Capstone')) ? (<Card.Title className="text-center projTitle"><span3>{project.title}</span3></Card.Title>)
                                        : (<Card.Title className="text-center projTitle">{project.title}</Card.Title>)
                                      }
                                        <Card.Text className="text-center projText">
                                          {project.description}
                                        </Card.Text>
                                        <Card.Text className="text-center projTechUsed">
                                          <span2>Technologies Used: </span2>{project.technologiesUsed}
                                        </Card.Text>
                                          <Card.Text className="d-inline-flex icons">
                                            <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'githubIcon' }}>
                                              <div>
                                                <a href={project.githubUrl}><FaGithub /></a>
                                              </div>
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ color: 'rgb(19, 228, 228)', className: 'webIcon' }}>
                                              <div>
                                                <a href={project.url}><FaGlobe /></a>
                                              </div>
                                            </IconContext.Provider>
                                          </Card.Text>
                                      </Card.ImgOverlay>
                                  </Card> */