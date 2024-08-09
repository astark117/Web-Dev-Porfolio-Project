function HomePage(){
    return(
        <>
            <h2> Home Page</h2>
            <article>
                    <h3>Career Goals</h3>
                    <p>
                        My goal is to pivot from my current role, as a healthcare college instructor, to a role in bioinformatics or another healthcare application
                        of computer science. 
                    </p>
            </article>    
            <article>
                <h3>Technologies used</h3>
                <p>
                    The technologies used to build this website include HTML, CSS, JavaScript, Node/Express, MongoDB, and React.
                    The content (including this text) is almost all written in <strong>HTML</strong>. 
                    The background, page layouts, font details, and color palette were all configured in <strong>Cascading Style Sheets</strong> (CSS). 
                    <strong>JavaScript</strong> was used to implement dynamic features and configure the Node/Express platform.
                    The website is running on the <strong>Node.js</strong> environment with <strong>Express.js</strong> handling the routing, middleware, and APIs.
                    The backend utilizes a <strong>REST API</strong> to exchange data with a <strong>MongoDB</strong> document based database to perform <strong>CRUD</strong> operations.
                    The frontend was built using <strong>React</strong>, which enables CRUD operations, navigation, and the rest of the frontend functionality.
                </p>
            </article>
        </>
    )
}

export default HomePage;