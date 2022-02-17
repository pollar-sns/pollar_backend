import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function DatePicker(props) {
  const { vote, setVote } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        required
        renderInput={(props) => <TextField {...props} />}
        label="마감시간"
        value={vote.voteExpirationTime}
        onChange={(e) => {
          setVote({
            ...vote,
            voteExpirationTime: e,
          });
        }}
      />
    </LocalizationProvider>
  );
}
