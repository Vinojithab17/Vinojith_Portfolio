import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ minWidth: '650px', maxWidth: '650px', margin: 'auto' }}>
      <Box sx={{ margin: 'auto', textAlign: 'center' }}>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong>
        </h1>
      </Box>

      <br></br>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/officel/70/react.png" alt="React"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/fluency/70/node-js.png" alt="node.js" />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/java-coffee-cup-logo--v2.png"
              alt="Java"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/fluency/70/python.png" alt="Python"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/redux.png" alt="Redux"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/fluency/70/javascript.png"
              alt="javascript"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/amazon-web-services.png"
              alt="amazon-web-services"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/amazon-s3.png"
              alt="amazon-s3"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/awslambda.png"
              alt="awslambda"
            ></img>
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/git.png" alt="git"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/ios-glyphs/70/github.png" alt="github" />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/mongodb.png" alt="mongodb"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/mysql-logo.png" alt="mysql"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/html-5--v1.png" alt="html-5"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/css3.png" alt="css3"></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/bootstrap--v2.png"
              alt="bootstrap--v2"
            ></img>
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item>
            <img
              src="https://img.icons8.com/color/70/postgreesql.png"
              alt="postgreesql"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src="https://img.icons8.com/color/70/linux.png" alt="linux"></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
