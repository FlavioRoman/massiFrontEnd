import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  padding: "20px",
  marginTop: "20px",
  marginLeft: "auto",
  borderRadius: "20px",
  width: "calc(98% - 60px)",
  fontFamily: "'Comfortaa', cursive",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  marginRight: "1%",
  [theme.breakpoints.up("md")]: {
    width: "calc(98% - 240px)",
  },
}));

export const Article = styled("article")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
}));

export const Title = styled("div")(({ theme }) => ({
  display: "flex",
  fontWeight: "bold",
  alignItems: "center",
}));

export const ListMenu = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  top: "130%",
  width: "100%",
  position: "absolute",
  backgroundColor: "#fff",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  [theme.breakpoints.up("md")]: {
    right: 0,
    left: "initial",
    marginRight: "auto",
    width: "300px",
  },
}));

export const Option = styled("li")({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  width: "100%",
  ":hover": {
    backgroundColor: "#ddd",
  },
});

export const BoxStages = styled("div")(({ theme }) => ({
  rowGapap: "8px",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "20px",
  alignItems: "center",
  justifyContent: "center",
}));

export const Stages = styled("div")(({ theme }) => ({
  color: "#fff",
  width: "230px",
  padding: "10px",
  minHeight: "70px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  display: "flex",
}));

export const ButtonCloseStage = styled("button")(({ theme }) => ({
  width: "100%",
  color: "#E25139",
  marginTop: "20px",
  textAlign: "right",
  fontWeight: "bold",
  marginLeft: "auto",
  fontSize: "1rem",
  cursor: "pointer",
}));

// FILTRO ESTILO
export const BoxFilter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: "20px",

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const Candidates = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

// RESULTADO FILTRO ESTILO
export const BoxResultFilter = styled("div")({
  display: "flex",
  margin: "30px 0",
  columnGap: "20px",
  flexWrap: "wrap",
  rowGap: "10px",
  justifyContent: "center",
});
export const All = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const Pending = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const Approved = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const Notapproved = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

// CARD ESTILO
export const ContainerCard = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "10px",
}));

export const BoxCard = styled("div")(({ theme }) => ({
  minWidth: "250px",
  borderRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const State = styled("div")(({ theme }) => ({
  color: "#ffff",
  textAlign: "center",
  padding: "15px 10px",
  backgroundColor: "#F9B438",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));

export const Statistics = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
}));

export const Star = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Percentage = styled("div")(({ theme }) => ({
  fontWeight: "500",
  fontSize: "1.5rem",
}));

export const Avatar = styled("div")(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "40px",
}));

export const Name = styled("h4")(({ theme }) => ({
  color: "#2C2D2D",
}));

export const Job = styled("p")(({ theme }) => ({
  color: "#575D64",
  fontSize: "0.9rem",
}));

export const Image = styled("img")(({ theme }) => ({
  margin: "auto",
  maxWidth: "120px",
  minHeight: "120px",
  marginBottom: "10px",
}));

export const ButtonProfile = styled("button")(({ theme }) => ({
  margin: "auto",
  color: "#E25139",
  display: "block",
  fontWeight: "bold",
  marginBottom: "40px",
}));
