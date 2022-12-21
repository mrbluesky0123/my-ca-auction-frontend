import {Box, Typography} from "@mui/material";

export default ({gitlabCommits, agitPosts}) => {
  return (
    <Box>
      <Typography fontSize={"0.875em"} sx={{color: 'text.secondary'}}>
        Gitlab: {gitlabCommits}
      </Typography>
      <Typography fontSize={"0.875em"} sx={{color: 'text.secondary'}}>
        Agit: {agitPosts}
      </Typography>
    </Box>
  )
}
