import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    span: {
        color: 'red'
    }
})

const positions = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre Back',
    'Centre Forward',
    'Centre Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left Back',
    'Right Back',
]

const formValid = formErrors => {
    let valid = true
    Object.values(formErrors).forEach( e => e.length > 0 && (valid = false))
    return valid
}

class FormData extends Component {
    state = {
        name: '',
        position: '',
        age: '',
        formErrors: {
            name: '',
            position: '',
            age: ''
        },
    }

    handleChange = name => event => {  
        
        let value = event.target.value
        let formErrors = this.state.formErrors   
        
        switch (name) {
            case 'name':
                const letters = new RegExp("^[a-zA-Z ]+$")
                formErrors.name = letters.test(value) ? '' : 'Only letters are allow on this field.'
                break
            case 'position':
                formErrors.position = value.length > 0 ? '': 'Position need to be selected.'
            break
            case 'age':
                const numbers = new RegExp('^[0-9]+$')
                formErrors.age = numbers.test(value) && (Number(value) >= 18 && Number(value) <= 40) ? '' : 'Only numbers are allow on this field and the age needs to be 18 to 40.'
                break
            default:
                break
        }
        this.setState({ formErrors, [name]: event.target.value })
    }

    handleSubmit = () => {
        
        if(formValid(this.state.formErrors)){
            const query = {
                name: this.state.name,
                position: this.state.position,
                age: this.state.age
            }
            this.props.search.takeInput(query)
        }else{
            console.log('error submit')
            
        }
    }

    render () {
        const {formErrors} =this.state
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={8}
            >
            <Grid item md={2} sm={4} xs={12}>
                <TextField
                    label="Name"
                    margin="normal"
                    className={styles.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    fullWidth
                />
                {formErrors.name.length > 0 &&
                    <span className={styles.span}> {formErrors.name} </span>
                }
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                <TextField
                    select
                    label="Position"
                    className={styles.textField}
                    value={this.state.position}
                    onChange={this.handleChange('position')}
                    SelectProps={{
                        MenuProps: {
                        className: styles.menu,
                        },
                    }}
                    
                    margin="normal"
                    fullWidth
                >
                    
                    {positions.map((element,index) => (
                        <MenuItem key={index} value={element}>
                            {element}
                        </MenuItem>
                    ))}
                    
                </TextField>
                {formErrors.position.length > 0 &&
                    <span> {formErrors.position} </span>
                }
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                <TextField
                    label="Age"
                    margin="normal"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className={styles.textField}
                    fullWidth
                />
                {formErrors.age.length > 0 &&
                    <span> {formErrors.age} </span>
                }
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                <Button 
                    variant="contained"
                    className={styles.buttom}
                    onClick = {this.handleSubmit}
                    fullWidth
                >
                    search
                </Button>
            </Grid>    
            </Grid>
        )
    }
}

export default FormData