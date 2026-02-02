import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { IJoke } from "../hooks/useJokes"
import Box from "@mui/material/Box"

interface SavedPageProps {
    savedJokes: IJoke[]
    deleteJoke: (id: number) => void
}

export const Saved = ({ savedJokes, deleteJoke }: SavedPageProps) => {
    if (savedJokes.length === 0) {
        return (
            <Typography sx={{ textAlign: "center"}}>
                No saved jokes yet.
            </Typography>
        )
    }

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2}}>
            {savedJokes.map(joke => (
                <Card
                    key={joke.id}
                    sx={{width: "40%", textAlign: "center", margin: "normal"}}
                >
                    <CardContent>
                        <Typography>{joke.setup}</Typography>
                        <Typography sx={{fontWeight: "bold"}}>
                            {joke.punchline}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "center"}}>
                        <Button
                            variant="outlined"
                            onClick={() => deleteJoke(joke.id)}
                        >
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default Saved