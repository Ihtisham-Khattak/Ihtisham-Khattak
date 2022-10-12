import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

export default function RowCard() {
  return (
    <Card
      row
      variant="outlined"
      sx={{ width: 260, bgcolor: "background.body" }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://avatars.githubusercontent.com/u/86098390?v=4?auto=format&fit=crop&w=90"
            srcSet="https://avatars.githubusercontent.com/u/86098390?v=4?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ px: 2 }}>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          Ihtesham Khatak 
        <Typography level='body3' display="block">BS Software Engineering</Typography>
        </Typography>
        <Typography level="body2">Peshawar, Pakistan</Typography>
      </CardContent>
      <Divider />
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          textAlign: "center",
          fontSize: "xs2",
          fontWeight: "xl2",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}
      >
        sure
      </CardOverflow>
    </Card>
  );
}
