import Input from '@mui/material/Input';

function SearchBar({ onSearch }) {
    return (
        <div className="searchbar-container">
            <Input
                style={{ fontSize: "50px", width: "38%", color: "white" }}
                sx={{
                    ':before': { borderBottomColor: 'black' },
                    ':after': { borderBottomColor: 'white' },
                }}
                type = "text"
                placeholder="Search for a park or trail"
                onChange = { (e) => onSearch(e.target.value) }
            />
        </div>
    )
}

export default SearchBar