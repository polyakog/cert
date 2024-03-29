import React from "react"
import css from './FirstTask.module.css'

export const FirstTaskFCC = () => {
    return(
        <div>
            <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"/>
 
                <div className={css.container_fluid}>
                    <h2 className={css.red_text + css.text_center}>CatPhotoApp</h2>

                    <p>Click here for <a href="#">cat photos</a>.</p>

                    <a href="#"><img className={css.smaller_image + css.thick_green_border} src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."/></a>

                    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" className={css.img_responsive} alt="Three kittens running towards the camera."/>

                <button className={css.btn + css.btn_default}>Like</button>
                        <p>Things cats love:</p>
                        <ul>
                            <li>cat nip</li>
                            <li>laser pointers</li>
                            <li>lasagna</li>
                        </ul>
                        <p>Top 3 things cats hate:</p>
                        <ol>
                            <li>flea treatment</li>
                            <li>thunder</li>
                            <li>other cats</li>
                        </ol>
                        <form action="https://freecatphotoapp.com/submit-cat-photo">
                            <label><input type="radio" name="indoor-outdoor"/> Indoor</label>
                            <label><input type="radio" name="indoor-outdoor"/> Outdoor</label>
                            <label><input type="checkbox" name="personality"/> Loving</label>
                            <label><input type="checkbox" name="personality"/> Lazy</label>
                            <label><input type="checkbox" name="personality"/> Crazy</label>
                            <input type="text" placeholder="cat photo URL" required/>
                                <button type="submit">Submit</button>
                        </form>
                </div>

























        </div>
    )
    
}