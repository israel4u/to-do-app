import Card from "@mui/material/Card"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions, CardContent } from "@mui/material";

function ToDoItem({todo}) {
  
  return (
    <Card sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <Typography vriant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{
          backgroundColor: '#000',
          color: '#fff',
          opacity: '0.75',
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
            opacity: '1',
          }
        }}>Details</Button>
      </CardActions>
    </Card>
    
  )
}

export default ToDoItem;