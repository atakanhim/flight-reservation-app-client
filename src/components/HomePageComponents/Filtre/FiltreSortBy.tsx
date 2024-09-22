import { useState } from 'react'
import { Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';

export default function FiltreSortBy() {
    const [sortBy, setSortBy] = useState('Lowest Price');

    // onChange event handler with the correct type
    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value);
    };
    return (
        <div className=''>
            <h1 className='font-bold mb-1'>Sort by:</h1>
            <FormControl variant="outlined" style={{ minWidth: 200, }}>
                <Select
                    style={{ height: 40, }}
                    value={sortBy}
                    onChange={handleSortChange}
                    sx={{
                        height: 40, // Dropdown boyu
                        borderRadius: '11px', // Sağ tarafı tamamen yuvarlatılmış
                        fontSize: 12, // Font boyutu
                        margin: '1px', // Margin ayarı,
                        border: 1,
                        backgroundColor: 'white',
                        color: 'black',
                        borderColor: "white",
                        "&:hover": {
                            borderColor: "purple", // Hover durumunda border rengini değiştirir
                        },



                    }}
                >
                    <MenuItem value="Lowest Price">Lowest Price</MenuItem>
                    <MenuItem value="Highest Price">Highest Price</MenuItem>
                    <MenuItem value="Best Rating">Best Rating</MenuItem>
                </Select>
            </FormControl>
        </div >
    )
}
