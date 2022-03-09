import Input from '@mui/material/Input';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    inputCenter: {
        textAlign: "center"
    }
});

function SearchBar(props) {
    return (
        <div className="searchbar-container">
            <Input
                style={{ fontSize: "30px", width: "26%", color: "black", backgroundColor: "white", borderRadius: "30px", textAlign: "center", boxShadow: "8px 8px 3px black" }}
                sx={{
                    ':before': { borderBottomColor: 'black' },
                    ':after': { borderBottomColor: 'white' },
                }}
                disableUnderline={true}
                type="text"
                placeholder="Search for a park or trail"
                onChange={(e) => props.onSearch(e.target.value)}
                classes={{
                    input: props.classes.inputCenter
                }}
            />
        </div>
    )
}

SearchBar = withStyles(styles)(SearchBar);

export default SearchBar