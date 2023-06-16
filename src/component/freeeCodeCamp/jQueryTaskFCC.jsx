import React, { useEffect } from "react"
import css from './FirstTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"

export const JQueryTaskFCC = () => {

    // document.ready(function () {
    //     console.log('document is ready')
    // });

const onjQueryReady = () => {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $('h3').html('<em>jQuery</em>')
    $("#target4").remove();
    $("#target2").appendTo("#right-well")
    $('#target5').clone().appendTo('#left-well')
    $('#target1').parent().css('background-color', 'red')
    $('#right-well').children().css('color', 'orange')


}

    // useEffect(() => {

    //     $(function () {
    //         $("#target1").css("color", "red");
    //         $("#target1").prop("disabled", true);
    //         // $("#target4").remove();
    //         $("#target2").appendTo("#right-well")

    //     });
    // }, [])

    return (
        <div>


            {/* Code below this line should not be changed */}
            <div className={css.container_fluid}> {/* mobile - responsive */}
                <h3 className={css.text_primary + ' ' + css.text_center}> jQuery Playground-</h3>
                <div className={css.row}></div>
                <div className={css.col_xs_6}>
                    <h4>#left-well</h4>
                    <div className={css.well} id="left-well">
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

                <button onClick={onjQueryReady} style={{ marginTop: '20px', background: '#2e87e38f'}}>jQuery</button>

            </div>

        </div >
    )

}