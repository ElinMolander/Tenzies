

export default function Die(prop){
    
    const styleLight = {
        backgroundColor : prop.isHeld ? "#2EA2AB" : "#FFF",
    }
    const styleDark = {
        backgroundColor : !prop.isHeld ? "#2EA2AB" : "#FFF",
    }
    
    
    return (
        <div className='die' style = {styleDark}>
            {prop.value === 1 && <div className='div-container' onClick={prop.holdDice}>
            <div className='dott' style = {styleLight}></div></div>}
            {prop.value === 2 && <div className='div-container' onClick={prop.holdDice}>
                <div className='dice-numer'>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott-none'></div>
                    </div>
                    <div className='dice-space'>
                        <div className='dott-none'></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                </div>
            </div>}
            {prop.value === 3 && <div className='div-container' onClick={prop.holdDice}>
                <div className='dice-numer'>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott-none'></div>
                    </div>
                    <div className='dice-space-center'> 
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space'>
                        <div className='dott-none'></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                </div>
            </div>}
            {prop.value === 4 && <div className='div-container' onClick={prop.holdDice}>
                <div className='dice-numer'>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                </div>
            </div>}
            {prop.value === 5 && <div className='div-container' onClick={prop.holdDice}>
                <div className='dice-numer'>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space-center'> 
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                </div>
            </div>}
            {prop.value === 6 && <div className='div-container' onClick={prop.holdDice}>
                <div className='dice-numer'>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space'> 
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                    <div className='dice-space'>
                        <div className='dott' style = {styleLight}></div>
                        <div className='dott' style = {styleLight}></div>
                    </div>
                </div>
            </div>}
        </div>
    )
}