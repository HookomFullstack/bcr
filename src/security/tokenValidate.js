export const tokenValidate = ({
    values,
    errorToken = 'El campo del token es requerido',
}) => {

    let errors = {}
    
    if (values.token == false) { errors.token = errorToken }
    if(values.token.length <= 5){ errors.token = errorToken}
    return errors

}