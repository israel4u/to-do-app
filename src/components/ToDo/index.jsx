import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions";

function ToDoItem({todo, fetchDetailsOfCurrentTodo}) {
  
  return (
    <Card sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
      </CardContent>
      <CardActions>
        <Button
         onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)}
         sx={{
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