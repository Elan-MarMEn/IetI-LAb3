import React, { Component } from 'react';
import Drawers from '../Drawer/Drawers';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {user:' ',pass:'', Logged: false};
    this.handleUser = this.handleUser.bind(this)
    this.handlePass = this.handlePass.bind(this);
  }

  handleUser(e){
    this.setState({user: e.target.value});
  }
  handlePass(e){
    this.setState({pass: e.target.value});
  }
  submitFormHandler(e){
    e.preventDefault();

    if (this.state.pass === "koala") {
        this.setState({Logged: true})
       localStorage.setItem('email', this.state.user);
    }else{
        window.location.reload();
    }
  }


  genLoginJSx(){
    return(
    <React.Fragment>
    <CssBaseline />
    <main className="layout">
        <Paper className="paper">
            <Avatar className="avatar">
                <LockIcon />
            </Avatar>
            <Typography variant="h2">Sign in</Typography>
            <form className="form" onSubmit={this.submitFormHandler.bind(this)}>
                <FormControl margin="normal" required fullWidth onChange={this.handleUser}>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handlePass}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                >
                    Sign in
                </Button>
            </form>
        </Paper>
        </main>
    </React.Fragment>
    )
  }



  render() {

    if (this.state.Logged) {
      return <Drawers/>
    } else {
      return this.genLoginJSx() 
    }
    
  }
}

export default Login;
