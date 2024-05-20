export default function History() { 
    return( 
        <Resume>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque.</span>

        </Resume>
    )
}

const Resume = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 

    span { 
        width: 50%; 
        height: 100%;
    }
`
const ImageBox = styled.div`
    width: 50%; 
    height: 50%; 
`