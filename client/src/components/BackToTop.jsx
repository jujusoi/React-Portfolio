
export default function BackToTop() {
    
    const smoothScroll = () => {
        const target = document.querySelector('#nav-list');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    
    return (
        <>
        <br />
        <div id="cta" style={{textAlign: "center", display: 'none'}}>
        <a onClick={smoothScroll}>Back to top</a>
        </div>
        <br />
        </>
    );
};