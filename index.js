//Your Code Here+
let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if (secondAnswer === 'follow it') {
        let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(secondAnswer === 'stay') {
            let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
        } else if (secondAnswer === 'spread the word') {
            let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

    }
} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which do you choose?`)
    if (secondAnswer === 'past the dragon'){
        let secondAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:')
        if (secondAnswer === 'stay'){
            let secondAnswer = window.prompt('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
        }
        else if (secondAnswer === 'away'){
            let secondAnswer = window.prompt("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
        }
    }
    if (secondAnswer === 'away'){
        let secondAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
            if(secondAnswer === 'draw it'){
                let secondAnswer = window.prompt('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
            }
            else if (secondAnswer === 'pick it'){
                let secondAnswer = window.prompt('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
            }
        }
}
