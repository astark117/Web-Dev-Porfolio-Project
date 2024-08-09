function ContactPage(){
    return(
        <>
            <h2>Contact</h2>
            <article>
                <h3>Contact Anthony Stark</h3>
                <p>* Fields are required.</p>
                <form action="/output" method="POST" >
                    <fieldset>
                        <legend>Basic information</legend>
                        <label for="firstlast" class="required"> First and Last Name</label>
                            <input
                                type="text"
                                name="firstlast" id="firstlast"
                                size="30"
                                maxLength="80"
                                required
                                placeholder="First and last name goes here"
                                autofocus
                                aria-required="true"
                                />
                                <br></br>
                        <label for="email" class="required"> Email Address</label>
                            <input type="email"
                                name="email" id="email"
                                size="30"
                                maxLength="80"
                                required
                                pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
                                placeholder="email@domain.com"
                                aria-required="true"
                                />
                                <br></br>
                        <label for="reason" class="required"> Why are you reaching out?</label>
                            <textarea
                                name="reason" id="'reason"
                                maxLength="500"
                                minlength="1"
                                required
                                aria-required="true"
                                placeholder="500 characters or less"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Feedback for improvement</legend>
                        <p>How would you describe your experience here today?</p>
                        <label for="great">
                            <input type="radio" name="experience" id="great" value="Great"></input>
                            Great!
                        </label>
                        <label for="OK">
                            <input type="radio" name="experience" id="ok" value="Ok"></input>
                            Just OK
                        </label>
                        <label for="poor">
                            <input type="radio" name="experience" id="poor" value="Poor"></input>
                            Could have been better
                        </label>

                        <p>What area of the website could use the most improvement?</p>
                        <select name="improvement" id="improvement">
                            <option value="Gallery Page">Gallery</option>
                            <option value="Contact Page"> Contact Form</option>
                            <option value="Home Page">Home page content</option>
                            <option value="Design"> Design and Layout </option>
                        </select>

                        <p>What would you like to see more of?</p>
                        <label for="projects">
                            <input type="checkbox" name="more" id="projects" value="CodingProjects"/>
                            Coding Projects
                        </label>
                        <label for="hobbies">
                            <input type="checkbox" name="more" id="hobbies" value="Hobbies"/>
                            Personal Hobbies
                        </label>
                        <label for="topics">
                            <input type="checkbox" name="more" id="topics" value="WebDevTopics"/>
                            Web Development topics
                        </label>
                        <label for="bio">
                            <input type="checkbox" name="more" id="personal" value="PersonalBio"/>
                            An "About Me" section
                        </label>
                    </fieldset>
                    <button>Submit form</button>
                </form>
            </article>   
        </>
    )
}

export default ContactPage;