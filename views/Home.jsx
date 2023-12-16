
export function Home() {
    return (
        <div className="home-page">

            <div className="container">
                <div className="search-box">
                    <div className="logo">Hoohle</div>
                    <form action="https://www.google.com/search" method="GET">
                        <input className="search-input" type="text" name="q" placeholder="Search Google..."></input>
                        <button className="search-btn" type="submit">Hoohle Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}