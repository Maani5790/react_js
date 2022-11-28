function CustomBtn(props) {
    console.log('props', props)

    return <button
        style={{ background: props.color || 'lightblue', width: 150, height: 50 }}
        onClick={() => alert('Mujse contact karna ki auqat nahi hai!')}>

        {/* {props.title ? props.title : 'Contact me'} */}

        {props.title || 'Contact me'}
    </button>
}

export default CustomBtn