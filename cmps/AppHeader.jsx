const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3 className="animate logo ">Hoohle</h3>
        </Link>
        <nav className="nav-bar">
            <div className="animate">

                <NavLink to="/">Home</NavLink>
            </div>
            <div className="animate">

                <NavLink to="/about">About</NavLink>
            </div>
            <div className="animate">

                <NavLink to="/mail">Mail</NavLink>
            </div>
            <div className="animate">

                <NavLink to="/note">Note</NavLink>
            </div>

        </nav>
    </header>
}
