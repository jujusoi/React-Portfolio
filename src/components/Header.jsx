import Navigation from "./Navigation"

export default function Header() {
    return (
        <>
        <section id="navigation-sect" style={{width: '80%'}}>
            <Navigation />
        </section>
        <section id="coverimg-sect" style={{width: '100%'}}>
            <div id="cover-img-wrap" style={{ height: 220, marginBottom: 50}}>
                <img style={{width: '100%', height: '100%'}} src="/icons/coverimg.jpg" alt="Cover Image" />
            </div>
        </section>
        </>
    )
}