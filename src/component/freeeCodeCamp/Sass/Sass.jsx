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

            <button onClick={onButtonClick} style={{ marginTop: '20px', background: '#2e87e38f' }}>Apply</button>

        </div>

    )

}