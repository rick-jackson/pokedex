import {
  TextField,
  useMediaQuery,
  CircularProgress,
  Autocomplete as MuiAutocomplete,
} from "@mui/material";

import { capitalizeFirstLetter } from "../../../common/utils/getLabelText";
import useAutoComplete from "../../../common/hooks/useAutocomplete";
import { theme } from "../../../theme";

type AutocompleteProps = {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
};

const Autocomplete: React.FC<AutocompleteProps> = ({ setFilterType }) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { open, setOpen, options, loading } = useAutoComplete();

  return (
    <MuiAutocomplete
      sx={{ minWidth: matches ? 200 : 300 }}
      size="small"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => capitalizeFirstLetter(option.name)}
      options={options}
      loading={loading}
      onChange={(_, data) => {
        if (data) {
          setFilterType(data.name);
        } else {
          setFilterType("");
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Type"
          InputProps={{
            disabled: true,
            readOnly: true,
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
export default Autocomplete;
