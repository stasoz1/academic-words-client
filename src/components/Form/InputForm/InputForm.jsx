import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './InputForm.css'
import { TextField,
         InputAdornment,
         Button,
         MenuItem,
         FormControl,
         Select } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import switchBtn from '../../../images/switch.png';
import SearchIcon from '@material-ui/icons/Search';
import { getTranslation } from '../../../redux/translation/translationActions'

const InputForm = () => {
    const [formValue, setFormValue] = useState('');
    const [firstDropdownLanguage, setFirstDropdownLanguage] = useState('ua');
    const [secondDropdownLanguage, setSecondDropdownLanguage] = useState('en');
    const [error, setError] = useState({ isError: false, errorMessage: '' });
    const dispatch = useDispatch();
    const translationObj = useSelector(s => s.translation);
    const languageItems = [
    {
        id: 1,
        languageName: 'Українська',
        languageValue: 'ua'
    },
    {
        id: 2,
        languageName: 'English',
        languageValue: 'en'
    }];

    const clearFormValue = () => setFormValue('');
    const onFormValueChange = (e) => {
        setFormValue(e.target.value);
        if (formValue) {
            setError({ isError: false, errorMessage: '' });
        }
    }
    const onFirstDropdownValueChanged = (e) => {
        if (e.target.value == secondDropdownLanguage) {
            setSecondDropdownLanguage(firstDropdownLanguage)
            setFirstDropdownLanguage(e.target.value);
        } else {
            setFirstDropdownLanguage(e.target.value);
        }
    }

    const onSecondDropdownValueChanged = (e) => {
        if (e.target.value == firstDropdownLanguage) {
            setFirstDropdownLanguage(secondDropdownLanguage)
            setSecondDropdownLanguage(e.target.value);
        } else {
            setSecondDropdownLanguage(e.target.value);
        }
    }
    const selectItems = () => 
        languageItems.map(l => <MenuItem key={l.id} value={l.languageValue}>{l.languageName}</MenuItem>);

    const onSwitchClick = () => {
        setFirstDropdownLanguage(secondDropdownLanguage);
        setSecondDropdownLanguage(firstDropdownLanguage);
    }

    const onSearchClick = () => {
        if (!formValue) {
            setError({ isError: true, errorMessage: 'Введіть слово або речення' });
            return;
        }

        const translateData = {
            from: firstDropdownLanguage,
            to: secondDropdownLanguage,
            text: formValue
        };

        dispatch(getTranslation(translateData));
    }

    return (
        <section id="inputSection">
            <form>
                <div id="inputForm"> 
                    <TextField className="inputWord"
                        id="outlined-basic"
                        error={error.isError}
                        label={error.errorMessage}
                        placeholder="Введіть текст"
                        variant="outlined"
                        value={formValue}
                        onChange={onFormValueChange}
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position="end">
                                <CloseIcon onClick={clearFormValue}/>
                            </InputAdornment>
                    }} />
                    <FormControl variant="outlined" className="fForm">
                        <Select
                            value={firstDropdownLanguage}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="dropdown"
                            onChange={onFirstDropdownValueChanged}
                        >
                            {selectItems()}
                        </Select> 
                    </FormControl>
                    <img alt="switch"
                        onClick={onSwitchClick}
                        src={switchBtn} 
                        id="switchImg"/>
                    <FormControl variant="outlined" className="secForm">
                        <Select
                            value={secondDropdownLanguage}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="dropdown"
                            onChange={onSecondDropdownValueChanged}
                        >
                            {selectItems()}
                    </Select>
                </FormControl> 
                <Button variant="contained" 
                        disableElevation id="searchButton"
                        onClick={onSearchClick}>
                    <SearchIcon className="search"/>
                </Button>
                </div>
            </form>
        </section>
    )
}

export default InputForm