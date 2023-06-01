import React from "react"
import css from './FirstTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export const BootstrapTaskFCC = () => {
    return (
        <div>
            <div className={css.container_fluid}> {/* mobile - responsive */}
                <h3 className={css.text_primary + ' ' + css.text_center}> jQuery Playground</h3>
                <div className={css.row}></div>
                <div class={css.col_xs_6}>
                    <div class={css.well}>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                    </div>
                </div>
                <div class={css.col_xs_6}>
                    <div class={css.well}>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                        <button className={css.btn + ' ' + css.btn_default}></button>
                    </div>
                </div>

            </div>

        </div >
    )

}