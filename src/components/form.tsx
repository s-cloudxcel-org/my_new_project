import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import Flag from 'react-world-flags';
import './form.css';

const Form: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>(''); // Default country code
  const [error, setError] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setName('');
    setEmail('');
    setCompany('');
    setContactNumber('');
    setCountryCode('');
    setError(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim() || !contactNumber.trim()) {
      setError(true);
      return;
    }
    console.log('Form Submitted', { name, email, company, contactNumber, countryCode });
    handleDialogClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* First Page */}
      <Box textAlign="center" padding={4}>
        <Typography variant="h3" gutterBottom>
          CloudXcel Ltd
        </Typography>
        <Typography variant="h6" paragraph>
          Book an appointment with CloudXcel Solution team
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleDialogOpen}>
          Access Solution Team
        </Button>
      </Box>

      {/* Dialog Box */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Access the CloudXcel Solution Team</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Please enter your details to schedule an appointment with our team.
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              className="textField"
              label="Your Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              error={error && !name.trim()}
              helperText={error && !name.trim() ? 'Name is required' : ''}
            />
            <TextField
              className="textField"
              label="Your Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              error={error && !email.trim()}
              helperText={error && !email.trim() ? 'Email is required' : ''}
            />
            <TextField
              className="textField"
              label="Company Name"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              margin="normal"
              error={error && !company.trim()}
              helperText={error && !company.trim() ? 'Company name is required' : ''}
            />
            <Box display="flex" gap={2}>
              {/* Country Code and Flag Select */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Country Code</InputLabel>
                <Select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="+1">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="US" style={{ width: 20, height: 20 }} />
                      United States (+1)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+49">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="DE" style={{ width: 20, height: 20 }} />
                      Germany (+49)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+44">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="GB" style={{ width: 20, height: 20 }} />
                      United Kingdom (+44)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+91">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="IN" style={{ width: 20, height: 20 }} />
                      India (+91)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+86">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="CN" style={{ width: 20, height: 20 }} />
                      China (+86)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+81">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="JP" style={{ width: 20, height: 20 }} />
                      Japan (+81)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+33">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="FR" style={{ width: 20, height: 20 }} />
                      France (+33)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+39">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="IT" style={{ width: 20, height: 20 }} />
                      Italy (+39)
                    </Box>
                  </MenuItem>
                  <MenuItem value="+34">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Flag code="ES" style={{ width: 20, height: 20 }} />
                      Spain (+34)
                    </Box>
                  </MenuItem>
                  {/* Add more country options here */}
                </Select>
              </FormControl>

              <TextField
                className="textField"
                label="Contact Number"
                fullWidth
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                margin="normal"
                error={error && !contactNumber.trim()}
                helperText={error && !contactNumber.trim() ? 'Contact number is required' : ''}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Form;
