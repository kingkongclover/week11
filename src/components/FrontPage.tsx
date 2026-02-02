import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IJoke } from "../hooks/useJokes"

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => void
}

export const HomePage = ({ saveJoke }: FrontPageProps) => {
    const [joke, setJoke] = useState<IJoke | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [reload, setReload] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const fetchJoke = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch("https://official-joke-api.appspot.com/random_joke", { signal })

                if (!response.ok) {
                    throw new Error("Failed to fetch a joke")
                }

                const data: IJoke = await response.json()
                setJoke(data)
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Something went wrong")
                }
            } finally {
                setLoading(false)
            }
        }
        
        fetchJoke()

        return () => {
            controller.abort()
        }
    }, [reload])
        

    return (
        <Card sx={{ width: "40%", margin: "2rem auto", textAlign: "center"}}>
            <CardContent>
                <Typography variant='h5'>
                    Random joke
                </Typography>

                {loading &&
                    <Typography>
                        Loading a joke...
                    </Typography>
                }

                {error && (
                    <Typography color='error' sx={{ mt: 2 }}>
                        {error}
                    </Typography>
                )}

                {joke && !loading && (
                    <>
                        <Typography>{joke.setup}</Typography>
                        <Typography sx={{ fontWeight: "bold"}}>{joke.punchline}</Typography>
                    </>
                )}

            </CardContent>
            <CardActions sx={{ justifyContent: "center"}}>

                <Button variant='contained'
                onClick={() => {
                    setReload((prev) => prev + 1)
                }}
                >
                Get a joke</Button>

                <Button variant='contained'
                onClick={() => {
                    if (joke && saveJoke) {
                        saveJoke({
                            id: joke.id,
                            setup: joke.setup,
                            punchline: joke.punchline,    
                        })
                    }
                }}
                >
                Save joke</Button>

            </CardActions>
        </Card>
    )
}

export default HomePage