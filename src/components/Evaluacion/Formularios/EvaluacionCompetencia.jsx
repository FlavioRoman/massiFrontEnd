import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import { Section } from "../../style";
import { useState } from "react";

const Item = styled(Paper)({
  width: "50px",
  height: "50px",
  display: "flex",
  color: "#7659A0",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #AB99C6",
  borderRadius: "100%",
  ":hover": {
    color: "#fff",
    backgroundColor: "#AB99C6",
  },
});

const EvaluacionCompetencia = () => {
  const [progress, setProgress] = useState(73);
  return (
    <Section sx={{ padding: "30px" }}>
      <h5>Evaluación de Competencias</h5>
      <Box sx={{ marginTop: "20px" }}>
        <Grid
          container
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          spacing={2}
        >
          <Grid item sm={12} lg={6}>
            <Box sx={{ padding: "20px 0" }}>
              <h4 style={{ fontWeight: "900" }}>1. MS-Word</h4>
              <Stack
                spacing={2}
                direction="row"
                flexWrap="wrap"
                sx={{ marginTop: "10px" }}
              >
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
              </Stack>
            </Box>
            <Box sx={{ padding: "20px 0" }}>
              <h4 style={{ fontWeight: "900" }}>2. MS-Excel</h4>
              <Stack
                flexWrap="wrap"
                direction="row"
                spacing={2}
                sx={{ marginTop: "10px" }}
              >
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={12} lg={6} sx={{ textAlign: "center" }}>
            <CircularProgress
              size={100}
              value={progress}
              variant="determinate"
            />
            <p>Puntos</p>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default EvaluacionCompetencia;
