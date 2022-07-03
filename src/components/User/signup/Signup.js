import React, { Component } from 'react';
import { signup, checkUsernameAvailability, checkEmailAvailability } from '../../../util/APIUtils';
import './Signup.css';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../../constants';
import 'antd/dist/antd.min.css'
import { Form, Input, Button, notification, Select, Checkbox } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            username: {
                value: ''
            },
            email: {
                value: ''
            },
            community: {
                value: 'Albany Park'
            },
            password: {
                value: '123'
            },
            password2: {
                value: ''
            },
            subscried: {
                value:'false'
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }



    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    
        const signupRequest = {
            email: this.state.email.value,
            username: this.state.username.value,
            community: this.state.community.value,
            password: this.state.password.value,
            subscried: this.state.subscried.value
        };
        
        signup(signupRequest)
        .then(response => {
            //console.log('成功'+response)
            notification.success({
                message: 'Crime App',
                description: "Thank you! You're successfully subscribed!",
            });          
            this.props.history.push("/");
        }).catch(error => {
            notification.error({
                message: 'Crime App',
                description:  error.message ||'Sorry! Something went wrong. Please try again!'//error.message ||
            });
            //console.log(error)
        });
    }

    isFormInvalid() {
        return !(
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.subscried.validateStatus === 'success' 
        );
    }

    render() {
        return (
            <div className="signup-container">
                <h1 className="page-title">subscribe</h1>
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <FormItem label="Username"
                            hasFeedback
                            validateStatus={this.state.username.validateStatus}
                            help={this.state.username.errorMsg}>
                            <Input 
                                size="large"
                                name="username" 
                                autoComplete="off"
                                placeholder="A unique username"
                                value={this.state.username.value} 
                                onBlur={this.validateUsernameAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateUsername)} />    
                        </FormItem>
                        <FormItem 
                            label="Email"
                            hasFeedback
                            validateStatus={this.state.email.validateStatus}
                            help={this.state.email.errorMsg}>
                            <Input 
                                size="large"
                                name="email" 
                                type="email" 
                                autoComplete="off"
                                placeholder="Your email"
                                value={this.state.email.value} 
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateEmail)} />    
                        </FormItem>
                        <FormItem 
                            label="Community"
                            validateStatus={this.state.community.validateStatus}
                            help={this.state.community.errorMsg}>
                            <Select showSearch defaultValue="Albany Park" style={{ width: 160 }} onChange={(value) =>  this.setState({
                                community: {
                                    value: value,
                                    validateStatus: 'success',
                                    errorMsg: null
                                }
                            })} >    
                            <Option value="Albany Park">Albany Park</Option>
                            <Option value="Archer Heights">Archer Heights</Option>
                            <Option value="Armour Square">Armour Square</Option>
                            <Option value="Ashburn">Ashburn</Option>
                            <Option value="Auburn Gresham">Auburn Gresham</Option>
                            <Option value="Austin">Austin</Option>
                            <Option value="Avalon Park">Avalon Park</Option>
                            <Option value="Avondale">Avondale</Option>
                            <Option value="Belmont Cragin">Belmont Cragin</Option>
                            <Option value="Beverly">Beverly</Option>
                            <Option value="Bridgeport">Bridgeport</Option>
                            <Option value="Brighton Park">Brighton Park</Option>
                            <Option value="Burnside">Burnside</Option>
                             </Select>
                        </FormItem>
                        <FormItem 
                            label=""
                            validateStatus={this.state.subscried.validateStatus}
                            help={this.state.subscried.errorMsg}>
                         <Checkbox onChange={(e) =>  {
                             if(e.target.checked == true){
                             this.setState({
                    subscried: {
                    value: e.target.checked,
                    validateStatus: 'success',
                    errorMsg: null
                }})}else{
                    this.setState({
                        subscried: {
                        value: e.target.checked,
                        validateStatus: 'error',
                        errorMsg: 'please check the checkbox for subscribe'
                    }})
                }}
            }>
        I agree to receive subscription crime forecasting reports and alert alerts
        </Checkbox>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                className="signup-form-button"
                                disabled={this.isFormInvalid()}>subscribe</Button>
                            
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }

    // Validation Functions

    validateName = (name) => {
        if(name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
    }

    validateEmail = (email) => {
        if(!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if(!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if(email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateCommunity = (community) => {
        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if(username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: null,
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if(usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkUsernameAvailability(usernameValue)
        .then(response => {
            if(response.available) {
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            } else {
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'error',
                        errorMsg: 'This username is already taken'
                    }
                });
            }
        }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                username: {
                    value: usernameValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if(emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });    
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkEmailAvailability(emailValue)
        .then(response => {
            if(response.available) {
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            } else {
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'error',
                        errorMsg: 'This Email is already registered'
                    }
                });
            }
        }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                email: {
                    value: emailValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validatePassword = (password) => {
        if(password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };            
        }
    }

    validatePassword2 = (password) => {
        if(password != this.state.password.value) {
            console.log(this.state.password)
            return {
                validateStatus: 'error',
                errorMsg: `The password entered twice does not match`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };            
        }
    }

}

export default Signup;