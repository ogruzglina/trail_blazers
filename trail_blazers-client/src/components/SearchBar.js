import Input from '@mui/material/Input';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <Input
                style={{ fontSize: "50px", width: "38%", color: "white" }}
                sx={{
                    ':before': { borderBottomColor: 'black' },
                    ':after': { borderBottomColor: 'white' },
                }}
                placeholder="Search for a park or trail"
            />
        </div>
    )
}

export default SearchBar