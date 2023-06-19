import './Sass.scss'


export const SassFCC = () => {

    const onButtonClick = () => {

    }


    return (

        <div>
            <h3 > Sass</h3>

            <div id="box"></div>

            <p className="text-1">Hello</p>
            <p className="text-2">Hello</p>
            <p className="text-3">Hello</p>
            <p className="text-4">Hello</p>
            <p className="text-5">Hello</p>

            <div className="blue-bg">blue</div>
            <div className="black-bg">black</div>
            <div className="red-bg">red</div>

            <h3>Posts</h3>
            <div class="info-important">
                <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
            </div>

            <div class="info">
                <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
            </div>

        </div>

    )

}