// import css from './FirstTask.module.css'
import './jQueryTaskFCC.css'

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
        $('.target:nth-child(2)').addClass('bounce')
        $('button:nth-child(3)').css('color', 'gray')
        $(".target:even").addClass("shake");
    }
    const onjQueryKill = () => {
       $("body").addClass("animated hinge")
        setTimeout(() => {
            $("body").addClass("show")
            $("body").removeClass("animated hinge show")
        },5000)
        
    }
    

    return (
        <div>


            {/* Code below this line should not be changed */}
            <div className={'container_fluid'}> {/* mobile - responsive */}
                <h3 className={'text_primary text_center'}> jQuery Playground-</h3>
                <div className={'row'}></div>
                <div className={'col_xs_6'}>
                    <h4>#left-well</h4>
                    <div className={'well'} id="left-well">
                        <button className={'btn btn-default target'} id="target1">#target1</button>
                        <button className={'btn btn-default target'} id="target2">#target2</button>
                        <button className={'btn btn-default target'} id="target3">#target3</button>
                    </div>
                </div>
                <div className={'col_xs_6'}>
                    <h4>#right-well</h4>
                    <div className={'well'} id="right-well">
                        <button className={'btn btn-default target'} id="target4">#target4</button>
                        <button className={'btn btn-default target'} id="target5">#target5</button>
                        <button className={'btn btn-default target'} id="target6">#target6</button>
                    </div>
                </div>

                <button onClick={onjQueryReady} style={{ marginTop: '20px', background: '#2e87e38f' }}>jQuery</button>
                <button onClick={onjQueryKill} style={{ marginTop: '20px', marginLeft: '30px', background: '#2e87e38f' }}>jQuery kill</button>

            </div>

        </div >
    )

}