import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import UserIcon from '@mui/icons-material/EmojiEmotions';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/DialerSip';
import Title from '../../../../infraestructura/components/title';

interface IProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const DetailInfoForm = ({ name, email, phoneNumber, message }: IProps) => {
  return (
    <>
      <Title title={'Info constct Us'} className="" />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <UserIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone Number" secondary={phoneNumber} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Message" secondary={message} />
        </ListItem>
      </List>
    </>
  );
};

export default DetailInfoForm;
