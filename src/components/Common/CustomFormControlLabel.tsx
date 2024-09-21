import { Radio, FormControlLabel } from '@mui/material';

// Dinamik props ile özelleştirilebilir FormControlLabel
export default function CustomFormControlLabel({ value, label, sx }: { value: string; label: string; sx?: object }) {
    return (
        <>
            <FormControlLabel
                value={value}
                control={
                    <Radio
                        sx={{
                            color: 'purple',
                            '&.Mui-checked': { color: 'purple' },
                            transform: 'scale(0.8)', // Radio boyutunu küçültmek için
                        }}
                    />
                }
                label={label}
                sx={{
                    '& .MuiFormControlLabel-label': { fontSize: 11 },
                    marginBottom: '-12px', // İki seçenek arasındaki boşluk küçültülür
                    ...sx, // Ekstra stil varsa onları uygula
                }}
            />
        </>
    );
}
