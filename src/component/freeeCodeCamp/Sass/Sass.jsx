import './Sass.scss'


export const SassFCC = () => {

    const onButtonClick = () => {

    }

   
    return (

        <div>
            <h3 > Sass</h3>

            <div id="box"></div>

            <p class="text-1">Hello</p>
            <p class="text-2">Hello</p>
            <p class="text-3">Hello</p>
            <p class="text-4">Hello</p>
            <p class="text-5">Hello</p>

            <button onClick={onButtonClick} style={{ marginTop: '20px', background: '#2e87e38f' }}>Apply</button>

        </div>

    )

}