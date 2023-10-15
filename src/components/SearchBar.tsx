import { Input } from "antd";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="header-content">
                <h1
                    className="search-bar-title"
                >Let there be Live</h1>
                <h5 className="search-bar-sub-title " >Your next best-night-ever is waiting.
                    <br />
                    And we have the tickets.
                </h5>
            </div>
            <Input

                placeholder="Search for events, venues, or artists"
                className="search-bar-input"
                style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                }}
            />
        </div>
    );
};

export default SearchBar;
