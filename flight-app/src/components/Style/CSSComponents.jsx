import './CSSComponents.css';

export const CSSComp = () => {
    return (
        <>
        {/* Inline styling. Multi word properites are camel case in JS */}
        <div className="center">
        <div id="box" style={{backgroundColor: 'red', height: '50px', width: '50px'}}></div>
    </div>
        </>
    );
}