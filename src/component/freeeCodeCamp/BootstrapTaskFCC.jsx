import React from "react"
import css from './FirstTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export const BootstrapTaskFCC = () => {
//     document.ready(function () {
// console.log('document is ready')
//     });
    return (
        <div>
            {/* Code below this line should not be changed */}
            <div className={css.container_fluid}> {/* mobile - responsive */}
                <h3 className={css.text_primary + ' ' + css.text_center}> jQuery Playground-</h3>
                <div className={css.row}></div>
                <div className={css.col_xs_6}>
                    <h4>#left-well</h4>
                    <div class={css.well} id="left-well">
                        <button className={css.btn + ' ' + css.btn_default + ' ' + css.target} id="target1">#target1</button>
                        <button className={css.btn + ' ' + css.btn_default} id="target2">#target2</button>
                        <button className={css.btn + ' ' + css.btn_default} id="target3">#target3</button>
                    </div>
                </div>
                <div className={css.col_xs_6}>
                    <h4>#right-well</h4>
                    <div className={css.well} id="right-well">
                        <button className={css.btn + ' ' + css.btn_default} id="target4">#target4</button>
                        <button className={css.btn + ' ' + css.btn_default} id="target5">#target5</button>
                        <button className={css.btn + ' ' + css.btn_default} id="target6">#target6</button>
                    </div>
                </div>

            </div>

        </div >
    )

}