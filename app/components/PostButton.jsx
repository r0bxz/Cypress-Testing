'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((data) => {
            console.log({data})
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button test-data="post" onClick={handleClick}>
            Post Data
        </Button>
    )
}