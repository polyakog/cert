import React from "react"
import css from './FirstTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faInfo, faTrash, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const SecTaskFCC = () => {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />

            <div className={css.container_fluid}>
                <div className={css.row}>
                    <div className={css.col_xs_8}><h2 className={css.text_primary + css.text_center}>CatPhotoApp</h2></div>
                    <div className={css.col_xs_4}><a href="#"><img className={css.thick_green_border} src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back." /></a></div>

                </div>

                <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" className={css.img_responsive} alt="Three kittens running towards the camera." />
                <div className={css.row}>
                    <div className={css.col_xs_4}><button className={css.btn + css.btn_btn_primary + css.btn_block}>
                        {/* <i class="fas fa-thumbs-up"></i> */}
                        <FontAwesomeIcon icon={faThumbsUp} />  Likes</button>
                    </div>
                    <div className={css.col_xs_4}>
                        <button className={css.btn + css.btn_primary + css.btn_info}>
                            <FontAwesomeIcon icon={faInfo} /> Info</button></div>
                    <div className={css.col_xs_4}>
                        <button className={css.btn + css.btn_btn_primary + css.btn_danger}>
                            <FontAwesomeIcon icon={faTrash} /> Delete</button></div>

                </div>
                <p>Things cats <span className={css.text_danger}>love:</span></p>
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
                    <div className={css.row}>
                        <div className={css.col_xs_6}><label><input type="radio" name="indoor-outdoor" /> Indoor</label></div>
                        <div className={css.col_xs_6}><label><input type="radio" name="indoor-outdoor" /> Outdoor</label></div>
                    </div>
                    < div className={css.row}>
                        <div className={css.col_xs_4}><label><input type="checkbox" name="personality" /> Loving</label></div>
                        <div className={css.col_xs_4}><label><input type="checkbox" name="personality" /> Lazy</label></div>
                        <div className={css.col_xs_4}><label><input type="checkbox" name="personality" /> Crazy</label></div>
                    </div>
                    <input type="text" placeholder="cat photo URL" required />
                    <button className={css.btn + css.btn_primary} type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Submit</button>
                </form>
            </div>

























        </div>
    )

}